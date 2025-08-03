<script setup>
import FavoritePlacesList from '@/components/FavoritePlaces/FavoritePlacesList.vue'
import IButton from '@/components/IButton/IButton.vue'
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import { mapSettings } from '@/map/settings'
import MarkerIcon from '@/components/icons/MarkerIcon.vue'
import { ref, onMounted } from 'vue'
import { getFavoritePlaces } from '@/api/favorite-places'

const favoritePlaces = ref([])

const activeId = ref(null)
const map = ref(null)

const changeActiveId = (id) => {
  activeId.value = id
}

const changePlace = (id) => {
  const place = favoritePlaces.value.find((place) => place.id === id)

  if (place) {
    const lngLat = place.lngLat
    changeActiveId(id)

    if (map.value) {
      map.value.flyTo({
        center: lngLat,
        zoom: 12,
        essential: true, // this ensures the animation is not interrupted
      })
    }
  }
}

onMounted(async () => {
  const { data } = await getFavoritePlaces()
  favoritePlaces.value = data
})
</script>

<template>
  <section class="flex h-screen">
    <div class="flex-1 px-6 bg-white">
      <FavoritePlacesList
        :items="favoritePlaces"
        :activeId="activeId"
        @place-clicked="changePlace"
      />
      <IButton class="w-full mt-10" variant="gradient">Додати маркер</IButton>
    </div>
    <div class="flex-5">
      <MapboxMap
        class="w-full h-full"
        :center="[30.523333, 50.450001]"
        :zoom="10"
        :access-token="mapSettings.apiToken"
        :map-style="mapSettings.styles"
        @mb-created="(mapInstance) => (map = mapInstance)"
      >
        <MapboxMarker v-for="place in favoritePlaces" :key="place.id" :lngLat="place.lngLat">
          <button @click="changeActiveId(place.id)">
            <MarkerIcon class="size-10" />
          </button>
        </MapboxMarker>
      </MapboxMap>
    </div>
  </section>
</template>
