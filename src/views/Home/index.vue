<template>
  <div class="hk-search">
    <div class="box">
      <van-search
        show-action
        placeholder="请输入搜索关键词"
        left-icon="arrow-down"
        @click-left-icon="fn"
      >
        <template #action>
          <div>搜索</div>
        </template>
      </van-search>
      <van-popup v-model="show" position="bottom">
        <van-area
          title="标题"
          :area-list="areaList"
          :columns-placeholder="['请选择', '请选择', '请选择']"
        />
      </van-popup>
    </div>
    <div>
      <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
        <van-swipe-item></van-swipe-item>
        <van-swipe-item></van-swipe-item>
        <van-swipe-item></van-swipe-item>
      </van-swipe>
    </div>
    <van-tabbar :fixed="false" id="one" route>
      <van-tabbar-item to="/layout/search">
        <template>
          <img src="../../assets/imgs/1.png" />
        </template>
        <div>整租</div>
      </van-tabbar-item>
      <van-tabbar-item to="/layout/search">
        <template>
          <img src="../../assets/imgs/2.png" />
        </template>
        <div>合租</div>
      </van-tabbar-item>
      <van-tabbar-item>
        <template>
          <img src="../../assets/imgs/3.png" />
        </template>
        <div>地图找房</div>
      </van-tabbar-item>
      <van-tabbar-item>
        <template>
          <img src="../../assets/imgs/4.png" />
        </template>
        <div>去出租</div>
      </van-tabbar-item>
    </van-tabbar>
    <div class="one">
      <p>租房小组</p>
      <span>更多</span>
    </div>
    <van-row>
      <van-col span="11" v-for="item in list" :key="item.id" class="two">
        <van-image width="40" height="40" :src="baseURL + item.imgSrc" />
        <p style="font-size: 16px">{{ item.title }}<br />{{ item.desc }}</p>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { hkzfListApi } from "@/api";
import { areaList } from "@vant/area-data";
export default {
  data() {
    return {
      list: [],
      baseURL: "http://liufusong.top:8080",
      areaList,
      show: false,
    };
  },
  mounted() {
    this.hkzfList();
  },
  methods: {
    async hkzfList() {
      try {
        const res = await hkzfListApi({});
        this.list = res.data.body;
      } catch (e) {
        console.log(e);
      }
    },
    fn() {
      this.show = true;
    },
  },
};
</script>

<style scoped>
.my-swipe {
  height: 200px;
}
.my-swipe .van-swipe-item:nth-child(1) {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background: url("../../assets/img/1.png") no-repeat center center / cover;
}
.my-swipe .van-swipe-item:nth-child(2) {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background: url("../../assets/img/2.png") no-repeat center center / cover;
}
.my-swipe .van-swipe-item:nth-child(3) {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background: url("../../assets/img/3.png") no-repeat center center / cover;
}
#one {
  height: 100px;
  overflow: hidden;
}
.van-tabbar-item__text {
  height: 100px;
}
.van-tabbar-item img {
  width: 60px;
}
.van-tabbar-item {
  text-align: center;
}
.one {
  height: 30px;
  padding: 0 40px 0;
  margin-bottom: 20px;
}
.one p {
  float: left;
  font-size: 16px;
}
.one span {
  float: right;
  color: #333;
  font-size: 12px;
}
.two {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0;
}
.box {
  position: absolute;
  top: 15px;
  left: 46px;
  display: flex;
  align-items: center;
  padding: 0 8px 0;
  z-index: 999999;
}
.hk-search {
  position: relative;
}

</style>
