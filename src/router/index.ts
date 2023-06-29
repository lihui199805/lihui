/*
 * @Author: heinan
 * @Date: 2023-06-29 11:30:15
 * @Last Modified by: heinan
 * @Last Modified time: 2023-06-29 11:34:42
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { routes } from '@/router/routes'

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
