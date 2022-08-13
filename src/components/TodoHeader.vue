<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll">
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model="message"
      @keyup.enter="addList"
    />
  </header>
</template>

<script>

export default {
  data(){
    return {
      message:this.$store.state.todoheader.message
    }
  },
  computed:{
    isAll:{
      set(val){
        this.$store.getters.list.forEach(item => item.isDone = val)
      },
      get(){
        return this.$store.getters.list.every(item => item.isDone)
      }
    }
  },
  methods:{
    addList(){
      if(!this.message.trim()){
        this.message = ''
        return alert('任务名不能为空!')
      }
      let list = this.$store.getters.list
      list.unshift({
        id:(list.length > 0 && list[list.length - 1].id + 1) || 100,
        name:this.message,
        isDone:false
      })
      this.message = ''
    }
  }
}
</script>