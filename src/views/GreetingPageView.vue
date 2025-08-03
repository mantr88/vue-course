<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue'
import IButton from '../components/IButton/IButton.vue'
</script>
<template>
  <BaseLayout>
    <div class="text-center">
      <img src="../assets/img/map-pin.svg" alt="Map pin" class="inline mb-6" />
      <h1 class="font-bold text-4xl mb-7">IT traveler</h1>
      <p class="text-center mb-11 leading-6">
        Простий і зручний веб додаток, який дозволить тобі відмічати твої улюблені місця, а також
        ті, в яких би ти дуже хотів побувати. Тож не зволікай і спробуй сам.
      </p>
      <IButton to="/auth/login">Почати роботу</IButton>
    </div></BaseLayout
  >
</template>
