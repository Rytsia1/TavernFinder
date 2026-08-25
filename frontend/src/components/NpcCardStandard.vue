<script setup>
import { 
  Quote, 
  Sparkles, 
  Compass, 
  Heart, 
  AlertTriangle, 
  Key, 
  ShieldAlert, 
  EyeOff, 
  User, 
  Hash,
  Scroll
} from 'lucide-vue-next';

defineProps({
  npc: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="w-full max-w-4xl mx-auto rounded-2xl fantasy-card overflow-hidden transition-all duration-300">
    <!-- Card Header Banner -->
    <div class="relative px-6 py-6 sm:px-8 sm:py-7 border-b border-tavern-border/80 bg-gradient-to-r from-tavern-900 via-tavern-850 to-tavern-900">
      <!-- Atmospheric background glow -->
      <div class="absolute inset-0 bg-parchment-glow pointer-events-none opacity-40"></div>

      <div class="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div class="flex items-center gap-2.5 mb-1.5 flex-wrap">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30">
              <Scroll class="w-3 h-3" />
              Standard D&D
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
            {{ npc.title }}
          </p>
        </div>

        <div class="sm:text-right shrink-0">
          <div class="text-xs uppercase tracking-widest text-slate-400 mb-0.5 font-semibold">Dominant Persona</div>
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-tavern-800 text-amber-300 font-medium text-sm border border-amber-500/20 shadow-sm">
            <Sparkles class="w-3.5 h-3.5 text-amber-400" />
            {{ npc.personality }}
          </div>
        </div>
      </div>
    </div>

    <!-- Flavor Dialogue Banner -->
    <div class="px-6 py-5 sm:px-8 bg-tavern-950/70 border-b border-tavern-border/50 relative">
      <Quote class="w-8 h-8 text-amber-500/20 absolute left-4 top-4 pointer-events-none" />
      <p class="text-base sm:text-lg italic text-amber-100/90 leading-relaxed pl-6 relative font-serif">
        "{{ npc.dialogue }}"
      </p>
    </div>

    <!-- Main Content Grid -->
    <div class="p-6 sm:p-8 space-y-6">
      <!-- Origin -->
      <div class="p-4 rounded-xl bg-tavern-900/90 border border-tavern-border/70 hover:border-tavern-border transition-colors">
        <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400/90 mb-1.5">
          <User class="w-3.5 h-3.5" />
          Formative Origin
        </div>
        <p class="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
          {{ npc.origin }}
        </p>
      </div>

      <!-- D&D 5e Roleplay Pillars Grid (Ideal, Bond, Flaw) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Ideal -->
        <div class="p-4 rounded-xl bg-tavern-900/60 border border-tavern-border/60 hover:border-amber-500/30 transition-colors flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
              <Compass class="w-3.5 h-3.5" />
              Core Ideal
            </div>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {{ npc.ideal }}
            </p>
          </div>
        </div>

        <!-- Bond -->
        <div class="p-4 rounded-xl bg-tavern-900/60 border border-tavern-border/60 hover:border-amber-500/30 transition-colors flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
              <Heart class="w-3.5 h-3.5" />
              Deep Bond
            </div>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {{ npc.bond }}
            </p>
          </div>
        </div>

        <!-- Flaw -->
        <div class="p-4 rounded-xl bg-tavern-900/60 border border-tavern-border/60 hover:border-amber-500/30 transition-colors flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-400 mb-2">
              <AlertTriangle class="w-3.5 h-3.5" />
              Fatal Flaw
            </div>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {{ npc.flaw }}
            </p>
          </div>
        </div>
      </div>

      <!-- Narrative Hooks: Fear, Secret & Trinket -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 border-t border-tavern-border/40">
        <!-- Fear -->
        <div class="p-4 rounded-xl bg-tavern-850/50 border border-tavern-border/50">
          <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-500/90 mb-1.5">
            <ShieldAlert class="w-3.5 h-3.5 text-amber-400" />
            Internal Fear
          </div>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {{ npc.fear }}
          </p>
        </div>

        <!-- Secret -->
        <div class="p-4 rounded-xl bg-tavern-850/50 border border-tavern-border/50">
          <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400/90 mb-1.5">
            <EyeOff class="w-3.5 h-3.5 text-purple-400" />
            Dark Secret
          </div>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {{ npc.secret }}
          </p>
        </div>

        <!-- Pocket Trinket -->
        <div class="p-4 rounded-xl bg-tavern-850/50 border border-tavern-border/50">
          <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300/90 mb-1.5">
            <Key class="w-3.5 h-3.5 text-amber-300" />
            Pocket Trinket
          </div>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {{ npc.trinket }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
