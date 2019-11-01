<template>
  <div class="history">
    <!-- 头部 -->
    <van-nav-bar title="发布记录" @click-left="onClickLeft" />
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
        <div class="button" @click="okOder(item.id)">{{off?'确认':'已确认'}}</div>
    </div>-->
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh(-1)">
        <div class="content">
          <div class="history_msg" v-for="(item,index) in list" :key="index">
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
          </div>
          
        </div>
      </van-pull-refresh>
      <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
    </van-list>
  </div>
</template>
<script>
import { memberOrder, merSure } from "../../api/me";
export default {
  data() {
    return {
      off: true,
      param: {
        page: 1,
        userId: this.$store.getters.userinfo.id
      },
      list: [],
      flag_scroll: false,
      loading: false,
      finished: false,
      isLoading: false,
      page: 1
    };
  },
  created() {
      this.requetlist()
  },
  methods: {
    onClickLeft() {},
    requetlist() {
      let data = new FormData();
      for (let key in this.param) {
        data.append(key, this.param[key]);
      }
      memberOrder(data).then(res => {
        console.log(res);
          this.isLoading = false;
        if (res.status === 200 && res.data.code === 1) {
            if(res.data.data.order.length===0){
                this.finished = true;
                this.loading = false;
                this.$toast('没有更多数据')
                return;
            }
          this.list = res.data.data.order;
          this.loading = false;

        }
      });
    },
    //上拉加载
    //异步请求数据 ，我们的项目时封装好的方法，此处只是调用
    onLoad(code) {
     //传递的参数
      this.param.page++;
    this.requetlist()
    },
    okOder(id) {
      let data = new FormData();
      data.append("orderId", id);
      data.append("merId", this.$store.getters.userinfo.id);
      merSure(data).then(res => {
        console.log(res);
      });
    },
    onRefresh() {
      this.finished = false;
      this.page = 1;
      this.requetlist(); //正常的请求数据的方法，数组重新赋值
    }
  }
};
</script>

<style lang="scss">
.history {
  .van-nav-bar {
    background-color: #eb2211;
    position: fixed;
    width: 100%;
       .van-nav-bar__title {
      color: white;
    }
  }
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
}
</style>>

