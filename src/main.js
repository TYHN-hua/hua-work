import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import axios from 'axios'
axios.defaults.baseURL = "http://www.liulongbin.top:3006"
Vue.prototype.$axios = axios

import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
