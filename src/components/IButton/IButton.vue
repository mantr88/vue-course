<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  variant: {
    default: 'primary',
    type: String,
    validator: (value) => {
      return ['primary', 'secondary', 'gradient'].includes(value)
    },
  },
  to: String,
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

const isLink = computed(() => {
  return !!props.to
})

const componentName = computed(() => {
  return isLink.value ? RouterLink : 'button'
})

const link = computed(() => {
  return isLink.value ? props.to : undefined
})
</script>

<template>
  <component
    :is="componentName"
    class="rounded-xl px-10 py-[17px] font-bold -tracking-wider text-white cursor-pointer"
    :class="buttonClass"
    :to="link"
  >
    <slot></slot>
  </component>
</template>
