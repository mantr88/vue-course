import { ref } from 'vue'

export function useMutation({ mutationFn, onSuccess, onError }) {
  const data = ref(null)
  const isLoading = ref(false)
  const error = ref(null)

  const mutation = async (...args) => {
    isLoading.value = true
    error.value = null

    try {
      const result = await mutationFn(...args)
      onSuccess?.(result)
      data.value = result
      return result
    } catch (err) {
      error.value = err
      onError?.(err)
      throw err
    } finally {
      isLoading.value = false
    }
  }

  return { isLoading, error, data, mutation }
}
