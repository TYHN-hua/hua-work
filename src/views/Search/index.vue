<template>
  <div style="position:relative;">
    
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
  </div>
</template>

<script>
import { areaList } from "@vant/area-data";
export default {
  data() {
    return {
      show: false,
      areaList,
    };
  },
  methods: {
    fn() {
      this.show = true;
    },
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
  },
};
</script>

<style scope>
.box {
  position: absolute;
  left: 40px;
  top: 0;
  display: flex;
  align-items: center;
  padding: 0 8px 0;
  background-color: #21b97a;
  z-index: 999999;
}
/* .van-nav-bar__content {
  background-color: #21b97a;
} */
.van-nav-bar .van-icon {
  color: #fff;
}
</style>
