import Vue from 'vue'
import App from './App.vue'
import Index from "@/view/index"
import Cation from "@/view/cation"
import Order from "@/view/order"
import My from "@/view/my"




import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component:Index 
  },
  {
    path:'/index',
    component:Index
  },
  {
    path: '/cation',
    component:Cation
  },
  {
    path: '/order',
    component:Order
  },
  {
    path: '/my',
    component:My
  } 
]
const router = new VueRouter({
  routes,
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
