<script setup>
import LoginForm from '@/components/LoginForm/LoginForm.vue'
import { login } from '@/api/user/index.js'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const isLoading = ref(false)

const handleSubmit = async (formData) => {
  console.log('Form submitted with data:', formData)
  isLoading.value = true
  try {
    const response = await login(formData)
    console.log('Login successful:', response)
    router.replace('/map')
  } catch (error) {
    isLoading.value = false
    console.error('Login failed:', error)
  } finally {
    isLoading.value = false
  }
}
</script>
<template><LoginForm @submit="handleSubmit" :is-loading="isLoading" /></template>
