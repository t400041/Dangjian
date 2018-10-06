<template>
<div class="viewBox">
  <mt-header class="myHeader" title="签到情况">
    <div slot="left">
      <img class="back" src="../../assets/icon/back.png" alt="" @click="back()">
    </div>
  </mt-header>
  <div class="qrCodeBox column als">
    <img class="qrCode" src="" alt="">
    <p class="f_middle f_b">请参会人员扫描二维码签到</p>
  </div>
  <div class="tabBox">
    <mt-navbar class="myNavbar" v-model="act">
      <mt-tab-item id="1">待参加</mt-tab-item>
      <mt-tab-item id="2">已结束</mt-tab-item>
      <mt-tab-item id="3">已结束</mt-tab-item>
    </mt-navbar>
    <mt-tab-container class="chatContainer" v-model="act">
      <mt-tab-container-item id="1">
        <div class="checkList row als" v-for="(item, index) in checkinList" :key="index">
          <img class="head" src="../../assets/head.png" alt="">
          <div class="checkInfo">
            <p class="f_middle">
              {{item.name}}
            </p>
            <p class="row als f_small color_gray">
              <img src="../../assets/icon/code_green.png" alt="">
              <span>
                {{item.scanTime}} {{item.checkTime}}
              </span>
            </p>
            <p class="row als f_small color_gray">
              <img src="../../assets/icon/write_blue.png" alt="">
              <span>
                {{item.scanTime}} {{item.checkTime}}
              </span>
            </p>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</div>
</template>
<script>
export default {
  name: 'Checkin',
  metaInfo: {
    title: '签到情况'
  },
  data () {
    return {
      act: '1',
      checkinList: [
        {head: '', name: '张三', scanTime: '2018-10-6', checkTime: '10:36:12'},
        {head: '', name: '张三', scanTime: '2018-10-6', checkTime: '10:36:12'},
        {head: '', name: '张三', scanTime: '2018-10-6', checkTime: '10:36:12'},
        {head: '', name: '张三', scanTime: '2018-10-6', checkTime: '10:36:12'}
      ]
    }
  },
  mounted () {

  },
  methods: {
    back () {
      this.$router.back(-1)
    }
  }
}
</script>
<style lang="less" scoped>
.viewBox{
  background-color: #fff;
  padding-bottom: 0;
}
.qrCode{
  width: 25vw;
  height: 25vw;
  background-color: aquamarine;
  margin-top: 35px;
}
.checkList{
  padding: 10px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
  .head{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 15px;
    display: block;
  }
  p{
    margin: 3px 0;
  }
  .checkInfo{
    img{
      width: 18px;
      height: 18px;
      margin-right: 10px;
    }
  }
}
.tabBox{
  position: relative;
}
.mint-navbar .mint-tab-item.is-selected{
  color: #e51c23;
  border-color: #e51c23;
  margin-bottom: 0;
}
.myNavbar{
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 150;
  border-bottom: 1px solid #f0f0f0;
  border-top: 1px solid #f0f0f0;
}
</style>
