<script setup>
import RegisterForm from '@/components/RegisterForm/RegisterForm.vue'
import { register } from '@/api/user/index.js'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const isLoading = ref(false)

const handleSubmit = async (formData) => {
  console.log('Form submitted with data:', formData)
  isLoading.value = true
  try {
    const response = await register(formData)
    console.log('Registration successful:', response)
    router.replace('/map')
  } catch (error) {
    isLoading.value = false
    console.error('Registration failed:', error)
  } finally {
    isLoading.value = false
  }
}
</script>
<template>
  <RegisterForm @submit="handleSubmit" :is-loading="isLoading" />
</template>
