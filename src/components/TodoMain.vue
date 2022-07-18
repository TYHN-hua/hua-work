<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li :class="{completed: item.isDone}" v-for="item in arr" :key="item.id">
      <div class="view">
        <input class="toggle" type="checkbox" v-model="item.isDone"/>
        <label>{{item.name}}</label>
        <button class="destroy" @click="delFn(item.id)"></button>
      </div>
    </li>
  </ul>
  
</template>

<script>
export default {
    props: ['arr'],
    methods: {
        delFn(id) {
            this.$emit('del',id)
        }
    }
}
</script>