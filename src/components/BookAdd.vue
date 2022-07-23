<template>
  <div>
    <input type="text" placeholder="书名" v-model="bookname"><br>
    <input type="text" placeholder="作者" v-model="author"><br>
    <input type="text" placeholder="出版社" v-model="publisher"><br>
    <button @click="add">新增</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      bookname:"",
      author:"",
      publisher:"",
    }
  },
  methods: {
    add() {
      this.$axios({
        method:"POST",
        url:"/api/addbook",
        data: {
          bookname:this.bookname,
          author:this.author,
          publisher:this.publisher
        }
      }).then((res) => {
        // console.log(res);
        alert(res.data.msg);
      })
    }
  }
};
</script>

<style></style>