<template>
  <button :class="`one-button-${type}`" @click="btnFn">{{title}}</button>
</template>

<script>
export default {
    props: {
        title:String,
        type: {
            type: String,
            default:"primary",
            // 限制，只能是以下数组里的字段
            Validator: (val) => {
              //val type 传递进来的值
              return ['primary','success','warning','danger'].includes(val)
            }
        }
    },
    methods: {
      btnFn() {
        this.$emit("click1")
      }
    }
}
</script>

<style scoped>
button {
  color: #fff;
  outline: none;
  border: none;
  padding: 8px 24px;
  border-radius: 4px;
  font-size: 18px;
}
.one-button-primary {
  background-color: skyblue;
}
.one-button-success {
  background-color: hotpink;
}
.one-button-warning {
  background-color: yellow;
}
.one-button-danger {
  background-color: red;
}
</style>
