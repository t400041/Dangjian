<template>
<div class="viewBox">
  <XHeader class="myHeader" title="会议详情" :left-options="{'backText':''}"></XHeader>
  <div class="paddingBox">
    <p class="f_big title f_b">
      会议标题
    </p>
  </div>
  <div class="paddingBox">
    <div class="row als spb">
      <span class="f_middle f_b">参会人</span>
      <span class="f_samll">
        {{meetingMember.daiding}}待定，{{meetingMember.join}}参加，{{meetingMember.qingjia}}请假
      </span>
    </div>
    <div class="row">
      <div class="memberList column als" v-for="(item, index) in meetingMember.memberList" :key="index">
        <img :src="item.head" alt="">
        <p class="f_small">
          {{item.name}}
        </p>
        <div class="myBage blue" v-if="item.status == '0'">已报名</div>
        <div class="myBage green" v-if="item.status == '1'">已签到</div>
        <div class="myBage orange" v-if="item.status == '2'">已请假</div>
        <div class="myBage red" v-if="item.status == '3'">待定</div>
        <div class="myBage gray" v-if="item.status == '4'">缺席</div>
      </div>
      <div class="memberList column als">
        <img src="../../assets/icon/more_member.png" alt="">
        <p class="f_small" style="color: #e51c23">
          更多
        </p>
      </div>
    </div>
  </div>
  <div class="paddingBox">
    <p class="f_middle f_b">会议签到</p>
    <p class="f_middle">签到方式</p>
    <p class="f_middle">签到负责人</p>
  </div>
  <div class="paddingBox">
    <p class="f_middle f_b">会议纪要</p>
    <div class="downloadBox">

    </div>
  </div>
  <div class="todoBox row als spa">
    <div class="row als spc btn">
      <img src="../../assets/icon/leave.png" alt="">
      <span class="f_middle color_gray">请假</span>
    </div>
    <div class="shortL"></div>
    <div class="row als spc btn">
      <img src="../../assets/icon/join.png" alt="">
      <span class="f_middle color_gray">签到</span>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'MeetingDetail',
  metaInfo: {
    title: '会议详情'
  },
  data () {
    return {
      meetingDetail: {
        tipe: '支部会议',
        address: '三楼会堂',
        content: '议题内容',
        require: '要求内容'
      },
      meetingMember: {
        daiding: '12',
        join: '24',
        qingjia: '3',
        memberList: [
          {name: '张三', head: '../static/icon/head.png', status: '0'},
          {name: '张三', head: '../static/icon/head.png', status: '2'},
          {name: '王麻子', head: '../static/icon/head.png', status: '1'},
          {name: '张三', head: '../static/icon/head.png', status: '3'},
          {name: '张三', head: '../static/icon/head.png', status: '4'}
        ]
      }
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
.paddingBox{
  padding: 15px;
  background-color: #fff;
  margin-bottom: 10px;
}
p{
  margin: 4px 0;
}
.myBage{
  width: 43px;
  text-align: center;
  border-width: 1px;
  border-style: solid;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  font-size: 12px;
}
.myBage.blue{
  border-color: #00a0e9;
  color: #00a0e9;
}
.myBage.green{
  border-color: #02ca1d;
  color: #02ca1d;
}
.myBage.orange{
  border-color: #f18100;
  color: #f18100;
}
.myBage.red{
  border-color: #e51c23;
  color: #e51c23;
}
.myBage.gray{
  border-color: #666;
  color: #666;
}
.memberList{
    padding: 12px 4px;
    flex-grow: 1;
    img{
      width: 35px;
      display: block;
    }
  }
.todoBox{
  width: 100%;
  background: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 1px solid #f0f0f0;
  .btn{
    width: 49%;
    padding: 10px;
    img{
      width: 24px;
      margin-right: 8px;
    }
  }
}
</style>
