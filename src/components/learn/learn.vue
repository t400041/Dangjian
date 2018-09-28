<template>
  <div class="viewBox">
    <mt-header class="myHeader" title="在线学习">
      <div slot="right">
        <img class="headImg" src="" alt="">
      </div>
    </mt-header>
    <mt-swipe class="mySwipe" :auto="4000">
      <mt-swipe-item v-for="(item, index) in imgList" :key="index">
        <img :src="item.src" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <div class="iconBox row">
      <div class="iconItem column spc" v-for="(item, index) in iconList" :key="index">
        <img :src="item.icon" alt="">
        <p>{{item.name}}</p>
      </div>
    </div>
    <div class="linkCell row spb">
      <div>最近课程</div>

    </div>
    <div class="newsBox">
      <ul>
        <li class="newsList row" v-for="(item, index) in learnList" :key="index">
          <div class="newsContent column spb">
            <p class="title">{{item.title}}</p>
            <div class="row spb newInfo">
              <p><img class="comment" src="../../assets/icon/love.png" alt="">{{item.like}}</p>
              <p><img class="comment" src="../../assets/icon/watch.png" alt="">{{item.createTime}}</p>
              <p class="color_red">{{item.mark}}</p>
            </div>
          </div>
          <div class="newsImg">
            <img :src="item.img" alt="">
          </div>
        </li>
      </ul>
    </div>
    <TabNav :selected="selected"></TabNav>
  </div>
</template>
<script>
import TabNav from '../../components/common/tab-nav'
export default {
  name: 'User',
  metaInfo: {
    title: '在线学习'
  },
  components: {
    TabNav
  },
  data () {
    return {
      selected: '在线学习',
      imgList: [
        { src: '../static/icon/banner.png' },
        { src: '../static/icon/banner.png' }
      ],
      iconList: [
        { icon: '../static/icon/education.png', name: '专题教育' },
        { icon: '../static/icon/test2.png', name: '在线考试' },
        { icon: '../static/icon/policy.png', name: '政策法规' },
        { icon: '../static/icon/cleangovernmen.png', name: '反腐倡廉' }
      ],
      learnList: [
        {
          title: '文章标题',
          like: '12345',
          createTime: '12345',
          img: '../static/icon/photo.png',
          mark: '【必修】'
        },
        {
          title: '文章标题',
          like: '12345',
          createTime: '12345',
          img: '../static/icon/photo.png',
          mark: '【必修】'
        },
        {
          title: '文章标题',
          like: '12345',
          createTime: '12345',
          img: '../static/icon/photo.png',
          mark: '【必修】'
        },
        {
          title: '文章标题',
          like: '12345',
          createTime: '12345',
          img: '../static/icon/photo.png',
          mark: '【必修】'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
// @import url(../../style/common.less);
.viewBox {
  background: #f4f4f4;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  padding-bottom: 80px;
}
.mySwipe {
  width: 100%;
  height: 48vw;
  img {
    width: 100%;
  }
}
.comment{
  height: 13px;
  margin-right: 3px;
}
.newsBox {
  background-color: #fff;
  padding-left: 12px;
  .newsList {
    border-top: 1px solid #f4f4f4;
    padding: 12px 12px 12px 0;
    p {
      margin: 5px 0;
      text-align: left;
    }
    .title {
      font-weight: 600;
    }
    .newsContent {
      width: 75%;
      padding-right: 10px;
    }
    .newsImg {
      width: 25%;
      img {
        width: 100%;
      }
    }
  }
  .newInfo {
    font-size: 12px;
    color: #797979;
  }

}
  .iconBox {
    background: #fff;
    margin-top: 10px;
  }
  .iconItem {
    flex-grow: 1;
    height: 20vw;
    p {
      width: 100%;
      margin: 3px 0;
      text-align: center;
      font-size: 14px;
    }
    img {
      display: block;
      width: 27px;
      height: 27px;
      position: relative;
      margin: 0 auto;
    }
  }
</style>
