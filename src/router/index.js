import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

//const Route1 = { template: '<div style = "border-radius:20px;background-color:cyan;width:200px;height:50px;margin:10px;font-size:25px;padding:10px;">This is router 1</div>' }
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import(/* webpackChunkName: "about" */ '../views/Orders.vue')
  },
  {
    path: '/order-details',
    name: 'order-details',
    component: () => import(/* webpackChunkName: "about" */ '../views/Order_details.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import(/* webpackChunkName: "about" */ '../views/Products.vue')
  },
  {
    path: '/suppliers',
    name: 'suppliers',
    component: () => import(/* webpackChunkName: "about" */ '../views/Suppliers.vue')
  },
  {
    path: '/supplier-products',
    name: 'supplier-products',
    component: () => import(/* webpackChunkName: "about" */ '../views/Supplier_products.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
