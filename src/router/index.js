import { createRouter, createWebHistory } from 'vue-router'
import TiersView from '../views/TiersView.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ErrorPage from '../views/ErrorPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tiers',
      name: 'tiers',
      component: TiersView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: ErrorPage
    }
  ]
})

export default router
