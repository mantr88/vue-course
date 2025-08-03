<script setup>
import IconButton from './IconButton.vue'
import DeleteIcon from './DeleteIcon.vue'
import EditIcon from './EditIcon.vue'

const props = defineProps({
  title: String,
  description: String,
  img: String,
  isActive: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    class="flex pb-[18px] pt-6 border-b"
    :class="{ 'border-gray': !props.isActive, 'border-primary': props.isActive }"
  >
    <img :src="props.img" alt="Favorite Place" class="size-20 mr-4.5 rounded-bl-sm" />
    <div class="flex-1 relative flex flex-col gap-2">
      <div class="font-medium text-[14px] leading-5">{{ props.title }}</div>
      <p class="text-[12px] leading-[14px] text-gray">
        {{ props.description }}
      </p>
      <div class="absolute top-0 right-0 flex gap-2">
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  </div>
</template>
