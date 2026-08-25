<script setup>
import { CheckCircle2, AlertCircle } from 'lucide-vue-next';

defineProps({
  show: {
    type: Boolean,
    default: false
  },
  message: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'success' // 'success' | 'error'
  }
});
</script>

<template>
  <Transition
    enter-active-class="transform ease-out duration-300 transition"
    enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
    enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="show"
      class="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-lg shadow-2xl border backdrop-blur-md"
      :class="type === 'success' ? 'bg-tavern-900/95 border-amber-500/40 text-amber-200' : 'bg-red-950/95 border-red-500/40 text-red-200'"
    >
      <CheckCircle2 v-if="type === 'success'" class="w-5 h-5 text-amber-400 shrink-0" />
      <AlertCircle v-else class="w-5 h-5 text-red-400 shrink-0" />
      <span class="text-sm font-medium tracking-wide">{{ message }}</span>
    </div>
  </Transition>
</template>
