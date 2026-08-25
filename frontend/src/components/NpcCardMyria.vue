<script setup>
import { computed } from 'vue';
import { 
  Quote, 
  Sparkles, 
  Flame, 
  Wind, 
  Zap, 
  Mountain, 
  Sun, 
  Droplets, 
  Leaf,
  Shield, 
  EyeOff, 
  Key, 
  Hash,
  Sword,
  Wand2,
  Skull,
  Feather
} from 'lucide-vue-next';

const props = defineProps({
  npc: {
    type: Object,
    required: true
  }
});

// Dynamic Aura Styles based on Element
const auraClass = computed(() => {
  const elem = props.npc.power_profile?.element?.toLowerCase() || '';
  if (elem.includes('fire')) return 'aura-fire';
  if (elem.includes('wind')) return 'aura-wind';
  if (elem.includes('plant')) return 'aura-plant';
  if (elem.includes('thunder')) return 'aura-thunder';
  if (elem.includes('earth')) return 'aura-earth';
  if (elem.includes('light')) return 'aura-light';
  if (elem.includes('water')) return 'aura-water';
  return 'aura-fire';
});

// Element Icon Component
const elementIcon = computed(() => {
  const elem = props.npc.power_profile?.element?.toLowerCase() || '';
  if (elem.includes('fire')) return Flame;
  if (elem.includes('wind')) return Wind;
  if (elem.includes('plant')) return Leaf;
  if (elem.includes('thunder')) return Zap;
  if (elem.includes('earth')) return Mountain;
  if (elem.includes('light')) return Sun;
  if (elem.includes('water')) return Droplets;
  return Sparkles;
});

// Power Branch Icon
const powerBranchIcon = computed(() => {
  const branch = props.npc.power_profile?.branch?.toLowerCase() || '';
  if (branch.includes('aura')) return Shield;
  if (branch.includes('tier')) return Wand2;
  if (branch.includes('wild')) return Feather;
  if (branch.includes('awakener')) return Sword;
  if (branch.includes('abyssal')) return Skull;
  return Sparkles;
});
</script>

<template>
  <div class="w-full max-w-4xl mx-auto rounded-2xl fantasy-card overflow-hidden transition-all duration-300">
    <!-- Card Header Banner -->
    <div class="relative px-6 py-6 sm:px-8 sm:py-7 border-b border-tavern-border/80 bg-gradient-to-r from-tavern-900 via-tavern-850 to-tavern-900">
      <!-- Glow background -->
      <div class="absolute inset-0 bg-parchment-glow pointer-events-none opacity-40"></div>

      <div class="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div class="flex items-center gap-2 mb-2 flex-wrap">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/15 text-purple-300 border border-purple-500/40">
              <Sparkles class="w-3 h-3 text-purple-400" />
              World of Myria
            </span>
            <span 
              class="px-2.5 py-0.5 rounded-full text-xs font-medium border"
              :class="npc.gender === 'Female' ? 'bg-rose-500/10 text-rose-300 border-rose-500/30' : 'bg-sky-500/10 text-sky-300 border-sky-500/30'"
            >
              {{ npc.gender }}
            </span>
            <span class="inline-flex items-center gap-1 text-xs text-slate-400 font-mono bg-tavern-800/80 px-2 py-0.5 rounded border border-tavern-border">
              <Hash class="w-3 h-3 text-slate-500" />
              {{ npc.seed }}
            </span>
          </div>

          <h2 class="text-2xl sm:text-3xl font-bold font-cinzel text-slate-100 tracking-wide text-amber-100/95">
            {{ npc.name }}
          </h2>
          <p class="text-sm sm:text-base font-medium text-amber-400/90 tracking-wide mt-0.5">
            {{ npc.occupation }}
          </p>
        </div>

        <!-- Racial Affinity & Attribute Boost Pill -->
        <div class="sm:text-right shrink-0 flex flex-col sm:items-end gap-1.5">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs sm:text-sm font-semibold tracking-wide" :class="auraClass">
            <component :is="elementIcon" class="w-4 h-4 shrink-0" />
            <span>{{ npc.race }}</span>
            <span class="opacity-60">•</span>
            <span>{{ npc.power_profile?.element }} ({{ npc.power_profile?.aura_color }})</span>
          </div>
          <span class="text-xs font-mono text-amber-300/80 bg-tavern-800/90 px-2 py-0.5 rounded border border-amber-500/20">
            {{ npc.power_profile?.racial_boost }}
          </span>
        </div>
      </div>
    </div>

    <!-- Power Profile Hero Section -->
    <div class="px-6 py-4 sm:px-8 bg-tavern-900/90 border-b border-tavern-border/60">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
        <div class="flex items-center gap-2">
          <component :is="powerBranchIcon" class="w-4 h-4 text-amber-400" />
          <span class="text-xs uppercase tracking-widest text-slate-400 font-semibold">Power Branch</span>
          <span class="text-sm font-bold text-amber-200">{{ npc.power_profile?.branch }}</span>
        </div>
        <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-tavern-800 text-amber-300 text-xs font-mono font-medium border border-tavern-border">
          {{ npc.power_profile?.rank }}
        </div>
      </div>
      <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans italic bg-tavern-950/40 p-3 rounded-lg border border-tavern-border/40">
        {{ npc.power_profile?.description }}
      </p>
    </div>

    <!-- Flavor Dialogue Banner -->
    <div class="px-6 py-4 sm:px-8 bg-tavern-950/70 border-b border-tavern-border/50 relative">
      <Quote class="w-8 h-8 text-amber-500/15 absolute left-4 top-3 pointer-events-none" />
      <p class="text-sm sm:text-base italic text-amber-100/90 leading-relaxed pl-6 relative font-serif">
        "{{ npc.dialogue }}"
      </p>
    </div>

    <!-- Main Details Grid -->
    <div class="p-6 sm:p-8 space-y-5">
      <!-- Persona & Quirk -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Quirk -->
        <div class="p-4 rounded-xl bg-tavern-900/70 border border-tavern-border/70 hover:border-amber-500/30 transition-colors">
          <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1.5">
            <Sparkles class="w-3.5 h-3.5" />
            Physical / Sensory Quirk
          </div>
          <p class="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
            {{ npc.quirk }}
          </p>
        </div>

        <!-- Pocket Trinket -->
        <div class="p-4 rounded-xl bg-tavern-900/70 border border-tavern-border/70 hover:border-amber-500/30 transition-colors">
          <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1.5">
            <Key class="w-3.5 h-3.5" />
            Pocket Trinket
          </div>
          <p class="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
            {{ npc.trinket }}
          </p>
        </div>
      </div>

      <!-- Lore Secret -->
      <div class="p-4 rounded-xl bg-tavern-850/60 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
        <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1.5">
          <EyeOff class="w-3.5 h-3.5 text-purple-400" />
          Metaphysical / Lore Secret
        </div>
        <p class="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
          {{ npc.secret }}
        </p>
      </div>
    </div>
  </div>
</template>
