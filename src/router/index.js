import { createRouter, createWebHistory } from 'vue-router'
import TiersView from '../views/TiersView.vue'
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
      path: '/tiers',
      name: 'tiers',
      component: TiersView
    }
  ]
})

export default router
