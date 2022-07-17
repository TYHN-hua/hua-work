<template>
  <div>
      <div v-for="(item,index) in arr" :key="index">
        <input type="checkbox" v-model="num" :value="item">
        <span>{{ item }}</span>
      </div>
      <div>
        <p>你选中的元素, 累加的值和为: {{ Sum }}</p>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            arr:[9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
            num:[],
        }
    },
    computed:{
      Sum() {
        return this.num.reduce((s,val) => {
          return (s += val)
        },0)
      }
    }
}
</script>

<style>

</style>