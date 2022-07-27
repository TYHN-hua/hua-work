<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
    
    <van-tabbar route>
      <van-tabbar-item icon="home-o" replace to="/layout/home"
        >首页</van-tabbar-item
      >
      <van-tabbar-item icon="search" replace to="/layout/search"
        >找房</van-tabbar-item
      >
      <van-tabbar-item icon="friends-o" replace to="/layout/message"
        >资讯</van-tabbar-item
      >
      <van-tabbar-item icon="setting-o" replace to="/layout/my"
        >我的</van-tabbar-item
      >
    </van-tabbar>
    
  </div>
</template>

<script>
export default {};
</script>

<style>

</style>
