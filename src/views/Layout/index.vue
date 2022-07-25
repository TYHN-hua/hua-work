<template>
  <div>
      <van-nav-bar :title="this.$route.meta.title"/>
      <div >
          <router-view></router-view>
      </div>
      <van-tabbar route>
        <van-tabbar-item icon="home-o" replace to="/layout/home">首页</van-tabbar-item>
        <van-tabbar-item icon="search" replace to="/layout/search">搜索</van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
export default {
    name:'MusicIndex',
}
</script>

<style>

</style>