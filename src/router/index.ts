
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { routes } from '@/router/routes'

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
