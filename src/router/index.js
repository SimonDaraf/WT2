import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Map from '../views/Map.vue'
import Chart from '../views/Chart.vue'

const router = createRouter({
  history: createWebHistory('/geo-info/'),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/map',
      component: Map
    },
    {
      path: '/chart',
      component: Chart
    }
  ]
})

export default router
