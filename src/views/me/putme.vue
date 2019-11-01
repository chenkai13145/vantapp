<template>
  <div class="putme">
    <van-nav-bar left-text="返回" title="修改用户信息" @click-left="onClickLeft" />

    <div class="bottom">
      <div class="one">
        <van-uploader :after-read="onRead">
          <div style=" line-height: 60px;">选择头像:</div>
          <img
            :class="[dataT.avatar!==''?'right_cimg':'right_img']"
            :src="dataT.avatar!==''?dataT.avatar:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAZCAYAAAABmx/yAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRThFMEVGNzQxNDYxMUU4OUVGM0IwOTU2QTU1MUMxRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGRThFMEVGODQxNDYxMUU4OUVGM0IwOTU2QTU1MUMxRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZFOEUwRUY1NDE0NjExRTg5RUYzQjA5NTZBNTUxQzFGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkZFOEUwRUY2NDE0NjExRTg5RUYzQjA5NTZBNTUxQzFGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+o7me5AAAAVBJREFUeNqUkz1Lw1AUhm/bgIsi6qIuItUWP7Zk9Sc4SKVQhX6g4CL4P/wBLi5ixQ8Ef4RzRhdLq62gHcTBUUXjc+EELpUmxwsPJ4E85z33Jsn4vr9vjDmE1TAMH4xyZeEWvqATBMGKVsxEUWQQcly/wTjMkfykSTQ8+E2Zhi70aLSsSoyXJL/CBBRp2EpMjJckz0Af7mm0qBJF/qDk4RlayEupo7oLwTZ9h1GYp2E3MdFJ/pGxX+CRRgVVopM8ImNPwQINO4mJA3ueldNu06ioSnSSxyh38qrW1KLTwAqf2X9KR3J5YGyiBv6iM4igYe89ZdI1ZRO2OKwL1akinYi0E0t2eSnSDWUDtpHOVV8OUlOk+qA0NBHJPlhx95QqOuNVh0l/RkU6FmkPqZm0f8+RrihlOyLSZdppewiTVHvk67CrkeLEkkg1pFPt5/crwAAiK6g3ZpwrNwAAAABJRU5ErkJggg=='"
            ref="usersImg"
          />
        </van-uploader>
      </div>
      <div class="one">
        <van-cell>
          <van-field v-model="users.name" label="修改昵称" type="text" placeholder="请输入" clearable />
        </van-cell>
      </div>
      <div class="one">
        <van-cell>
          <van-field
            v-model="users.password"
            label="修改密码"
            type="password"
            placeholder="请输入"
            clearable
          />
        </van-cell>
      </div>
    </div>
    <van-button style="marginTop:20px;" type="primary" @click="okput" size="large">确认修改</van-button>
  </div>
</template>
<script>
import { alterImage, alterMsg } from "../../api/me";
export default {
  name:'putme',
  data() {
    return {
      dataT: {
        avatar: this.$store.getters.userinfo.image
      },
      users: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    // 上传头像
    onRead(file) {
      console.log(this.$store.getters.userinfo);
      let params = new FormData(); //创建form对象
      params.append("upload", file.file); //通过append向form对象添加数据//第一个参数字符串可以填任意命名，第二个根据对象属性来找到file
      params.append("userId", this.$store.getters.userinfo.id);
      //   let config = {
      //     headers: {
      //       //添加请求头
      //       Authorization:
      //         "Bearer " + window.localStorage.getItem("managementToken"),
      //       "Content-Type": "multipart/form-data"
      //     }
      //   };
      alterImage(params).then(res => {
        if (res.status === 200 && res.data.code === 1) {
          localStorage.setItem("user", JSON.stringify(res.data.data));
          this.dataT.avatar = res.data.data.image;
          this.$store.dispatch("login", res.data.data);
          this.$toast(res.data.message);
        }
      });
    },
    //确认修改
    okput() {
      let data = new FormData();
      if (this.users.password !== "") {
        if (this.users.password.length < 5) {
          this.$toast("密码格式不对");
          return false;
        }
      }
      for (let key in this.users) {
        data.append(key, this.users[key]);
      }

      data.append("userId", this.$store.getters.userinfo.id);
      alterMsg(data)
        .then(res => {
          if (this.users.password.length > 4) {
            localStorage.removeItem("user")
            this.$store.dispatch('layout')
            this.$toast("密码修改成功请重新登录");
            this.$router.push("/login");
          }
        })
        .catch(err => {
          this.$toast("修改异常");
        });
    }
  }
};
</script>
<style lang="scss">
.putme {
  .van-uploader {
    width: 100%;
    background-color: white;
    padding: 6px 0px;
    padding: 0 20px;
    font-size: 14px;
    height: 60px;
    color: rgb(44, 62, 80);
    // border-bottom: 1px solid #ebedf0;
    .van-uploader__wrapper{
          padding: 0 14px;
    }
    .right_cimg {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 10px;
      align-self: center;
    }
    .right_img {
      width: 6px;
      height: 10px;
      margin-right: 10px;
      align-self: center;
    }
  }
  .van-uploader__input-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .bottom {
    display: flex;
    flex-direction: column;
    .one {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-bottom: 1px solid #ebedf0;
      .left {
        display: flex;
        align-self: center;
      }
    }
    background-color: white;
  }
}
</style>