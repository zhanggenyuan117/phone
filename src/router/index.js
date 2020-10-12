import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/details/:id',
    props:true,
    name: 'Details',
    component: () => import('../views/Details.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('../views/Mine.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
