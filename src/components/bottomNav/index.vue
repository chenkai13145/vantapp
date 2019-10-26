<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" @click.native="toSwich('/home')">首页</van-tabbar-item>
    <van-tabbar-item  @click.native="toSwich('/home')">
           <div class="jia">
             +
           </div>
    </van-tabbar-item>
    <van-tabbar-item icon="setting-o" @click.native="toSwich('/me')">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      icon: {
        normal: '//img.yzcdn.cn/icon-normal.png',
        active: '//img.yzcdn.cn/icon-active.png'
      }
    }
  },
  methods:{
    toSwich(path){
       this.$router.push(path)
    }
  }
}
</script>
<style lang="scss">
.jia{
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: absolute;
    top: -30px;
    left: 40vw;
    width: 20vw;
    height: 60px;
    border-radius: 50%;
    z-index: 6666;
    color: #afafaf;
    background-color: white;
    font-size: 42px;
    text-align: center;
}
</style>