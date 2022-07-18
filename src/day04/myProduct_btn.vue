<template>
  <div class="my-product">
    <h3>标题: {{title}}</h3>
    <p>价格: {{price}}</p>
    <p>{{info}}</p>
    <button @click="btn">宝刀-砍一元</button>
  </div>
</template>

<script>
import eventBus from '../EventBus'
export default {
    props:['title','price','info','index'],
    methods: {
        btn() {
            // this.$emit('subprice', this.index, 1) // 子向父
            eventBus.$emit('send',this.index,1)
        },
    }
}
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>