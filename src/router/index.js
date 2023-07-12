import { createRouter, createWebHistory } from 'vue-router'
import ChampionStatistics from '../views/ChampionStatisticsView.vue'
import Home from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/champions',
      name: 'champions',
      component: ChampionStatistics
    },
  ]
})

export default router
