<script setup>
import LoginForm from '@/components/LoginForm/LoginForm.vue'
import { useRouter } from 'vue-router'
import { useMutation } from '@/composables/useMutation'
import { authService } from '@/api/authService'

const router = useRouter()

const {
  isLoading,
  error,
  mutation: loginMutation,
} = useMutation({
  mutationFn: (data) => authService.login(data),
  onSuccess: () => router.replace('/map'),
})
</script>
<template>
  <LoginForm @submit="loginMutation" :is-loading="isLoading" />
  <div v-if="error" class="text-red-500 mt-4">
    {{ error.message }}
  </div>
</template>
