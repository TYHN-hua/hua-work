import Vue from 'vue'
import Vuex from 'vuex'
import todofooter from './modules/todofooter'
import todoheader from './modules/todoheader'
import todomain from './modules/todomain'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        todofooter,
        todoheader,
        todomain
    },
    getters: {
        list: (state) => {
            return state.todomain.list
        },
        showList: (state,getters) => {
            if (state.todofooter.isSel === 'no') {
                    return getters.list.filter(item => item.isDone == false)
            } else if (state.todofooter.isSel === 'yes') {
                return getters.list.filter(item => item.isDone == true)
            } else {
                return getters.list
                }
        }
    },
    plugins: [createPersistedState({
        key: "myVuex",
        paths: ["todomain"],
        reducer(state) {
            return {
                todomain:{
                    list:state.todomain.list
                }
                
            }
        }
    })]
})

export default store