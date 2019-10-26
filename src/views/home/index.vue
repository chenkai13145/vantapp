<template>
  <div class="home">
    <!-- 导航栏 -->
    <van-nav-bar title="首页"  @click-left="onClickLeft" />
    <van-cell @click="showPopup('startime')">
      <van-field
        v-model="fromdata.startime"
        required
        label="入店时间"
        placeholder="请选择"
        @click-right-icon="$toast('question')"
      />
    </van-cell>
    <van-cell @click="showPopup('endtime')">
      <van-field
        v-model="fromdata.endtime"
        required
        label="离店时间"
        placeholder="请选择"
        @click-right-icon="$toast('question')"
      />
    </van-cell>
    <van-cell>
      <van-field
        v-model="fromdata.money"
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
        v-model="fromdata.serchChi"
        rows="2"
        autosize
        label="目的地"
        type="textarea"
        maxlength="50"
        placeholder="请输入"
        show-word-limit
      />
    </van-cell>
  
    <dateFrom @parentFn="parentFn" :showchild="showchild"/>
  </div>
</template>
<script>
import dateFrom from './component/date'
export default {
  components:{
      dateFrom
  },
  data() {
    return {
      currentDate: new Date(),
      showchild:{show:false,type:''},
      fromdata: {
        startime: "",
        endtime: "",
        money: "",
        serchChi: ""
      }
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    showPopup(type) {
      this.showchild.show = true;
      this.showchild.type = type;
    },
    parentFn(e){
      let da=new Date(e)
      let n=da.getFullYear()
      let y=(da.getMonth()+1).toString().padStart(2,'0')
      let r=da.getDate().toString().padStart(2,'0')
      let mis=`${n}-${y}-${r}`
      this.fromdata[this.showchild.type]=mis
      this.showchild.show=false
    }
  }
};
</script>
<style lang="scss">
.home {
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
    .van-nav-bar__title {
      color: #fff !important;
    }
  }
}
</style>