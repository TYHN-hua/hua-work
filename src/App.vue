<template>
  <section class="todoapp">
    <!-- 除了驼峰, 还可以使用-转换链接 -->
    <TodoHeader :arr="list" @create="createFn"></TodoHeader>
    <TodoMain :arr="showArr" @del="delbtn"></TodoMain>
    <TodoFooter :Arr="showArr" @changeType='typeFn' @clear='clearFun'></TodoFooter>
  </section>
</template>

<script>
import "./styles/base.css"
import "./styles/index.css"


import TodoHeader from './components//TodoHeader'
import TodoMain from './components/TodoMain'
import TodoFooter from './components/TodoFooter'


export default {
  data() {
    return {
      list:JSON.parse(localStorage.getItem('todoList')) || [],
      getSel:'all'
    }
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  methods: {
    createFn(val) {
      let id = this.list.length == 0 ? 100 : this.list[this.list.length - 1].id + 1
      this.list.push({
        id: id,
        name:val,
        isDone:false,
      })
    },
    delbtn(theid) {
      let index = this.list.findIndex(ele => {
        ele.id === theid
      })
        this.list.splice(index, 1)
    },
    typeFn(str) {
      this.getSel = str
    },
    clearFun() {
      this.list = this.list.filter(obj => obj.isDone == false)
    }
  },
  computed: {
    showArr(){
      if (this.getSel === 'yes') { // 显示已完成
        return this.list.filter(obj => obj.isDone === true)
      } else if (this.getSel === 'no') { // 显示未完成
        return this.list.filter(obj => obj.isDone === false)
      } else {
        return this.list // 全部显示
      }
    }
  },
  watch: {
    list: {
      deep: true,
      handler() {
        localStorage.setItem('todoList', JSON.stringify(this.list))
      }
    }
  }
}
</script>