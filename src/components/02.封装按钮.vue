<template>
  <div>
    <myButton title="按钮" type="primary"></myButton>
    <myButton title="按钮" type="success"></myButton>
    <myButton title="按钮" type="warning"></myButton>
    <myButton title="按钮" type="danger"></myButton>
  </div>
</template>

<script>
// 引入
import myButton from "./components/button";
export default {
  data() {
    return {};
  },
  components: {
    myButton,
  },
};
</script>
