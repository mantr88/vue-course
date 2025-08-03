<script setup>
import FavoritePlacesList from '@/components/FavoritePlaces/FavoritePlacesList.vue'
import IButton from '@/components/IButton/IButton.vue'
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import { mapSettings } from '@/map/settings'
import MarkerIcon from '@/components/icons/MarkerIcon.vue'
import { ref } from 'vue'

const favoritePlacesMock = [
  {
    id: 1,
    title: 'Place 1',
    description: 'Description 1',
    img: '',
    lngLat: [30.523333, 50.410001],
  },
  {
    id: 2,
    title: 'Place 2',
    description: 'Description 2',
    img: '',
    lngLat: [30.523333, 50.480001],
  },
]

const activeId = ref(null)
const map = ref(null)

const changeActiveId = (id) => {
  activeId.value = id
}

const changePlace = (id) => {
  const place = favoritePlacesMock.find((place) => place.id === id)

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
</script>

<template>
  <section class="flex h-screen">
    <div class="flex-1 px-6 bg-white">
      <FavoritePlacesList
        :items="favoritePlacesMock"
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
        <MapboxMarker v-for="place in favoritePlacesMock" :key="place.id" :lngLat="place.lngLat">
          <button @click="changeActiveId(place.id)">
            <MarkerIcon class="size-10" />
          </button>
        </MapboxMarker>
      </MapboxMap>
    </div>
  </section>
</template>
