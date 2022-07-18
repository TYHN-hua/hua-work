<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>{{count}}</strong></span>
    <ul class="filters" @click='fn'>
      <li>
        <a class="selected" href="javascript:;" :class="{selected: isSel === 'all'}" @click="isSel='all'">全部</a>
      </li>
      <li>
        <a href="javascript:;" :class="{selected: isSel === 'no'}" @click="isSel='no'">未完成</a>
      </li>
      <li>
        <a href="javascript:;" :class="{selected: isSel === 'yes'}" @click="isSel='yes'">已完成</a>
      </li>
    </ul>
    <button class="clear-completed" @click="clearFn">清除已完成</button>
  </footer>
</template>

<script>
export default {
    props:['Arr'],
    computed: {
        count() {
            return this.Arr.length
        }
    },
    data () {
        return {
            isSel: 'all' // 全部:'all', 已完成'yes', 未完成'no'
        }
    },
    methods: {
        fn() {
             this.$emit("changeType", this.isSel)
        },
        clearFn() {
            this.$emit('clear')
        }
    }
}
</script>