<template>
<div class="viewBox">
  <mt-header class="myHeader" title="我的会议">
    <div slot="left">
      <img class="back" src="../../assets/icon/back.png" alt="" @click="back()">
    </div>
  </mt-header>
  <div class="meetingBox">
    <mt-navbar class="myNavbar" v-model="act">
      <mt-tab-item id="1">待参加</mt-tab-item>
      <mt-tab-item id="2">已结束</mt-tab-item>
    </mt-navbar>
    <mt-tab-container class="chatContainer" v-model="act">
      <mt-tab-container-item id="1">
        <div class="meetingList">
          <div class="meetingItem row" v-for="(item, index) in meetingList" :key="index">
            <div class="meetngTime">
              <p class="f_small">{{item.date1}}</p>
              <p class="f_big f_b">{{item.date2}}</p>
              <p class="f_small">{{item.date3}}</p>
            </div>
            <div class="meetingContent">
              <div class="meetingTitle f_b">
                {{item.title}}
              </div>
              <div class="row spb f_small">
                <span class="row als"><img src="../../assets/icon/time.png" alt="">{{item.time}}</span>
                <span class="row als"><img src="../../assets/icon/address.png" alt="">{{item.address}}</span>
              </div>
            </div>
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
  name: 'MyMeeting',
  metaInfo: {
    title: '我的会议'
  },
  data () {
    return {
      act: '1',
      meetingList: [
        {date1: '2018-10', date2: '01', date3: '星期一', title: '会议标题', time: '09:30-11:30', address: '会议厅'},
        {date1: '2018-10', date2: '01', date3: '星期一', title: '会议标题会议标题会议标题会议标题会议标题', time: '09:30-11:30', address: '会议厅'},
        {date1: '2018-10', date2: '01', date3: '星期一', title: '会议标题', time: '09:30-11:30', address: '会议厅'}
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
}
.meetingList{
  margin-top: 50px;
}
.meetingItem{
  border-bottom: 1px solid #f0f0f0;
}
.meetingBtn{
  margin-top: 4px;
  width: calc(50% - 2px);
  color: #e51c23;
  img{
    width: 45px;
  }
}
.meetingItem, .meetingBtn{
  background-color: #fff;
  padding:15px;
}
p{
  margin: 5px 0;
}
@leftWidth: 80px;
.meetngTime{
  text-align: right;
  margin-right: 25px;
  width: @leftWidth;
}
.meetingTitle{
  height: 50px;
  line-height: 25px;
  margin-bottom: 4px;
}
.meetingContent{
  width: calc(100% - @leftWidth);
  img{
    width: 16px;
    margin-right: 5px;
  }
}
.mint-navbar .mint-tab-item.is-selected{
  color: #e51c23;
  border-color: #e51c23;
  margin-bottom: 0;
}
.myNavbar{
  width: 100%;
  position: fixed;
  top: 50px;
  left: 0;
  z-index: 150;
  box-shadow: 0 1px 2px 2px rgba(100,100,100, .2);
}
</style>
