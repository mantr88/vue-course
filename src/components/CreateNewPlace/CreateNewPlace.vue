<script setup>
import IButton from '../IButton/IButton.vue'
import IInput from '../IInput/IInput.vue'
import IModal from '../IModal/IModal.vue'
import InputImage from '../InputImage/InputImage.vue'
import { reactive, computed } from 'vue'
import MarkerIcon from '../icons/MarkerIcon.vue'

const props = defineProps({
  isOpen: {
    default: false,
    type: Boolean,
  },
})

const emit = defineEmits(['close', 'submit'])

const formData = reactive({
  title: '',
  description: '',
  img: '',
})

const handleUploadImage = (image) => {
  formData.img = image
}

const uploadText = computed(() => {
  return formData.img ? 'Натисніть тут, щоб змінити фото' : 'Натисніть тут, щоб додати фото'
})
</script>
<template>
  <IModal v-if="props.isOpen" @close="emit('close')">
    <h3 class="flex justify-center gap-2 font-bold mb-10"><MarkerIcon /> Додати маркер</h3>
    <form @submit.prevent="emit('submit', formData)" class="min-w-[420px]">
      <IInput label="Локація" placeholder="Золоті Ворота" class="mb-4" v-model="formData.title" />
      <IInput
        type="textarea"
        label="Опис"
        placeholder="Введіть текст"
        class="mb-2"
        v-model="formData.description"
      />
      <div class="flex items-center mb-10 gap-2">
        <img
          v-if="formData.img"
          :src="formData.img"
          alt="Uploaded image"
          class="size-10 object-cover"
        />
        <InputImage class="" @uploaded="handleUploadImage">{{ uploadText }}</InputImage>
      </div>
      <IButton variant="gradient" class="w-full" type="submit">Додати</IButton>
    </form>
  </IModal>
</template>
