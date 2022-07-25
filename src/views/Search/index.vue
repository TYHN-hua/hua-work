<template>
  <div>
    <van-search shape="round" placeholder="请输入搜索关键词" 
    v-model="value"
    @input="inputFn"/>
    <div class="search_wrap">
      <p class="hot_title">热门搜索</p>
      <div class="hot_name_wrap">
        <span class="hot_item" v-for="(item, index) in hotList" :key="index">{{
          item.first
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { searchHotListApi ,cloudSearchListApi} from "@/api";
export default {
  name: "layOut",
  data() {
    return {
      hotList: [],
      list:[],
      value:""
    };
  },
  mounted() {
    this.getsearchHotList();
  },
  methods: {
    async getsearchHotList() {
      try {
        const res = await searchHotListApi();
        console.log(res);
        this.hotList = res.data.result.hots;
      } catch (e) {
        console.log(e);
      }
    },
    async getList() {
        try {
            const res = await cloudSearchListApi({
                keywords:'许嵩'
            })
            return (res.data.result && res.data.songs) || []
        } catch(e) {
            console.log(e);
        }
    },
    async inputFn() {
      try {
          this.list = await this.getList()
      } catch (e) {
          console.log(e);
      }
  }
  },
  
};
</script>

<style scoped>
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}

/* 给单元格设置底部边框 */
.van-cell {
  border-bottom: 1px solid lightgray;
}
</style>
