<script setup>
import { reactive, toRaw } from 'vue'
import IButton from '../IButton/IButton.vue'
import IInput from '../IInput/IInput.vue'

const emit = defineEmits(['submit'])

const userData = reactive({
  email: '',
  password: '',
})
</script>
<template>
  <form
    @submit.prevent="emit('submit', toRaw(userData))"
    class="flex flex-col items-center justify-center max-w-[500px]"
  >
    <IInput
      name="email"
      label="Електронна пошта"
      placeholder="email@gmail.com"
      class="mb-4"
      v-model="userData.email"
    />
    <IInput
      type="password"
      name="password"
      label="Пароль"
      placeholder="Enter your password"
      v-model="userData.password"
    />
    <IButton class="w-full mt-6" variant="gradient" type="submit">Увійти</IButton>
  </form>
</template>
