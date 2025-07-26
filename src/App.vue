<script setup>
import RegisterForm from './components/RegisterForm/RegisterForm.vue'
// import FavoritePlacesView from './vews/FavoritePlacesView.vue'
// import HomePageView from './vews/HomePageView.vue'
</script>

<template>
  <main class="h-screen bg-amber-500">
    <!-- <HomePageView /> -->
    <!-- <FavoritePlacesView /> -->
    <RegisterForm @submit="console.log" />
  </main>
</template>
