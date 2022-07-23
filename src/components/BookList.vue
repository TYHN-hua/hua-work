<template>
  <div>
    <input type="text" placeholder="搜索书本名称" @keyup.enter="searchFn(abc)" v-model="abc">
    <table border="1">
      <thead>
        <tr style="text-align:center;">
        <th width="100">序号</th>
        <th width=150>书名</th>
        <th width="150">作者</th>
        <th width="150">出版商</th>
        <th width="300">操作</th>
      </tr>
      </thead>
      <tbody>
        <tr style="text-align:center;" v-for="(item,index) in list" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.bookname}}</td>
        <td>{{item.author}}</td>
        <td>{{item.publisher}}</td>
        <td>
          <button @click="del(item.id)">删除</button>
          <button @click="readBtn(index)">详情</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list:[],
      abc:"",
    };
  },
  methods: {
    searchFn(val) {
      if (this.abc.trim() == "") {
        return alert("请填写查找内容")
      }
      this.$axios({
        url:"/api/getbooks",
        params:{bookname:val}
      }).then((res) => {
        // console.log(res);
        if (res.data.data.length <= 0) {
          return alert("查无此书")
          } else {
          this.list = res.data.data
        }
        
      })
    },
    del(id) {  
      this.$axios({
        url:"/api/delbook",
        params:{id},
      }).then((res) => {
        console.log(res);
      })
    },
    readBtn(val) {
    alert(`书名：${this.list[val].bookname} 作者：${this.list[val].author} 出版社：${this.list[val].publisher}`)

    },
  },
  mounted() {
    this.$axios({
      url:'/api/getbooks',
    }).then((res) => {
      // console.log(res);
        this.list = res.data.data
    })
  }
}
</script>
<style scoped>
</style>
