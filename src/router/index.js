import { createRouter, createWebHistory } from 'vue-router'

import BigScreenView from '../views/BigScreenView.vue'

const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'big-screen',
      component: BigScreenView
    },
  ]
})

export default router