<template>
  <div>
    <div>
      <MyHeader :title="'我的购物车'"></MyHeader>
    </div>
    <div style="margin-top: 45px">
      <MyMain v-for="item in list" :key="item.id" :obj="item"></MyMain>
    </div>
    <div>
      <MyFooter :arr="list"></MyFooter>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyMain  from './components/MyMain.vue'
import MyFooter from './components/MyFooter.vue'
export default {
  data() {
    return {
      list: []
    }
  },
  components: {
     MyHeader,
     MyMain,
     MyFooter,
  },
  created() {
    this.$axios({
      url:"/api/cart"
    }).then((res) => {
      this.list = res.data.list
    })
  }
}
</script>

<style>

</style>