import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/index',
    name:'IndexView',
    component:() => import ('@/views/IndexView.vue')
  },
  {
    path: '/login',
    name: 'LoginView',
    component: () => import('@/layout/Client/Login.vue')
  },
  {
    path: '/admin',
    component: () => import('@/views/AboutView.vue'),
    children: [
      {
        path: 'category',
        component: () => import('@/layout/Admin/Product/ProductView.vue')
      },
      {
        path: 'user',
        component: () => import('@/layout/Admin/User/User.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
