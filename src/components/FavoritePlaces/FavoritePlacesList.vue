<script setup>
import FavoritePlaceItem from './FavoritePlaceItem.vue'

const props = defineProps({
  items: {
    required: true,
    type: Array,
  },
  activeId: {
    type: [Number, null],
    default: null,
    required: true,
  },
})

const emit = defineEmits(['place-clicked'])
</script>
<template>
  <div class="flex flex-col text-black">
    <div class="text-[14px] leading-5 text-gray">Додані маркери</div>
    <div v-if="props.items.length === 0">Список улюблених місць порожній</div>

    <FavoritePlaceItem
      v-for="place in props.items"
      :key="place.id"
      :title="place.title"
      :description="place.description"
      :img="place.img"
      :isActive="place.id === props.activeId"
      @click="emit('place-clicked', place.id)"
    />
  </div>
</template>
