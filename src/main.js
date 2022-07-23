import Vue from 'vue'
import App from './App.vue'

import Index from "./views/index.vue"
import News from "./views/news.vue"
import Sports from "./views/sports.vue"

import SportIndex from './views/second/SportsIndex.vue'
import SportC  from './views/second/SportC.vue'
import SportW from './views/second/SportW.vue'


import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component:Index, 
  },
  {
    path:'/index',
    component:Index
  },
  {
    path: '/news',
    component:News
  },
  {
    path: '/sports',
    component:Sports,
    children: [
      {
        path: 'SportIndex',
        component:SportIndex,
      },
      {
        path: 'SportC',
        component:SportC,
      },
      {
        path: 'SportW',
        component:SportW,
      }
    ]
  },
]
const router = new VueRouter({
  routes,
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
