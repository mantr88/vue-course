<script setup>
import FavoritePlacesList from '@/components/FavoritePlaces/FavoritePlacesList.vue'
import IButton from '@/components/IButton/IButton.vue'
</script>

<template>
  <section class="flex h-screen">
    <div class="flex-1 px-6">
      <FavoritePlacesList />
      <IButton class="w-full mt-10 bg-linear-65 from-[#FFA279] to-[#F3743D]">Додати маркер</IButton>
    </div>
    <div class="flex-3">
      <img
        src="../assets/img/favorite-places.png"
        alt="Favorite Places"
        class="h-full w-full object-cover bg-white"
      />
    </div>
  </section>
</template>
