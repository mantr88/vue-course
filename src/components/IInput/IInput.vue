<script setup>
const props = defineProps({
  modelValue: String,
  label: String,
  name: String,
  placeholder: String,
  type: {
    type: String,
    default: 'text',
  },
})

defineOptions({
  inheritAttrs: false,
})

const emit = defineEmits(['update:modelValue'])
</script>
<template>
  <div class="w-full text-grey">
    <label class="block">
      <span class="block text-xs px-3 mb-2">{{ props.label }}</span>
      <input
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
        class="focus:border-primary border-[1px] border-grey rounded-[4px] py-2 px-3 text-sm w-full"
        v-bind="{ ...$props, ...$attrs }"
      />
    </label>
  </div>
</template>
