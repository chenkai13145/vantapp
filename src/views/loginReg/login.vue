<template>
  <div class="login">
    <!-- 标题 -->
    <h1>商旅伴侣</h1>
    <!-- 输入框 -->
    <div class="inputsbutonn">
      <van-cell-group>
        <van-field v-model="login.username" error placeholder="用户" />
        <van-field v-model="login.password" error placeholder="密码" />
      </van-cell-group>
      <!-- 忘记密码 -->
      <div class="forget">
        <a href="#">忘记密码</a>
      </div>
      <div class="buttons">
        <van-button type="default" @click="toindex">登录</van-button>
        <van-button type="primary" @click="toRegstter">注册</van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      login: {
        username: "",
        password: ""
      }
    };
  },
  methods:{
   
  toRegstter(){
      this.$router.push('/regester')
  },
  toindex(){
      this.$router.push('/home')
  }
  }
};
</script>
<style lang="scss" scoped>
.login {
  width: 750upx;
  height: 100vh;
  background: url("http://lck.hzlyzhenzhi.com/img/login.9ced08d2.jpg") no-repeat;
  h1 {
    text-align: center;
    color: #fff;
    padding-top: 80px;
    text-shadow: 1px 4px 5px hsla(0, 0%, 50.2%, 0.3);
    letter-spacing: 2px;
  }
  .van-cell-group {
    margin: 60px 0 10px;
    background: none;
  }
  .inputsbutonn {
    padding: 0 10%;
    display: flex;
    flex-direction: column;
    .forget {
      display: flex;
      justify-content: flex-end;
      a {
        color: #fff;
        border-bottom: 1px solid #fff;
        font-size: 12px;
      }
      margin-bottom: 30px;
    }
    .buttons {
      display: flex;
      justify-content: space-between;
      .van-button--normal {
        border: none;
        outline: none;
        background-color: #fe9f5d;
        color: #fff;
        width: 100px;
        border-radius: 18px;
      }
    }
  }
  .van-hairline--top-bottom::after,
  .van-hairline-unset--top-bottom::after {
    border: none;
  }
  .van-cell {
    border-radius: 20px;
    margin: 20px 0 10px;
  }
  /deep/.van-field__control {
    padding: 0 10%;
  }
  .van-button{
      height: 36px;
      line-height: 36px;
  }
}
</style>