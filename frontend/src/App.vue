<script setup>
import { ref, onMounted, watch } from 'vue';
import { 
  Sparkles, 
  Dices, 
  Copy, 
  Share2, 
  RefreshCw, 
  Flame, 
  Scroll, 
  Dice5,
  BookOpen
} from 'lucide-vue-next';

import Navbar from './components/Navbar.vue';
import CodexView from './components/CodexView.vue';
import NpcCardStandard from './components/NpcCardStandard.vue';
import NpcCardMyria from './components/NpcCardMyria.vue';
import Toast from './components/Toast.vue';
import { generateNpc } from './engine/npcGenerator.js';

// App State
const activeTab = ref('tavern'); // 'tavern' | 'codex'
const mode = ref('standard');     // 'standard' | 'myria'
const gender = ref('any');        // 'any' | 'male' | 'female'
const seed = ref('');
const npc = ref(null);
const loading = ref(false);

// Toast State
const toast = ref({
  show: false,
  message: '',
  type: 'success'
});

function showToast(message, type = 'success') {
  toast.value = { show: true, message, type };
  setTimeout(() => {
    toast.value.show = false;
  }, 3000);
}

// Synchronize URL parameters
function updateBrowserUrl() {
  const params = new URLSearchParams();
  if (activeTab.value && activeTab.value !== 'tavern') {
    params.set('tab', activeTab.value);
  }
  if (mode.value && mode.value !== 'standard') {
    params.set('mode', mode.value);
  }
  if (seed.value) {
    params.set('seed', seed.value);
  }
  if (gender.value && gender.value !== 'any') {
    params.set('gender', gender.value);
  }

  const queryStr = params.toString();
  const newUrl = queryStr ? `${window.location.pathname}?${queryStr}` : window.location.pathname;
  window.history.replaceState({}, '', newUrl);
}

// Fetch NPC from backend or fallback to client-side engine
async function fetchNpc(explicitSeed = null) {
  loading.value = true;
  try {
    const params = new URLSearchParams();
    params.set('mode', mode.value);

    const targetSeed = explicitSeed !== null ? explicitSeed : seed.value.trim();
    if (targetSeed) {
      params.set('seed', targetSeed);
    }

    if (gender.value !== 'any') {
      params.set('gender', gender.value);
    }

    let generatedData = null;

    try {
      const res = await fetch(`/api/npc/random?${params.toString()}`);
      if (res.ok) {
        generatedData = await res.json();
      }
    } catch (apiErr) {
      // Backend not running / proxy error -> use embedded client-side deterministic engine
    }

    if (!generatedData) {
      generatedData = generateNpc(targetSeed || undefined, {
        mode: mode.value,
        gender: gender.value !== 'any' ? gender.value : undefined
      });
    }

    npc.value = generatedData;
    seed.value = generatedData.seed;
    updateBrowserUrl();
  } catch (err) {
    console.error('Error generating NPC:', err);
    showToast('Failed to generate character.', 'error');
  } finally {
    loading.value = false;
  }
}

// Generate new random stranger
function generateNewStranger() {
  fetchNpc('');
}

// Copy Obsidian / Notion Markdown
async function copyMarkdown() {
  if (!npc.value?.markdown) return;
  try {
    await navigator.clipboard.writeText(npc.value.markdown);
    showToast('Statblock Markdown copied for Obsidian / Notion!');
  } catch (err) {
    showToast('Failed to copy to clipboard.', 'error');
  }
}

// Copy Shareable URL
async function shareUrl() {
  try {
    updateBrowserUrl();
    await navigator.clipboard.writeText(window.location.href);
    showToast('Deterministic link copied to clipboard!');
  } catch (err) {
    showToast('Failed to copy URL.', 'error');
  }
}

// Watch Mode changes
watch(mode, () => {
  if (activeTab.value === 'tavern') {
    fetchNpc(seed.value || '');
  } else {
    updateBrowserUrl();
  }
});

// Watch Tab changes
watch(activeTab, () => {
  updateBrowserUrl();
});

// Watch Gender changes
watch(gender, () => {
  fetchNpc('');
});

// Initialize on page load
onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const initialTab = urlParams.get('tab');
  const initialMode = urlParams.get('mode');
  const initialSeed = urlParams.get('seed');
  const initialGender = urlParams.get('gender');

  if (initialTab && ['tavern', 'codex'].includes(initialTab.toLowerCase())) {
    activeTab.value = initialTab.toLowerCase();
  }

  if (initialMode && ['standard', 'myria'].includes(initialMode.toLowerCase())) {
    mode.value = initialMode.toLowerCase();
  }

  if (initialGender && ['male', 'female'].includes(initialGender.toLowerCase())) {
    gender.value = initialGender.toLowerCase();
  }

  if (initialSeed) {
    seed.value = initialSeed;
  }

  fetchNpc(initialSeed || null);
});
</script>

