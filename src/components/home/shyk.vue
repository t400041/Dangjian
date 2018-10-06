<template>
  <div class="viewBox">
  <mt-header class="myHeader" title="三会一课">
    <div slot="left">
      <img class="back" src="../../assets/icon/back.png" alt="" @click="back()">
    </div>
  </mt-header>
    <div class="bgBox">
      <img class="userHead" src="../../assets/head.png" alt="">
      <p class="f_miidle" style="text-align: center;">待参加会议></p>
      <div class="meetingBox">
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
        <div class="row spb f_middle">
          <router-link to="MyMeeting" class="meetingBtn column als">
            <img src="../../assets/icon/meeting.png" alt="">
            <p class="f_big">我的会议</p>
          </router-link>
          <div class="meetingBtn column als">
            <img src="../../assets/icon/write.png" alt="">
            <p class="f_big">会议纪要</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SHYK',
  metaInfo: {
    title: '三会一课'
  },
  data () {
    return {
      meetingList: [
        {date1: '2018-10', date2: '01', date3: '星期一', title: '会议标题', time: '09:30-11:30', address: '会议厅'},
        {date1: '2018-10', date2: '01', date3: '星期一', title: '会议标题会议标题会议标题会议标题会议标题', time: '09:30-11:30', address: '会议厅'},
        {date1: '2018-10', date2: '01', date3: '星期一', title: '会议标题', time: '09:30-11:30', address: '会议厅'}
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
.userHead{
  width: 50px;
  display: block;
  position: relative;
  margin: 20px auto;
}
.bgBox{
  background-image: url(../../assets/bgclass.jpg);
  background-size: cover;
  width: 100%;
  height: calc(100% - 50px);
  position: absolute;
  padding: 0 15px;
}
.meetingItem, .meetingBtn{
  background-color: #fff;
  padding:15px;
}
.meetingItem{
  border-bottom: 1px solid #f0f0f0;
}
.meetingBtn{
  margin-top: 4px;
  width: calc(50% - 2px);
  color: #e51c23;
  box-sizing: border-box;
  img{
    width: 45px;
  }
}
.meetingItem:last-child{
  border-bottom: none;
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
</style>
