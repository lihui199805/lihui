
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
    path: '/user/registry',
    name: 'registry',
    component: () => import(/* webpackChunkName: "UserLogin" */ '../views/user/Registry.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '@/views/common/404.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  },
  {
    path:'/user/home',
    component: () => import(/* webpackChunkName: "NotFound" */ '@/views/user/Home.vue'),
    children:[
      {
        path:'/user/home/index',
        component: () => import(/* webpackChunkName: "NotFound" */ '@/views/user/home/Index.vue')
      }
    ]
  }
]
