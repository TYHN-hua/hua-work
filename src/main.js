import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//引入样式
import 'bootstrap/dist/css/bootstrap.css'
import "./assets/fonts/iconfont.css"

//引入ajax请求
import axios from 'axios'
axios.defaults.baseURL="https://www.escook.cn"
Vue.prototype.$axios = axios

//自定义全局指令
Vue.directive("focus",{
  inserted(el) {
    el.focus()
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
