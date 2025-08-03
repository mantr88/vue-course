<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue'
// import { RouterView, RouterLink } from 'vue-router'
</script>
<template>
  <BaseLayout>
    <section class="p-10 rounded-2xl bg-white w-full">
      <div class="flex justify-center gap-11 mb-10">
        <RouterLink
          to="register"
          class="text-gray hover:text-primary"
          exact-active-class="text-primary"
          >Створити аккаунт</RouterLink
        >
        <RouterLink
          to="login"
          class="text-gray hover:text-primary"
          exact-active-class="text-primary"
          >Увійти</RouterLink
        >
      </div>
      <RouterView></RouterView>
    </section>
  </BaseLayout>
</template>
