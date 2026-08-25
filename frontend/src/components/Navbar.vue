<script setup>
import { BookOpen, Sparkles, Dices, Hash } from 'lucide-vue-next';
import ModeToggle from './ModeToggle.vue';

const props = defineProps({
  activeTab: {
    type: String,
    default: 'tavern' // 'tavern' | 'codex'
  },
  mode: {
    type: String,
    default: 'standard' // 'standard' | 'myria'
  },
  seed: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:activeTab', 'update:mode']);
</script>

<template>
  <header class="border-b border-tavern-border/60 bg-tavern-900/85 backdrop-blur-md sticky top-0 z-30 shadow-xl">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
      <!-- Logo & Main Tab Switcher -->
      <div class="flex items-center gap-6 w-full md:w-auto justify-between md:justify-start">
        <!-- Logo -->
        <div class="flex items-center gap-3 cursor-pointer" @click="emit('update:activeTab', 'tavern')">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-700/10 border border-amber-500/40 flex items-center justify-center shadow-lg shadow-amber-500/10 animate-torch">
            <span class="text-xl">🍺</span>
          </div>
          <div>
            <h1 class="text-lg sm:text-xl font-bold font-cinzel text-amber-100 tracking-wider">
              Tavern Finder
            </h1>
            <p class="text-[11px] text-slate-400 font-sans tracking-wide">
              Atmospheric NPC Generator
            </p>
          </div>
        </div>

        <!-- Tab Switcher: Tavern vs Codex -->
        <div class="flex items-center p-1 rounded-xl bg-tavern-950/80 border border-tavern-border shadow-inner">
          <button
            type="button"
            @click="emit('update:activeTab', 'tavern')"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium tracking-wide transition-all duration-200"
            :class="activeTab === 'tavern' 
              ? 'bg-amber-600/20 text-amber-300 border border-amber-500/40 shadow-sm' 
              : 'text-slate-400 hover:text-slate-200 border border-transparent'"
          >
            <span>🍺</span>
            <span>The Tavern</span>
          </button>

          <button
            type="button"
            @click="emit('update:activeTab', 'codex')"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium tracking-wide transition-all duration-200"
            :class="activeTab === 'codex' 
              ? 'bg-purple-950/70 text-purple-200 border border-purple-500/40 shadow-sm' 
              : 'text-slate-400 hover:text-slate-200 border border-transparent'"
          >
            <BookOpen class="w-3.5 h-3.5 text-purple-400" />
            <span>Myria Codex</span>
          </button>
        </div>
      </div>

      <!-- Right Side Controls: Mode Toggle (shown when on Tavern tab) & Seed badge -->
      <div class="flex items-center gap-3">
        <div v-if="activeTab === 'tavern'" class="flex items-center gap-3">
          <ModeToggle 
            :model-value="mode" 
            @update:model-value="emit('update:mode', $event)" 
          />
        </div>
      </div>
    </div>
  </header>
</template>
