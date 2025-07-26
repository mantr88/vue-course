<script setup>
import IconButton from './IconButton.vue'
import DeleteIcon from './DeleteIcon.vue'
import EditIcon from './EditIcon.vue'
</script>

<template>
  <div class="flex pb-[18px] pt-6 border-b border-gray">
    <img
      src="../../assets/img/golden-gate.png"
      alt="Favorite Place"
      class="size-20 mr-4.5 rounded-bl-sm"
    />
    <div class="flex-1 relative flex flex-col gap-2">
      <div class="font-medium text-[14px] leading-5">Золоті Ворота</div>
      <p class="text-[12px] leading-[14px] text-gray">
        Одна з найдавніших споруд і один з символів міста. Довгий час вони слугували для парадного,
        церемоніального в'їзду в столицю князів, королів та гетьманів.
      </p>
      <div class="absolute top-0 right-0 flex gap-2">
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  </div>
</template>
