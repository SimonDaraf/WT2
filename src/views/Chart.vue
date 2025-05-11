<template>
  <div class="stop-resize">
    <div class="container">
      <h1>Chart View</h1>
      <div class="chart-container">
        <canvas ref="chart" class="chart"></canvas>
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

const chart = ref(null)
const countries = ref(null)
const checked = ref([])

const lowestYear = ref(1900)
const highestYear = ref(2023)
const selectedHighestYear = ref(1920)
const selectedLowestYear = ref(2020)

onMounted(async () => {
  // Load a list of all countries
  countries.value = await getAllCountries()

  // Set lowest and highest year
  const yearRange = await getYearRange()
  lowestYear.value = yearRange.lowest_year
  highestYear.value = yearRange.highest_year

  const chartElement = chart.value
  const fetchedData = await getAllByField('population', 1930, 2023, ["Sweden", "Norway", "Russia"])

  const datasets = []

  for (const cData of fetchedData.data) {
    datasets.push({
      label: cData.name,
      data: cData.data,
      borderColor: '#fff',
      backgroundColor: '#fff'
    })
  }

  const data = {
    labels: fetchedData.labels,
    datasets
  }

  new Chart(chartElement, {
    type: 'line',
    data,
    options: {
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false
      }
    }
  })
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

    h1 {
      margin: 20px;
    }

    .chart-container {
      width: 80%;
      height: fit-content;
      display: flex;
      flex-direction: row;

      .chart {
        grid-area: chart;
        max-width: 100%;
        max-height: 600px;
        aspect-ratio: 16 / 9;
        min-width: 0;
      }

      .selector {
        padding: 5px 10px;
        min-width: fit-content;
        margin: 0 0 0 20px;
        background: var(--dark-alt);
        border-radius: 10px;
        max-height: 600px;
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