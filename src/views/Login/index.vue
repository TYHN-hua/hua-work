<template>
  <div>
    <van-nav-bar title="账号登录" left-arrow @click-left="onClickLeft" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请输入账号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请输入密码' }]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit" class="login-btn"
          >登录</van-button
        >
      </div>
    </van-form>
    <p class="toregistered" @click="toRegister">还没有账号，去注册~</p>
  </div>
</template>

<script>
import {goLogin} from "@/api/index"
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "./layout/my",
      });
    },
    toRegister() {
      this.$router.push({
        path: "/regist",
      });
    },
    loading() {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true
      })
    },
    async onSubmit() {
      try {
        this.loading()
        const res = await goLogin(this.username,this.password)
        this.$router.push('/layout/my')
        this.$toast.success('登录成功')
        console.log(res);
      } catch(error) {
        const status = error.response.status
        let message = '请重新登录'
        if (status === 400) {
          message = error.response.data.message
        }
        this.$toast.fail(message)
      }
    }
  }, 
};
</script>

<style scoped>
:deep(.van-nav-bar__content) {
  background-color: #21b97a;
}
:deep(.van-icon-arrow-left:before) {
  color: #fff;
}
:deep(.van-nav-bar__title) {
  color: #fff;
  font-size: 20px;
}
:deep(.login-btn) {
  background-color: #21b97a;
  border: 1px solid #21b97a;
  font-size:20px
}
.toregistered {
  text-align:center;
  font-size: 16px;
}
</style>
