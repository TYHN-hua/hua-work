import Vue from 'vue'
import App from './App.vue'

import './assets/reset.css'
import './assets/flexible'


import router from "@/router/index"

import { Tabbar, TabbarItem ,NavBar,Col,List,Search,Cell,CellGroup,Icon, Row, Image as VanImage} from 'vant';
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.use(Col)
Vue.use(Row)
Vue.use(VanImage)
Vue.use(Cell)
Vue.use(Icon)
Vue.use(CellGroup)
Vue.use(Search)
Vue.use(List)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
