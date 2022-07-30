import Vue from 'vue'
import App from './App.vue'

import './assets/reset.css'
import './assets/flexible'
import './assets/font/iconfont.css'

import router from "@/router/index"

import Vant from 'vant';
import {Lazyload} from "vant"
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.use(Lazyload);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
