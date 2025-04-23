<script setup>
import WorldMap from '../components/WorldMap.vue'

function onCountrySelected (name) {
  alert(`Country selected: ${name}`)
}
</script>

<template>
  <div class="content">
    <WorldMap class="map-element" @country-selected="onCountrySelected"></WorldMap>
  </div>
</template>

<style lang="scss" scoped>
.content {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>