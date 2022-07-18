<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll">
    <label for="toggle-all"></label> 
    <!-- label 可以关联一个表单标签 -->
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keyup.enter="downFn"
      v-model="task"
    />
  </header>
</template>

<script>
export default {
    props: ["arr"],
    data () {
        return {
            task: ""
        }
    },
    methods: {
        downFn() {
            if (this.task.trim().length === 0) {
               return alert('不为空')
            }
            this.$emit('create',this.task)
            this.task = ""
        }
    },computed: {
        isAll: {
            set(checked) {
                this.arr.forEach(obj => obj.isDone = checked)
            },
            get() {
                return this.arr.length !== 0 && this.arr.every(obj => obj.isDone === true)
            }
        }
    }
}
</script>