<template>
  <div class="min-h-screen flex flex-col bg-tavern-950 bg-tavern-vignette text-slate-200">
    <!-- Ambient Torch Background -->
    <div class="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-parchment-glow pointer-events-none opacity-40 blur-3xl"></div>

    <!-- Header Navigation -->
    <Navbar 
      v-model:active-tab="activeTab" 
      v-model:mode="mode" 
      :seed="seed" 
    />

    <!-- Main View Container -->
    <main class="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 flex flex-col items-center">
      
      <!-- TAB 1: THE TAVERN (NPC Generator) -->
      <div v-if="activeTab === 'tavern'" class="w-full flex flex-col items-center animate-fadeIn">
        <!-- Controls & Filter Toolbar -->
        <section class="w-full max-w-4xl mb-6 p-4 rounded-2xl bg-tavern-900/60 border border-tavern-border/60 shadow-xl backdrop-blur-sm">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
            <!-- Gender Selector -->
            <div class="flex items-center gap-2 w-full sm:w-auto">
              <span class="text-xs font-semibold uppercase tracking-wider text-slate-400 shrink-0">Gender:</span>
              <div class="inline-flex rounded-lg bg-tavern-850 p-0.5 border border-tavern-border text-xs">
                <button
                  type="button"
                  @click="gender = 'any'"
                  class="px-2.5 py-1 rounded-md font-medium transition-colors"
                  :class="gender === 'any' ? 'bg-tavern-700 text-amber-300 shadow' : 'text-slate-400 hover:text-slate-200'"
                >
                  Any
                </button>
                <button
                  type="button"
                  @click="gender = 'male'"
                  class="px-2.5 py-1 rounded-md font-medium transition-colors"
                  :class="gender === 'male' ? 'bg-sky-900/60 text-sky-200 border border-sky-500/30' : 'text-slate-400 hover:text-slate-200'"
                >
                  Male
                </button>
                <button
                  type="button"
                  @click="gender = 'female'"
                  class="px-2.5 py-1 rounded-md font-medium transition-colors"
                  :class="gender === 'female' ? 'bg-rose-900/60 text-rose-200 border border-rose-500/30' : 'text-slate-400 hover:text-slate-200'"
                >
                  Female
                </button>
              </div>
            </div>

            <!-- Seed Input Field -->
            <div class="flex items-center gap-2 w-full sm:w-auto">
              <span class="text-xs font-semibold uppercase tracking-wider text-slate-400 shrink-0">Seed:</span>
              <div class="relative flex-1 sm:w-48">
                <input
                  v-model="seed"
                  @keydown.enter="fetchNpc(seed)"
                  type="text"
                  placeholder="random seed..."
                  class="w-full bg-tavern-950/80 border border-tavern-border rounded-lg px-3 py-1.5 text-xs sm:text-sm font-mono text-amber-200 focus:outline-none focus:border-amber-500/50 transition-colors"
                />
              </div>
              <button
                type="button"
                @click="fetchNpc(seed)"
                title="Generate with Seed"
                class="p-2 rounded-lg bg-tavern-800 hover:bg-tavern-750 text-amber-400 border border-tavern-border transition-colors shrink-0"
              >
                <RefreshCw class="w-4 h-4" :class="{ 'animate-spin': loading }" />
              </button>
            </div>
          </div>
        </section>

        <!-- Primary Action Buttons -->
        <section class="flex flex-wrap items-center justify-center gap-3.5 mb-8">
          <!-- Main Generate Button -->
          <button
            type="button"
            @click="generateNewStranger"
            :disabled="loading"
            class="relative group flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-500 text-tavern-950 font-bold font-cinzel text-base tracking-wider shadow-lg shadow-amber-600/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 select-none disabled:opacity-50"
          >
            <Dices class="w-5 h-5 text-tavern-950" />
            <span>Generate Stranger</span>
            <span class="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></span>
          </button>

          <!-- Copy Markdown Button -->
          <button
            type="button"
            @click="copyMarkdown"
            :disabled="!npc"
            class="flex items-center gap-2 px-4 py-3 rounded-xl bg-tavern-850 hover:bg-tavern-800 text-slate-200 font-medium text-sm border border-tavern-border hover:border-amber-500/40 shadow-sm transition-all duration-200 disabled:opacity-50"
          >
            <Copy class="w-4 h-4 text-amber-400" />
            <span>Copy Markdown</span>
          </button>

          <!-- Share Link Button -->
          <button
            type="button"
            @click="shareUrl"
            :disabled="!npc"
            class="flex items-center gap-2 px-4 py-3 rounded-xl bg-tavern-850 hover:bg-tavern-800 text-slate-200 font-medium text-sm border border-tavern-border hover:border-amber-500/40 shadow-sm transition-all duration-200 disabled:opacity-50"
          >
            <Share2 class="w-4 h-4 text-slate-400" />
            <span>Share URL</span>
          </button>
        </section>

        <!-- NPC Card Area -->
        <section class="w-full flex justify-center">
          <!-- Loading State Skeleton -->
          <div v-if="loading && !npc" class="w-full max-w-4xl h-96 rounded-2xl bg-tavern-900/50 border border-tavern-border animate-pulse flex items-center justify-center">
            <div class="flex flex-col items-center gap-3 text-slate-400">
              <RefreshCw class="w-8 h-8 animate-spin text-amber-500" />
              <span class="font-cinzel tracking-wider text-sm">Consulting the tavern ledgers...</span>
            </div>
          </div>

          <!-- Rendered Card with Mode Dispatch -->
          <Transition name="fade" mode="out-in">
            <NpcCardStandard v-if="npc && mode === 'standard'" :key="'standard-' + npc.seed" :npc="npc" />
            <NpcCardMyria v-else-if="npc && mode === 'myria'" :key="'myria-' + npc.seed" :npc="npc" />
          </Transition>
        </section>
      </div>

      <!-- TAB 2: MYRIA CODEX (Interactive Compendium) -->
      <div v-else-if="activeTab === 'codex'" class="w-full animate-fadeIn">
        <CodexView />
      </div>
    </main>

    <!-- Footer -->
    <footer class="border-t border-tavern-border/50 py-6 text-center text-xs text-slate-500 bg-tavern-950">
      <div class="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>Tavern Finder &copy; 2026 — D&D 5e & World of Myria Metaphysics Engine</p>
        <p class="text-slate-400">Deterministic Seeded PRNG • Obsidian & Notion Ready</p>
      </div>
    </footer>

    <!-- Toast Notification -->
    <Toast :show="toast.show" :message="toast.message" :type="toast.type" />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
