<template>
  <div class="regester">
    <!-- 标题 -->
    <h1>商旅伴侣</h1>
    <!-- 输入框 -->
    <div class="inputsbutonn">
      <van-cell-group>
        <van-field v-model="regester.username" placeholder="请输入手机号" />
        <van-field v-model="regester.password" placeholder="请输入密码" />
      </van-cell-group>
      <van-button type="default" >立即注册</van-button>
      <van-button type="primary" @click="toLogin" style="marginTop:10px;">返回登录</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      regester: {
        username: "",
        password: ""
      }
    };
  },
  methods:{
      toLogin(){
          this.$router.push('/login')
      }
  }
};
</script>
<style lang="scss" scoped>
.regester {
  width: 750upx;
  height: 100vh;
  background: url("http://lck.hzlyzhenzhi.com/img/login.9ced08d2.jpg") no-repeat;
  h1 {
    text-align: center;
    color: #fff;
    padding-top: 80px;
    text-shadow: 1px 4px 5px #fe9f5d;
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
    .van-button--normal {
      border: none;
      outline: none;
      background-color: #fe9f5d;
      color: #fff;
      width: 160px;
      height: 36px;
      border-radius: 18px;
      align-self: center;
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