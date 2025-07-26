<script setup>
import { reactive, toRaw } from 'vue'
import IButton from '../IButton/IButton.vue'
import IInput from '../IInput/IInput.vue'

const emit = defineEmits(['submit'])

const userData = reactive({
  name: '',
  email: '',
  password: '',
})
</script>
<template>
  <form
    @submit.prevent="emit('submit', toRaw(userData))"
    class="flex flex-col items-center justify-center w-[500px] p-10 rounded-2xl bg-white"
  >
    <IInput
      name="name"
      label="Повне ім’я"
      placeholder="Антон Антонов"
      class="mb-4"
      v-model="userData.name"
    />
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
    <IButton class="w-full mt-6" variant="gradient" type="submit">Створити аккаунт</IButton>
  </form>
</template>
