<template>
  <div class="viewBox">
    <mt-header class="myHeader" title="我的">
      <div slot="left">
        <img class="back" src="../../assets/icon/back.png" alt="" @click="back()">
      </div>
    </mt-header>
    <div class="headBox">
      <img class="userHead" src="../../assets/head.png" alt="">
      <p class="userName f_big f_b">用户名</p>
      <p class="f_middle">职务</p>
    </div>
    <div class="secondBox row">
      <div>
        <p class="f_middle">123</p>
        <p class="f_small">学习积分</p>
      </div>
      <div>
        <p class="f_middle">10小时0分0秒</p>
        <p class="f_small">学习时长</p>
      </div>
      <div>
        <p class="f_middle">123</p>
        <p class="f_small">本月排名</p>
      </div>
    </div>
    <div class="userInfoList row" v-for="(item, index) in userInfoList" :key="index">
      <img class="listIcon" :src="item.icon" alt="">
      <div class="row spb">
        <p class="f_middle">{{item.name}}</p>
        <img src="../../assets/icon/arrow_right.png" alt="">
      </div>
    </div>
    <div class="signOut">
      退出
    </div>
  </div>
</template>
<script>
export default {
  name: 'Usercenter',
  metaInfo: {
    title: '我的'
  },
  data () {
    return {
      userInfoList: [
        {icon: '../static/icon/message.png', name: '我的消息', link: ''},
        {icon: '../static/icon/dynamic_s.png', name: '我的动态', link: ''},
        {icon: '../static/icon/collection.png', name: '我的收藏', link: ''},
        {icon: '../static/icon/suggest_s.png', name: '反馈意见', link: ''},
        {icon: '../static/icon/book.png', name: '通讯录', link: ''},
        {icon: '../static/icon/password.png', name: '修改密码', link: ''},
        {icon: '../static/icon/data.png', name: '个人资料', link: ''},
        {icon: '../static/icon/version.png', name: '查看版本号', link: ''}
      ]
    }
  },
  mounted () {},
  methods: {
    back () {
      this.$router.back(-1)
    }
  }
}
</script>
<style lang="less" scoped>
.viewBox{
  padding-bottom: 0;
}
.headBox{
  background: #fff;
  overflow: hidden;
  padding-bottom: 10px;
  text-align: center;
  p{
    margin: 3px;
  }
}
.userHead{
  display: block;
  width: 50px;
  height: 50px;
  margin: 20px auto;
}
.secondBox{
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
  border-top: 1px solid #f0f0f0;
  margin-bottom: 10px;
  div{
    border-right: 1px solid #f0f0f0;
    padding: 10px;
    flex-grow: 1;
    p{
      line-height: 22px;
      margin: 3px;
      text-align: center;
    }
  }
  div:last-child{
    border-right: none;
  }
}
.userInfoList{
  background: #fff;
  div{
    border-bottom: 1px solid #f0f0f0;
    flex-grow: 1;
    p{
      line-height: 20px;
      margin: 15px 0;
    }
    img{
      height: 16px;
      display: block;
      margin: 17px 10px;
    }
  }
}
.listIcon{
  width: 26px;
  height: 26px;
  margin: 11px;
  // background: #e50;
}
.signOut{
  width: calc(100% - 20px);
  margin: 10px;
  background: #fff;
  text-align: center;
  padding:15px;
  color: #e51c23;
}
</style>
