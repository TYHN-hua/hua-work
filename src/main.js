import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import "bootstrap/dist/css/bootstrap.css"

//注册全局组件
// import Pannel from "./components/Pannel"
// Vue.component("Pannel",Pannel)


//注册全局的过滤器
Vue.filter('toLow',(val) => {
  return val.toLowerCase()
})

new Vue({
  render: h => h(App),
}).$mount('#app')
