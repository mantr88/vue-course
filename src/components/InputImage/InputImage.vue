<script setup>
import UploadIcon from '../icons/UploadIcon.vue'
import { ref } from 'vue'

const errorMessage = ref('')

const emit = defineEmits(['uploaded'])

const handleUploadImage = (event) => {
  const file = event.target.files[0]
  const fileReader = new FileReader()
  if (file.size > 3 * 1024 * 1024) {
    errorMessage.value = 'Зображення не повинно перевищувати 3 МБ'
    return
  }
  fileReader.readAsDataURL(file)

  fileReader.onload = () => {
    errorMessage.value = ''
    emit('uploaded', fileReader.result)
  }
}
</script>

<template>
  <div>
    <label class="cursor-pointer hover:text-primary">
      <input type="file" accept="image/*" class="hidden" @change="handleUploadImage" />
      <span class="flex gap-1 items-center">
        <UploadIcon />
        <span class="underline text-xs">
          <slot></slot>
        </span>
      </span>
    </label>
    <div class="text-red-500">{{ errorMessage }}</div>
  </div>
</template>
