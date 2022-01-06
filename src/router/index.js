import { createRouter, createWebHashHistory } from 'vue-router'

const publicRoutes = [
  {
    path: '/login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('../layout')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
