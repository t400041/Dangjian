<template>
  <div class="viewBox">
    <XHeader class="myHeader" title="我的学习" :left-options="{'backText':''}"></XHeader>
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
    <Mytab :tabList="tabList" @tabchange="tabchange"></Mytab>
    <div v-if="act == 0">
      <CourseList :courseList="learnList"></CourseList>
    </div>
    <div v-if="act == 1">
      <CourseList :courseList="learnList"></CourseList>
    </div>
    <div v-if="act == 2">
      <CourseList :courseList="learnList"></CourseList>
    </div>
  </div>
</template>
<script>
import CourseList from '../../components/common/course-list'
import Mytab from '../../components/common/my-tab'
export default {
  name: 'Studycenter',
  metaInfo: {
    title: '我的'
  },
  components: {
    CourseList,
    Mytab
  },
  data () {
    return {
      act: 0,
      tabList: [
        {name: '学习中'},
        {name: '已完成'},
        {name: '收藏'}
      ],
      learnList: [
        {
          title: '课程名称',
          like: '12345',
          createTime: '12345',
          img: '../static/icon/photo.png',
          mark: '【必修】'
        },
        {
          title: '课程名称',
          like: '12345',
          createTime: '12345',
          img: '../static/icon/photo.png',
          mark: '【必修】'
        },
        {
          title: '课程名称',
          like: '12345',
          createTime: '12345',
          img: '../static/icon/photo.png',
          mark: '【必修】'
        },
        {
          title: '课程名称',
          like: '12345',
          createTime: '12345',
          img: '../static/icon/photo.png',
          mark: '【必修】'
        }
      ]
    }
  },
  mounted () {},
  methods: {
    back () {
      this.$router.back(-1)
    },
    tabchange (act) {
      this.act = act
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
.viewBox{
  padding-bottom: 0;
}
.mint-navbar .mint-tab-item.is-selected{
  color: #e51c23;
  border-color: #e51c23;
  margin-bottom: 0;
}
</style>
