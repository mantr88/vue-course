<script setup>
import FavoritePlaceItem from './FavoritePlaceItem.vue'
</script>
<template>
  <div class="flex flex-col">
    <div class="text-[14px] leading-5 text-gray">Додані маркери</div>
    <FavoritePlaceItem v-for="place in 5" :key="place" />
  </div>
</template>
