import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'

//axios全局配置
import axios from "axios"
axios.defaults.baseURL ="https://www.escook.cn"
Vue.prototype.$axios = axios

Vue.config.productionTip = true

new Vue({
  render: h => h(App),
}).$mount('#app')
