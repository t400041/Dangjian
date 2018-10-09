<template>
  <div class="viewBox">
    <XHeader class="myHeader" title="党建动态" :left-options="{'backText':''}"></XHeader>
    <div class="trandsNav">
      <Mytab :tabList="tabList" @tabchange="tabchange"></Mytab>
    </div>
    <div class="newsBox" v-if="act == 0">
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
    <div class="newsBox" v-if="act == 1">111</div>
    <div class="newsBox" v-if="act == 2">222</div>
    <div class="newsBox" v-if="act == 3">333</div>
    <div class="newsBox" v-if="act == 4">444</div>
  </div>
</template>
<script>
import Mytab from '../../components/common/my-tab'
export default {
  name: 'Trends',
  metaInfo: {
    title: '党建动态'
  },
  components: {
    Mytab
  },
  data () {
    return {
      act: 0,
      imgList: [
        {src: '../static/icon/banner.png'},
        {src: '../static/icon/banner.png'}
      ],
      tabList: [
        {name: '全部'},
        {name: '图片新闻'},
        {name: '学习十九大'},
        {name: '党建动态'},
        {name: '领导讲话'}
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
    },
    tabchange (act) {
      this.act = act
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
.trandsNav{
  width: 100%;
  background: #fff;
  padding: 0 10px;
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
