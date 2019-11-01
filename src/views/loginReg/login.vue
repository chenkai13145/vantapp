<template>
  <div class="login">
    <!-- 标题 -->
    <h1>商旅伴侣</h1>
    <!-- 输入框 -->
    <div class="inputsbutonn">
      <van-cell-group>
        <van-field v-model="login.phone" error placeholder="手机号" />
        <van-field v-model="login.password" error type="password" placeholder="密码" />
      </van-cell-group>
      <!-- 忘记密码 -->
      <div class="forget">
        <a href="#">忘记密码</a>
      </div>
      <div class="buttons">
        <van-button type="default" @click="toindex('huiyuan')">会员登录</van-button>
        <van-button type="default" @click="toindex('shangjia')">商家登录</van-button>
        <van-button type="primary" @click="toRegstter">注册</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import { Login,merLogin } from "../../api/user";
export default {
  name:'login',
  data() {
    return {
      login: {
        phone:null,
        password:null
      }
    };
  },
  created() {},
  methods: {
    toRegstter() {
      this.$router.push("/regester");
    },
    toindex(val) {
      if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.login.phone)) {
        this.$toast("手机号格式不正确");
        return false;
      }
      if (this.login.password.length < 5) {
        this.$toast("密码长度不小于5位");
        return false;
      }
      let data = new FormData();
      for (let key in this.login) {
        data.append(key, this.login[key]);
      }
      if(val==='shangjia'){
          merLogin(data).then(res=>{
          console.log(res)
          if(res.status===200&&res.data.code===1){
            localStorage.setItem('user',JSON.stringify(res.data.data))
            localStorage.setItem('type',JSON.stringify(val))
            this.$store.dispatch('login',res.data.data)
            this.$toast(res.data.message)
            this.$router.push("/home");
          }
         })
      }else{
          Login(data).then(res => {
          if(res.status===200&&res.data.code===1){
            localStorage.setItem('user',JSON.stringify(res.data.data))
            localStorage.setItem('type',JSON.stringify(val))
            this.$store.dispatch('login',res.data.data)
            this.$toast(res.data.message)
            this.$router.push("/home");
          }
        // this.$router.push("/home");
          });
      }
     
     
    },
    toindextwo(){

    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  width: 750upx;
  height: 100vh;
  background: url("http://lck.hzlyzhenzhi.com/img/login.9ced08d2.jpg") no-repeat;
  background-size: cover;
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
  .van-button {
    height: 36px;
    line-height: 36px;
  }
}
</style>