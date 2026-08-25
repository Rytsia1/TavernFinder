<script setup>
import { Sparkles, Dices, Shield, Flame } from 'lucide-vue-next';

const props = defineProps({
  modelValue: {
    type: String,
    default: 'standard'
  }
});

const emit = defineEmits(['update:modelValue']);

function selectMode(mode) {
  if (props.modelValue !== mode) {
    emit('update:modelValue', mode);
  }
}
</script>

<template>
  <div class="inline-flex p-1 rounded-xl bg-tavern-900 border border-tavern-border shadow-inner">
    <button
      type="button"
      @click="selectMode('standard')"
      class="relative flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-medium tracking-wide transition-all duration-300 select-none"
      :class="modelValue === 'standard' 
        ? 'bg-tavern-750 text-amber-300 shadow-md border border-amber-500/30' 
        : 'text-slate-400 hover:text-slate-200 hover:bg-tavern-850/60 border border-transparent'"
    >
      <Dices class="w-4 h-4" :class="modelValue === 'standard' ? 'text-amber-400' : 'text-slate-500'" />
      <span>Standard D&D</span>
      <span v-if="modelValue === 'standard'" class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
    </button>

    <button
      type="button"
      @click="selectMode('myria')"
      class="relative flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-medium tracking-wide transition-all duration-300 select-none"
      :class="modelValue === 'myria' 
        ? 'bg-purple-950/60 text-purple-200 shadow-md border border-purple-500/40 shadow-purple-900/20' 
        : 'text-slate-400 hover:text-slate-200 hover:bg-tavern-850/60 border border-transparent'"
    >
      <Sparkles class="w-4 h-4" :class="modelValue === 'myria' ? 'text-purple-400' : 'text-slate-500'" />
      <span>World of Myria</span>
      <span v-if="modelValue === 'myria'" class="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
    </button>
  </div>
</template>
