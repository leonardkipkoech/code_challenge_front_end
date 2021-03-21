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
  },
  {
    path: '/progress',
    name: 'progress',
    component: () => import(/* webpackChunkName: "about" */ '../views/progress.vue')
  },
  {
    path: '/orders_edit',
    name: 'orders_edit',
    component: () => import(/* webpackChunkName: "about" */ '../views/Orders_edit.vue')
  },
  {
    path: '/edit_Order_detail',
    name: 'edit_Order_detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/edit_Order_detail.vue')
  },
  {
    path: '/edit_Product',
    name: 'edit_Product',
    component: () => import(/* webpackChunkName: "about" */ '../views/edit_Product.vue')
  },
  {
    path: '/edit_Supplier_product',
    name: 'edit_Supplier_product',
    component: () => import(/* webpackChunkName: "about" */ '../views/edit_Supplier_product.vue')
  },
  {
    path: '/edit_Supplier',
    name: 'edit_Supplier',
    component: () => import(/* webpackChunkName: "about" */ '../views/edit_Supplier.vue')
  },
  {
    path: '/App_key_error',
    name: 'App_key_error',
    component: () => import(/* webpackChunkName: "about" */ '../views/App_key_error.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  methods: {
        clickProgress(){
          //alert("yes");
          var elem = this.$refs.myBtn;
          elem.click();
        },
        testFunc(){
          alert("yes");
          var elem = this.$refs.myBtn;
          elem.click();
        }    
  }
})

export default router

