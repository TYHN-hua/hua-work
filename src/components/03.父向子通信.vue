<template>
  <div>
    <Product title='好吃的口水鸡' price="50" info="开业大酬宾, 全场8折"></Product>
    <Product title="好可爱的可爱多" price="20" intro="老板不在家, 全场1折"></Product>
    <Product title="好贵的北京烤鸭" price="290" :intro="str"></Product>
  </div>
</template>

<script>
import Product from "./myProduct.vue"
export default {
  data() {
    return {
      str:'好贵啊, 快来啊, 好吃'
    }
  },
  components:{
    // Product:Product        //名字相同时，可简写为
    Product
  }
}
</script>

<style>

</style>