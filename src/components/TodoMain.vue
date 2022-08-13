<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li :class="{completed:item.isDone}" v-for="(item,index) in showList" :key="index">
      <div class="view">
        <input class="toggle" type="checkbox" v-model="item.isDone"/>
        <label>{{item.name}}</label>
        <button class="destroy" @click="delFn(item.id)"></button>
      </div>
    </li>
  </ul>
  
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed:{
    ...mapGetters(['list']),
    ...mapGetters(['showList'])
  },
  methods:{
    delFn(id){
      const index = this.$store.getters.list.findIndex(item => item.id == id)
      this.$store.commit('todomain/delList',index)
    }
  }
}
</script>