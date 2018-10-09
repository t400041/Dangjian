<template>
<div class="viewBox">
  <XHeader class="myHeader" title="专题教育" :left-options="{'backText':''}"></XHeader>
  <Mytab :tabList="tabList" @tabchange="tabchange"></Mytab>
  <div class="" v-if="act == 0">
    <CourseList :courseList="learnList"></CourseList>
  </div>
  <div class="" v-if="act == 1">
    <CourseList :courseList="learnList"></CourseList>
  </div>
  <div class="" v-if="act == 2">
    <CourseList :courseList="learnList"></CourseList>
  </div>
  <div class="" v-if="act == 3">
    333
  </div>
</div>
</template>
<script>
import CourseList from '../../components/common/course-list'
import Mytab from '../../components/common/my-tab'
export default {
  name: 'education',
  metaInfo: {
    title: '专题教育'
  },
  components: {
    CourseList,
    Mytab
  },
  data () {
    return {
      act: 0,
      coursename: '课程名称',
      tabList: [
        {name: '全部'},
        {name: '十九大精神'},
        {name: '系列讲话'},
        {name: '两学一做'}
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
  mounted () {

  },
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
.mint-navbar .mint-tab-item.is-selected{
  color: #e51c23;
  border-color: #e51c23;
  margin-bottom: 0;
}
</style>
