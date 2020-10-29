/*
 * @Author: zhang_gen_yuan
 * @Date: 2020-10-29 16:42:28
 * @LastEditTime: 2020-10-29 16:48:34
 * @Description: 
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      required:false
    }
  },
  {
    path: '/details/:id',
    props:true,
    name: 'Details',
    component: () => import('../views/Details.vue'),
    meta:{ required:false }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta:{ required:false }
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('../views/Mine.vue'),
    meta:{ required:false }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue'),
    meta:{ required:true }
  },
  {
    path: '/address',
    name: 'Address',
    component: () => import('../views/Address.vue')
  },
  {
    path: '/addressEdit',
    name: 'AddressEdit',
    component: () => import('../views/AddressEdit.vue'),
    meta:{ required:true }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
