<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    default: 'primary',
    type: String,
    validator: (value) => {
      return ['primary', 'secondary', 'gradient'].includes(value)
    },
  },
})

const buttonClass = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-[#FFA279]'
    case 'gradient':
      return 'bg-gradient-to-r from-[#FFA279] to-[#F3743D]'
    default:
      return 'bg-primary'
  }
})
</script>

<template>
  <button
    class="rounded-xl px-10 py-[17px] font-bold -tracking-wider text-white"
    :class="buttonClass"
  >
    <slot></slot>
  </button>
</template>
