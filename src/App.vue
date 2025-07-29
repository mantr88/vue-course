<script setup>
import RegisterForm from './components/RegisterForm/RegisterForm.vue'
import LoginForm from './components/LoginForm/LoginForm.vue'
import IModal from './components/IModal/IModal.vue'
import { ref } from 'vue'
// import FavoritePlacesView from './vews/FavoritePlacesView.vue'
// import HomePageView from './vews/HomePageView.vue'

const isOpen = ref(true)

const closeModal = () => {
  isOpen.value = false
}
const openModal = () => {
  isOpen.value = true
}
</script>

<template>
  <main class="h-screen bg-amber-500">
    <!-- <HomePageView /> -->
    <!-- <FavoritePlacesView /> -->
    <button @click="openModal">Click me!!!</button>
    <RegisterForm @submit="console.log" />
    <LoginForm @submit="console.log" />
  </main>
  <IModal v-if="isOpen" @close="closeModal">
    <LoginForm @submit="console.log" />
  </IModal>
</template>
