<script setup>
import RegisterForm from '@/components/RegisterForm/RegisterForm.vue'
import { authService } from '@/api/authService'
import { useRouter } from 'vue-router'
import { useMutation } from '@/components/useMutation'

const router = useRouter()

const {
  isLoading,
  error,
  mutation: registerMutation,
} = useMutation({
  mutationFn: (data) => authService.register(data),
  onSuccess: () => router.replace('/map'),
})
</script>
<template>
  <RegisterForm @submit="registerMutation" :is-loading="isLoading" />
  <div v-if="error" class="text-red-500 mt-4">
    {{ error.message }}
  </div>
</template>
