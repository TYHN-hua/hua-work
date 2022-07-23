<template>
  <div>
    <div>
      <router-link to='/sports/SportIndex'>体育首页</router-link>
      <router-link to='/sports/SportC'>国内体育</router-link>
      <router-link to='/sports/SportW'>国外体育</router-link>
  </div>

  <div style='1px solid blue'>
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
export default {
    name: "cxkJntm"
}
</script>

<style>

</style>