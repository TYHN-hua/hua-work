<template>
  <div>
    <h1>{{ msg }}</h1>
    <button>点击变化</button>

    <!-- 
      Vue.set(target, propertyName/index, value)
      或
      vm.$set(target, propertyName/index, value)

    作用：向响应式对象中添加一个 属性，并确保这个新 属性
    同样是响应式的，且触发视图更新 
    
    target: 不能是 Vue 实例，或者 Vue 实例的根数据对象-->
  </div>
</template>

<script>
export default {
  name: "Demo03Set",
  data() {
    return {
      msg: 1,
    };
  },
  mounted() {},
  methods: {},
};
</script>