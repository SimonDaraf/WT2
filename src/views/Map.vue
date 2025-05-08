<script setup>
import WorldMap from '../components/WorldMap.vue'
import { getYearRange, getByYear, getSummaryOfField, getTopByField } from '../services/backendService.js';
import { onMounted, ref, toRaw } from 'vue';
import { Fields } from '../utils/fields.enum.js' 

function onCountrySelected (name) {
  alert(`Country selected: ${name}`)
}

const highest_year = ref(null)
const lowest_year = ref(null)
const current_selected_year = ref(null)
const fields = Fields.toArray()
const selected = ref(null)
const worldMap = ref(null)

if (!localStorage.getItem('selected')) {
  selected.value = Fields.POPULATION.value
  localStorage.setItem('selected', Fields.POPULATION.value)
} else {
  selected.value = localStorage.getItem('selected')
}

const reloadData = async () => {
  try {
    localStorage.setItem('selected_year', current_selected_year.value)
    localStorage.setItem('selected', selected.value)

    const res = await getByYear(current_selected_year.value, selected.value)
    const sum = await getSummaryOfField(current_selected_year.value, selected.value)
    const top = await getTopByField(current_selected_year.value, selected.value)

    worldMap.value.updateCountryVisuals(res, sum, Fields.fromValue(selected.value), top)
  } catch (e) {
    console.error(`Couldn't fetch data`)
  }
}

const fetchData = async () => {
  try {
    highest_year.value = null
    lowest_year.value = null
    let currentSelectedYear

    const res = await getYearRange()

    highest_year.value = res.highest_year
    lowest_year.value = res.lowest_year

    // Check if we have a current selected year.
    currentSelectedYear = localStorage.getItem('selected_year')

    // Parse value
    if (!currentSelectedYear || !Number.isInteger(Number.parseInt(currentSelectedYear))) {
      current_selected_year.value = highest_year.value
    } else {
      current_selected_year.value = Number.parseInt(currentSelectedYear)
    }
    localStorage.setItem('selected_year', current_selected_year.value)

    reloadData()
  } catch (e) {
    console.error('Failed fetching stats...', e)
  }
}

onMounted(async () => {
  await fetchData()
})
</script>

<template>
  <div class="content">
    <div class="selection">
      <input v-if="lowest_year !== null && highest_year !== null && current_selected_year !== null" 
              type="range" class="slider" v-model="current_selected_year" :min="lowest_year" :max="highest_year">
      <div>
        {{ current_selected_year }}
      </div>
      <select class="slider" v-model="selected">
        <option v-for="field in fields" :key="field.value" :value="field.value">
          {{ field.title }}
        </option>
      </select>
      <button id="reload-button" @click="reloadData">Reload</button>
    </div>
    <WorldMap ref="worldMap" class="map-element" @country-selected="onCountrySelected"></WorldMap>
  </div>
</template>

<style lang="scss" scoped>
.content {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-areas: 
    "selector"
    "map";
  
  grid-template-rows: .4fr auto;

  .selection {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    grid-area: selector;
    background: rgba(0, 0, 0, .2);

    .slider {
      -webkit-appearance: none;
      background: var(--dark-alt);
      outline: none;
      opacity: 0.7;
      -webkit-transition: .2s;
      transition: opacity .2s;
      padding: 5px;
      border-radius: 10px;
    }

    .slider:hover {
      opacity: 1;
    }

    .slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 10px;
      height: 10px;
      background: #04AA6D;
      cursor: pointer;
      border-radius: 10px;
    }

    * {
      margin: 10px;
    }
  }

  .map-element {
    position: relative;
    grid-area: map;
  }

  #reload-button {
    background: var(--grey);
    padding: 5px;
    border-radius: 10px;
    transition: 200ms;
  }

  #reload-button:hover {
    background: var(--dark-alt);
  }
}
</style>