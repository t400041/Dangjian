<template>
<div class="courseBox">
  <ul>
    <li class="courseList row" v-for="(item, index) in courseList" :key="index">
      <div class="courseContent column spb">
        <p class="title">{{item.title}}</p>
        <div class="row spb courseInfo">
          <p><img class="comment" src="../../assets/icon/love.png" alt="">{{item.like}}</p>
          <p><img class="comment" src="../../assets/icon/watch.png" alt="">{{item.createTime}}</p>
          <p class="color_red">{{item.mark}}</p>
        </div>
      </div>
      <div class="courseImg">
        <img :src="item.img" alt="">
      </div>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  name: 'CourseList',
  data () {
    return {
      msg: ''
    }
  },
  props: {
    courseList: Array
  },
  mounted () {

  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
.courseBox {
  background-color: #fff;
  padding-left: 12px;
  .courseList {
    border-top: 1px solid #f4f4f4;
    padding: 12px 12px 12px 0;
    p {
      margin: 5px 0;
      text-align: left;
    }
    .title {
      font-weight: 600;
    }
    .courseContent {
      width: 75%;
      padding-right: 10px;
    }
    .courseImg {
      width: 25%;
      img {
        width: 100%;
      }
    }
  }
  .courseInfo {
    font-size: 12px;
    color: #797979;
  }
  .comment{
    height: 13px;
    margin-right: 3px;
  }
}
</style>
