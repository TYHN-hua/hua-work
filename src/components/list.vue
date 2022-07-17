<template>
  <ul class="my-product">
      <li v-for="(item, index) in arr" :key="index">
          <span>{{ item.proname }}</span>
          <span>{{ item.proprice }}</span>
      </li>
  </ul>
</template>

<script>
import eventBus from '../EventBus'
export default {
  props: ['arr'],
  created() {
      eventBus.$on('send',(index,price) => {
          this.list[index].proprice > 1 && 
          (this.list[index].proprice = (this.list[index].proprice - price).toFixed(2))
      })
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