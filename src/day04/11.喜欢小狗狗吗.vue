<template>
  <div>
    <Dog></Dog>
    <Dog></Dog>
    <Dog></Dog>
  </div>
</template>

<script>
import Dog from './components/dog1.vue'
export default {
  components: {
    Dog
  }
}
</script>

<style>
  .my_div {
  width: 200px;
  border: 1px solid black;
  text-align: center;
  float: left;
}

.my_div img {
  width: 100%;
  height: 200px;
}
</style>