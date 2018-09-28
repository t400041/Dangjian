<template>
  <div class="viewBox">
    <mt-header class="myHeader" title="党务管理">
      <div slot="right">
        <img class="headImg" src="" alt="">
      </div>
    </mt-header>
    <mt-swipe class="mySwipe" :auto="4000">
      <mt-swipe-item v-for="(item, index) in imgList" :key="index">
        <img :src="item.src" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <div class="iconList row">
      <div class="iconItem row als" v-for="(item, index) in iconList" :key="index" @click="jump(item.link)">
        <img :src="item.icon" alt="">
        <p>{{item.name}}</p>
      </div>
    </div>
  <TabNav :selected="selected"></TabNav>
  </div>
</template>
<script>
import TabNav from '../../components/common/tab-nav'
export default {
  name: 'User',
  metaInfo: {
    title: '党务管理'
  },
  data () {
    return {
      selected: '党务管理',
      imgList: [
        { src: '../static/icon/mbanner.png' },
        { src: '../static/icon/mbanner2.png' },
        { src: '../static/icon/mbanner3.png' }
      ],
      iconList: [
        {icon: '../static/icon/partymember.png', name: '党员管理', link: 'ManageMember'},
        {icon: '../static/icon/develop.png', name: '党员发展', link: ''},
        {icon: '../static/icon/organizati.png', name: '党组织', link: ''},
        {icon: '../static/icon/class.png', name: '三会一课', link: ''},
        {icon: '../static/icon/activity.png', name: '组织活动', link: ''},
        {icon: '../static/icon/questionnaire.png', name: '问卷调查', link: ''},
        {icon: '../static/icon/suggest.png', name: '建言献策', link: ''},
        {icon: '../static/icon/pay.png', name: '党费缴纳', link: ''},
        {icon: '../static/icon/comment2.png', name: '民主评议', link: ''},
        {icon: '', name: '', link: ''}
      ]
    }
  },
  components: {
    TabNav
  },
  mounted () {

  },
  methods: {
    jump (link) {
      this.$router.push({name: link})
    }
  }
}
</script>
<style lang="less" scoped>
// @import url(../../style/common.less);
.viewBox{
  background: #f4f4f4;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  padding-bottom: 80px;
  position: absolute;
}
.mySwipe {
  width: 100%;
  height: 48vw;
  img{
    width: 100%;
  }
}
.iconList{
  background: #fff;
  flex-wrap: wrap;
  .iconItem{
    border-bottom: 1px solid #f4f4f4;
    width: 50%;
    img{
      width: 25px;
      height: 25px;
      margin: 0 15px;
    }
  }
  .iconItem:nth-child(odd){
    border-right: 1px solid #f4f4f4;
  }
}
</style>
