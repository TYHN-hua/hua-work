<template>
  <div>
    <div class="my-top">
      <van-image
        width="100%"
        src="http://liufusong.top:8080/img/profile/bg.png"
      />
      <div class="my-top-mes">
        <div class="my-top-img">
          <van-image
            width="60"
            height="60"
            src="http://liufusong.top:8080/img/profile/avatar.png"
          />
        </div>
        <div class="my-top-text">
          <p>游客</p>
          <van-button type="info" color="#21b97a" size="small" to='/login'
            >去登录</van-button
          >
        </div>
      </div>
    </div>
    <div>
      <van-grid :column-num="3">
        <van-grid-item icon="star-o" text="我的收藏" to='/login'/>
        <van-grid-item icon="wap-home-o" text="我的出租" to='/login'/>
        <van-grid-item icon="clock-o" text="看房记录" />
        <van-grid-item icon="balance-list-o" text="成为房主" />
        <van-grid-item icon="manager-o" text="个人资料" />
        <van-grid-item icon="phone-o" text="联系我们" />
      </van-grid>
    </div>
    <div>
      <van-image
        width="100%"
        height="146"
        src="http://liufusong.top:8080/img/profile/join.png"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.my-top {
  position: relative;
  width: 100%;
  height: 300px;
}
.my-top .my-top-mes {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1px;
  width: 320px;
  height: 165px;
  background-color: #fff;
  box-shadow: 0 0 10px 3px #ddd;
}
.my-top .my-top-mes .my-top-img {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  background-color: #fff;
  border-radius: 50%;
}
.my-top .my-top-mes .my-top-text {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: 10px;
  transform: translate(-50%, -50%);
}
.my-top .my-top-mes .my-top-text p {
  font-size: 16px;
  text-align: center;
  margin-bottom: 10px;
}
</style>
