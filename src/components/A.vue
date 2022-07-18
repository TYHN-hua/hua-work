<template>
  <div>
      <p>啦啦啦啦</p>
      <button @click="btn">点我呀</button>
  </div>
</template>

<script>
import eventBus from "../EventBus/index"
export default {
    data() {
        return {
            msg:'55555'
        }
    },
    methods: {
        btn() {
            eventBus.$emit("fromA",this.msg)
        }
    }
}
</script>

<style>

</style>