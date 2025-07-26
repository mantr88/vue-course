<script setup>
import IButton from '../components/IButton/IButton.vue'
</script>
<template>
  <div class="flex h-screen">
    <section
      class="flex-1 flex flex-col items-center justify-center h-screen bg-primary text-white"
    >
      <img src="../assets/img/map-pin.svg" alt="Map pin" class="inline mb-6" />
      <h1 class="font-bold text-4xl mb-7">IT traveler</h1>
      <p class="text-[18px] text-center w-[508px] mb-11 leading-6">
        Простий і зручний веб додаток, який дозволить тобі відмічати твої улюблені місця, а також
        ті, в яких би ти дуже хотів побувати. Тож не зволікай і спробуй сам.
      </p>
      <IButton>Почати роботу</IButton>
    </section>
    <section class="flex-1">
      <img
        src="../assets/img/static-map.png"
        alt="Static Map"
        class="h-full w-full object-cover bg-white"
      />
    </section>
  </div>
</template>
