import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../pages/Login.vue')
    },
    {
      path: '/logged-layout',
      name: 'LoggedLayout',
      component: () => import('../layout/LoggedLayout.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: '/home',
          name: 'Home',
          component: () => import('../pages/Login.vue')
        }
      ]
    }
  ]
})

export default router
