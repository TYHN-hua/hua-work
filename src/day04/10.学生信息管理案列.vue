<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model="name"/>
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model="age" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="sex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="add">添加/修改</button>
    </div>
    <div>
      <table
        border="1"
        cellpadding="10"
        cellspacing="0"
      >
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item,index) in arr" :key="item.id">
          <td>{{index + 1}}</td>
          <td>{{item.name}}</td>
          <td>{{item.age}}</td>
          <td>{{item.sex}}</td>
          <td>
            <button @click='del(index)'>删除</button>
            <button @click="set(index)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr:[
      {name:'张三',age:20,sex:'男'},
      {name:'李四',age:18,sex:'女'},
      {name:'王五',age:16,sex:'男'},
      ],
      name:"",
      age:"",
      sex:"男",
    } 
  },
  methods: {
    add() {
      if (this.name.trim().length == 0 || this.age.trim().length == 0) {
        alert('请输入信息')
      } else {
        this.arr.push({
          name: this.name,
          age: this.age,
          sex: this.sex,
        }),
        this.name = '',
        this.age = ''
      }
    },
    del(val) {
      this.arr.splice(val,1)
    },
    set(val) {
      const obj = this.arr[val]
      this.name = obj.name
      this.age = obj.age
      this.sex = obj.sex
    }
  }
}
</script>