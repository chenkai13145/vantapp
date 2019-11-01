<template>
  <div class="home">
    <!-- 导航栏 -->
    <van-nav-bar :title="$store.getters.type==='shangjia'?'订单列表':'首页'"  @click-left="onClickLeft" />
    <template v-if="$store.getters.type==='huiyuan'">
    <van-cell @click="showPopup('inTime')">
      <van-field
        v-model="fromdata.inTime"
        required
        label="入店时间"
        placeholder="请选择"
        @click-right-icon="$toast('question')"
      />
    </van-cell>
    <van-cell @click="showPopup('outTime')">
      <van-field
        v-model="fromdata.outTime"
        required
        label="离店时间"
        placeholder="请选择"
        @click-right-icon="$toast('question')"
      />
    </van-cell>
    <van-cell>
      <van-field
        v-model="fromdata.expectPrice"
        required
        label="金额"
        type="number"
        placeholder="请输入"
        clearable
      />
    </van-cell>
    <van-cell>
      <van-field
        clearable
        required
        v-model="fromdata.area"
        rows="2"
        autosize
        label="目的地"
        type="textarea"
        maxlength="50"
        placeholder="请输入"
        show-word-limit
      />
    </van-cell>
     <van-button class=".van-button" @click="okOrder" type="info">订单提交</van-button>
    <dateFrom @parentFn="parentFn" :showchild="showchild"/>
    </template>
    <template v-if="$store.getters.type==='shangjia'">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh(-1)">
        <div class="content">
          <!-- <div class="history_msg" v-for="(item,index) in list" :key="index">
            <div>
              <div class="noe">
                <div>名称:</div>
                <div>{{item.phone}}</div>
              </div>
              <div class="noe">
                <div>时间:</div>
                <div>{{item.createTime}}</div>
              </div>
              <div class="noe">
                <div>入店时间:</div>
                <div>{{item.inTime}}</div>
              </div>
              <div class="noe">
                <div>离店时间:</div>
                <div>{{item.outTime}}</div>
              </div>
              <div class="noe">
                <div>目的地:</div>
                <div>{{item.area}}</div>
              </div>
              <div class="noe">
                <div>金额:</div>
                <div>{{item.payPrice}}</div>
              </div>
            </div>
            <div class="button">{{off?'确认':'已确认'}}</div>
          </div> -->
        </div>
      </van-pull-refresh>
      <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
    </van-list>
    </template>
  </div>
</template>
<script>
import dateFrom from './component/date'
import {addOrder,merOrder} from '../../api/home'
export default {
  name:'home',
  components:{
      dateFrom
  },
  data() {
    return {
      currentDate: new Date(),
      showchild:{show:false,type:''},
      fromdata: {
        inTime: "",
        outTime: "",
        expectPrice: "",
        area: "",
        userId:this.$store.getters.userinfo.data
      },
      // ###############
      list: [],
      flag_scroll: false,
      loading: false,
      finished: false,
      isLoading: false,
      page: 1
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    //触发子组件
    showPopup(type) {
      this.showchild.show = true;
      this.showchild.type = type;
    },
    //子组件触发事件
    parentFn(e){
      let da=new Date(e)
      let n=da.getFullYear()
      let y=(da.getMonth()+1).toString().padStart(2,'0')
      let r=da.getDate().toString().padStart(2,'0')
      let mis=`${n}-${y}-${r}`
      this.fromdata[this.showchild.type]=mis
      this.showchild.show=false
    },
    //订单提交
    okOrder(){
      if(this.fromdata.inTime===''||this.fromdata.outTime===''||this.fromdata.expectPrice<0||this.fromdata.area===''){
        this.$toast('格式不正确')
        return false;
      }
        let data = new FormData();
      for (let key in this.fromdata) {
        data.append(key, this.fromdata[key]);
      }
      addOrder(data).then(res=>{
        console.log(res)
        if(res.status===200&&res.data.code===1){
          this.$toast.success(res.data.message)
        }
      })
      .catch(err=>{
         this.$toast(err.data.message)
      })
      
    },
    // ################################################
    // 商家
    requestlist(){
      merOrder().then(res=>{
         console.log(res)
      })
    },
    //上拉加载
    //异步请求数据 ，我们的项目时封装好的方法，此处只是调用
    onLoad(code) {
     //传递的参数
      this.param.page++;
    this.requetlist()
    },
  }
};
</script>
<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
   .content {
    overflow: auto;
    height: calc(100vh - 100px);
    margin-top: 50px;
  }
  .history_msg {
    position: relative;
    display: flex;
    border-radius: 4px;
    flex-direction: row;
    background-color: white;
    padding: 6px;
    margin: 16px;
    color: darkgray;
    .noe {
      display: flex;
      padding: 2px 0;
    }
    .button {
      color: white;
      position: absolute;
      background-color: #eb2211;
      border-radius: 6px;
      right: 18px;
      top: 50%;
      margin-top: -15px;
      width: 60px;
      cursor: pointer;
      line-height: 30px;
      text-align: center;
      height: 30px;
    }
  }
  .van-cell__value--alone {
    background-color: white;
    // border-bottom: 1px solid #ebedf0;
  }
  .van-cell {
    padding: 4px 16px;
  }
  .van-nav-bar {
    text-align: center;
    z-index: 666;
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #fff !important;
    background-color: #eb2211;
    position: fixed;
    width: 100%;
    .van-nav-bar__title {
      color: #fff !important;
    }
  }
  /deep/.van-button{
   width: 300px !important;
   text-align: center;
   align-self: center;
   margin-top: 20px;
  }
}
</style>