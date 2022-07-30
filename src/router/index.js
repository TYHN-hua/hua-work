import Vue from "vue"
import VueRouter from "vue-router"

import Layout from "@/views/Layout"
import Home from "@/views/Home"
import Search from "@/views/Search"
import Message from "@/views/Message"
import My from "@/views/My"
import Login from "@/views/Login"
import Regist from "@/views/Regist"
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        redirect: '/layout',
    },
    {
        path: '/layout',
        redirect: '/layout/home',
        component:Layout,
        children: [
            {
                path:'home',
                component:Home,
            },
            {
                path:'search',
                component:Search,
            },
            {
                path:'message',
                component:Message,
            },
            {
                path:'my',
                component:My,
            },
        ]
    },
    {
        path: '/login',
        component:Login,
    },
    {
        path: '/regist',
        component:Regist,
    }
    
]
// export default new VueRouter({ routes })
const router = new VueRouter({
    routes
  })
  export default router