<template>
  <div class="stop-resize">
    <div class="container">
      <canvas ref="chart" class="chart"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'
import { getAllByField } from '../services/backendService.js'

const chart = ref(null)

onMounted(async () => {
  const chartElement = chart.value
  const fetchedData = await getAllByField('population', 1930, 2023, ["Sweden", "Norway", "Russia"])

  console.log(fetchedData)

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

    .chart {
      max-width: 70%;
      max-height: 500px;
      min-width: 0;
      width: 100%;
    } 
  }

  .container::-webkit-scrollbar {
    display: none;
  }
}
</style>