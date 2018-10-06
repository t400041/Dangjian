<template>
  <div class="viewBox">
    <mt-header class="myHeader" title="党建动态">
      <div slot="right">
        <img class="headImg" src="" alt="">
      </div>
    </mt-header>
    <div class="trandsNav">
      <mt-navbar v-model="act">
        <mt-tab-item id="1">全部</mt-tab-item>
        <mt-tab-item id="2">图片新闻</mt-tab-item>
        <mt-tab-item id="3">学习十九大</mt-tab-item>
        <mt-tab-item id="4">党建动态</mt-tab-item>
        <mt-tab-item id="5">领导讲话</mt-tab-item>
      </mt-navbar>
    </div>
    <!-- tab-container -->
    <mt-tab-container v-model="act">
      <mt-tab-container-item id="1">
        <mt-swipe class="mySwipe" :auto="4000">
          <mt-swipe-item v-for="(item, index) in imgList" :key="index">
            <img :src="item.src" alt="">
          </mt-swipe-item>
        </mt-swipe>
        <div class="newsBox">
          <ul>
            <li class="newsList row" v-for="(item, index) in newsList" :key="index" @click="goDetail">
              <div class="newsContent column spb">
                <p class="title">{{item.title}}</p>
                <div class="row spb newInfo">
                  <p><img class="comment" src="../../assets/icon/comment.png" alt="">{{item.viewNum}}</p>
                  <p>{{item.createTime}}</p>
                </div>
              </div>
              <div class="newsImg">
                <img :src="item.img" alt="">
              </div>
            </li>
          </ul>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        222
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        111
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        222
      </mt-tab-container-item>
      <mt-tab-container-item id="5">
        222
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
export default {
  name: 'Trends',
  metaInfo: {
    title: '党建动态'
  },
  data () {
    return {
      act: '1',
      imgList: [
        {src: '../static/icon/banner.png'},
        {src: '../static/icon/banner.png'}
      ],
      newsList: [
        {title: '文章标题', viewNum: '12345', createTime: '2018-9-17 15:41', img: '../static/icon/photo.png'},
        {title: '文章标题', viewNum: '12345', createTime: '2018-9-17 15:41', img: '../static/icon/photo.png'},
        {title: '文章标题', viewNum: '12345', createTime: '2018-9-17 15:41', img: '../static/icon/photo.png'},
        {title: '文章标题', viewNum: '12345', createTime: '2018-9-17 15:41', img: '../static/icon/photo.png'}
      ]
    }
  },
  mounted () {

  },
  methods: {
    back () {
      this.$router.back(-1)
    },
    goDetail () {
      this.$router.push({name: 'NewsDetail'})
    }
  }
}
</script>
<style lang="less" scoped>
// @import url(../../style/common.less);
.viewBox{
  padding-bottom: 0;
}
.mint-navbar .mint-tab-item.is-selected{
  color: #e51c23;
  border-color: #e51c23;
  margin-bottom: 0;
}
.mySwipe {
  width: 100%;
  height: 48vw;
  img{
    width: 100%;
  }
}
.newsBox{
  background-color: #fff;
  padding-left: 12px;
  .newsList{
    border-top: 1px solid #f4f4f4;
    padding: 12px 12px 12px 0;
    p {
      margin: 5px 0;
      text-align: left;
    }
    .title{
      font-weight: 600;
    }
    .newsContent{
      width: 75%;
      padding-right: 10px;
    }
    .newsImg{
      width: 25%;
      img{
        width: 100%;
      }
    }
  }
  .newInfo{
    font-size: 12px;
    color: #797979;
  }
}
.comment{
  height: 13px;
  margin-right: 3px;
}
</style>
