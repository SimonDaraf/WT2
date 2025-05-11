<template>
  <div class="stop-resize">
    <div class="container">
      <h1>Chart View</h1>

      <div class="year-selector">
        <select class="field-selector" v-model="selected">
          <option v-for="field in fields" :key="field.value" :value="field.value">
            {{ field.title }}
          </option>
        </select>

        <div>
          {{ selectedLowestYear }}
        </div>

        <div class="dual-slider">
          <input type="range" :min="lowestYear" :max="highestYear" :value="selectedLowestYear" @input="onSliderUpdated($event.target.value, 'min')">
          <input type="range" :min="lowestYear" :max="highestYear" :value="selectedHighestYear" @input="onSliderUpdated($event.target.value, 'max')">
        </div>

        <div>
          {{ selectedHighestYear }}
        </div>

        <button id="reload-button" @click="fetchData">Reload</button>
      </div>
      
      <div ref="chartContainer" class="chart-container">
        <div class="chart-parent">
          <canvas ref="chart"></canvas>
        </div>
        <div class="selector">
          <div v-for="country in countries" v-bind:key="country">
            <input class="checkbox" type="checkbox" :value="country.name" v-model="checked">
            <span class="name-display">{{ country.name }}</span>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'
import { getAllByField, getAllCountries, getYearRange } from '../services/backendService.js'
import { Fields } from '../utils/fields.enum.js'
import { lerpColor } from '../utils/colorLerp.js'

Chart.register({
  id: "safeContextPlugin",
  beforeDraw(chart) {
    // Because we destroy async there is a chance that chartJS tries to reference the destroyed chart...
    const ctx = chart.ctx
    if (!ctx || ctx === null) {
      return false;
    }
  }
})

const rootStyles = getComputedStyle(document.documentElement)
const minColor = rootStyles.getPropertyValue('--primary-alt')
const maxColor = rootStyles.getPropertyValue('--chart-color-max')

const chartContainer = ref(null)
const chart = ref(null)
const countries = ref(null)
const checked = ref([])

const lowestYear = ref(null)
const highestYear = ref(null)

const selectedHighestYear = ref(null)
const selectedLowestYear = ref(null)

const selected = ref(Fields.POPULATION.value)
const fields = Fields.toArray()

const currentChart = ref(null)

const onSliderUpdated = function(val, sender) {
  switch (sender) {
    case 'min':
      if (val > selectedHighestYear.value) {
        selectedHighestYear.value = val
      }
      selectedLowestYear.value = val
      return
    case 'max':
      if (val < selectedLowestYear.value) {
        selectedLowestYear.value = val
      }
      selectedHighestYear.value = val
      return
    default:
      return
  }
}

const fetchData = async function() {
  const fetchedData = await getAllByField(selected.value, selectedLowestYear.value, selectedHighestYear.value, checked.value)

  const datasets = []

  let highestColorValue = 0
  const colorData = {}

  // We need to run once to assemble all color data to use in the next iteration.
  for (const cData of fetchedData.data) {
    const tot = cData.data.reduce((accumulator, currentValue) => {
      if (currentValue !== null) {
        accumulator += currentValue
      }
      return accumulator
    }, 0)

    if (tot > highestColorValue) highestColorValue = tot
    colorData[cData.name] = tot
  }

  for (const cData of fetchedData.data) {
    const color = lerpColor(minColor, maxColor, (colorData[cData.name] - 0) / ((highestColorValue - 0 !== 0) ? (highestColorValue - 0) : 1))
    datasets.push({
      label: cData.name,
      data: cData.data,
      borderColor: color,
      backgroundColor: color
    })
  }

  const data = {
    labels: fetchedData.labels,
    datasets
  }

  if (currentChart.value !== null) {
    currentChart.value.destroy()
  }

  currentChart.value = new Chart(chart.value, {
    type: 'line',
    data,
    options: {
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false
      },
      plugins: {
        tooltip: {
          itemSort: function(a, b) {
            return b.raw - a.raw
          }
        }
      }
    }
  })
}

onMounted(async () => {
  // Load a list of all countries
  countries.value = await getAllCountries()

  // Set lowest and highest year
  const yearRange = await getYearRange()
  lowestYear.value = yearRange.lowest_year
  highestYear.value = yearRange.highest_year

  selectedHighestYear.value = highestYear.value - 10
  selectedLowestYear.value = lowestYear.value + 10
  await fetchData()

  // Fix chart just not respecting dynamic sizes...
  const width = chartContainer.value.offsetWidth
  const height = chartContainer.value.offsetHeight


})
</script>

<style lang="scss" scoped>
.stop-resize {
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  
  .container {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
    align-items: center;
    width: 100%;

    .year-selector {
      display: flex;
      flex-direction: row;
      gap: 10px;
      margin-bottom: 20px;
      align-items: center;

      .field-selector {
        -webkit-appearance: none;
        background: var(--dark-alt);
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;
        padding: 5px;
        border-radius: 10px;
        color: var(--light);
      }

      .field-selector:hover {
        opacity: 1;
      }

      #reload-button {
        background: var(--grey);
        padding: 5px;
        border-radius: 10px;
        transition: 200ms;
        color: var(--light);
      }

      div {
        display: inline-block;
      }

      .dual-slider {
        position: relative;
        height: 20px;
        width: 300px;
        text-align: center;

        input[type=range] {
          border-radius: 30px;
          background: var(--dark-alt);
          -webkit-appearance: none;
          width: 100%;
          height: 20px;
          position: absolute;
          left: 0;
          bottom: 0;
        }

        input[type=range]:focus {
          outline: none;
        }

        input[type=range]::-webkit-slider-thumb {
          z-index: 2;
          position: relative;
          height: 15px;
          width: 15px;
          border-radius: 25px;
          background: var(--primary-alt);
          cursor: pointer;
          -webkit-appearance: none;
        }
      }
    }

    h1 {
      margin: 20px;
    }

    .chart-container {
      width: 95%;
      height: fit-content;
      display: flex;
      flex-direction: row;
      background: var(--dark-alt);
      border-radius: 10px;

      .chart-parent {
        grid-area: chart;
        width: 100%;
        min-width: 0;
        margin: 10px;
        background: var(--dark);
        border-radius: 10px;
      }

      .selector {
        padding: 5px 10px;
        min-width: fit-content;
        margin: 0 0 0 20px;
        background: var(--dark-alt);
        border-radius: 10px;
        max-height: 700px;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        align-items: start;

        .name-display {
          color: var(--light);
          margin: 0 0 0 10px;
        }
      }

      .selector::-webkit-scrollbar-thumb {
        background-color: var(--grey);
        border: 4px solid transparent;
        border-radius: 8px;
        background-clip: padding-box;  
      }

      .selector::-webkit-scrollbar {
        width: 16px;
      }
    }
  }

  .container::-webkit-scrollbar {
    display: none;
  }
}
</style>