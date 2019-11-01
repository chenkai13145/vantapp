<template>
  <div class="s">
<van-nav-bar
  class="topbar"
  title="反馈信息"
  left-text=""
  @click-left="$router.go(-1)"
  left-arrow
/>
<div class="s11">
  <div class="s1">
    <h1>供应商</h1>
    <div class="s1_content">
    <p>啊的黄金期货可还是空间都去郊区松口气案件吃撒快乐和你参考老师经常卡死快乐到家了ask就内存卡里进行查克拉数据</p>
    <img src="../../assets/花_03.jpg" alt="Smiley face">
    <img src="../../assets/花_03.jpg" alt="Smiley face">
    <img src="../../assets/花_03.jpg" alt="Smiley face">
    </div>
  </div>
  </div>

  <div class="s2">
    <van-button @click="agree" color='#ee2d16' round type="info">满意</van-button>
    <van-button @click="disagree" color='#ee2d16' round type="info">不满意</van-button>
  </div>
  <div>
    <van-dialog
  v-model="show"
  title="实际支付金额"
  show-button
    >
<div class="shu"><input></input></div>
</van-dialog>



<van-dialog
  v-model="show1"
  title="反馈"
  show-button
    >
<div class="shu1"><input></input></div>
</van-dialog>
  </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        show:false,
        show1:false,
      }
    },
  methods: {
    agree(){
      this.show=true;
    },
    disagree(){
      this.show1=true;
    }
  },
  mounted() {


  }
}

</script>
<style>
  .topbar{
    background-color: #eb2312;
  }
  .van-nav-bar__title{
    color: #fff;
  }
  .van-icon-arrow-left:before{
    color:#fff;
  }
  .s{
    height:667px;
    background-color:#e6e6e6;
  }
  .s1 h1{
    background-color:#fff;
    text-align:center;
    font-size: 20px;
    padding: 6px;
  }
  .s1_content {
    margin: 10px 15px;
    background-color: #ccc;
    border-radius:6px;
  }
  .s1_content p {
    padding-top:15px;
    padding-left:10px;
    text-indent:2em;
    line-height:30px;
  }
  .s11 {
    height: 240px;
    background-color: #fff;
  }
  .s1 img{
    width:30%;
    margin: 10px 4px;
    float:left;
  }
.s2 {
  margin:0px 30px;
  margin-top:100px;

}
  .s2 button:nth-child(1){
    width:100px;
    font-size:16px;
    float:left;
  }
  .s2 button:nth-child(2){
    width:100px;
    font-size:16px;
    float:right;
  }
  .van-dialog {
    width:200px;
    height:180px;
  }
  .van-dialog .van-button {
    width:120px;
    height:35px;
    line-height:35px;
    background-color:red;
    color: #fff;
    margin: 20px 40px;
    border-radius: 50px;
  }
  .shu {
    margin-left:30px;
  }
  .shu input{
    width:80%;
    height: 50px;
    border:none;
    background-color: #f2f1f1;
  }
  .shu1 {
    margin-left:10px;
  }
  .shu1 input{
    width:95%;
    height: 70px;
    border:none;
    background-color: #f2f1f1;
  }
</style>
