/*
 * @Author: heinan
 * @Date: 2023-06-29 11:30:18
 * @Last Modified by: heinan
 * @Last Modified time: 2023-06-29 11:38:13
 */
import { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/user/login'
  },
  {
    path: '/user/login',
    name: 'UserLogin',
    component: () => import(/* webpackChunkName: "UserLogin" */ '@/views/user/login.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '@/views/common/404.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]
