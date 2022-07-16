<template>
  <div>
    <span>全选:</span>
    <input type="checkbox" v-model="isAll"/>
    <button @click="btn">反选</button>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        <input type="checkbox" v-model="item.c"/>
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
// 需求：
// 1. 铺设数据
// 2. 小选框都选中(手选), 全选自动选中
// 3. 全选影响小选
// 4. 反选
export default {
  data() {
    return {
      arr: [
        {
          name: "猪八戒",
          c: false,
        },
        {
          name: "孙悟空",
          c: false,
        },
        {
          name: "唐僧",
          c: false,
        },
        {
          name: "白龙马",
          c: false,
        },
      ],
    };
  },
  computed: {
    isAll: {
      set(val) {
        this.arr.forEach((ele) => (ele.c = val))
      },
      get() {
        return this.arr.every((ele)=> ele.c)
      }
    }
  },
  methods: {
    btn() {
      this.arr.forEach((ele) => (ele.c = !ele.c))
    }
  }
};
</script>