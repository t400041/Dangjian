<template>
  <div class="viewBox">
    <mt-header class="myHeader" title="攀西党建">
      <div slot="left">
        <img class="headImg" src="../assets/head.png" alt="" @click="goCenter()">
      </div>
    </mt-header>
    <mt-swipe class="mySwipe" :auto="4000">
      <mt-swipe-item v-for="(item, index) in imgList" :key="index">
        <img :src="item.src" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <div class="infoScroll row spb">
      <div class="row">
        <img class="infoicon" src="../assets/icon/infoicon.png" alt="">
        <div class="infoScrolls" >
          <ul class="infoBox" id="con1" ref="con1" :class="{anim:animate == true}">
            <li v-for="(item, index) in infoList" :key="index">
              {{item.name}}
            </li>
          </ul>
        </div>
      </div>
      <div class="row" @click="goInfo()">
        <p>更多</p>
        <img class="arrow_right" src="../assets/icon/arrow_right.png" alt="">
      </div>
    </div>
    <div class="iconBox row">
      <div class="iconItem column spc" v-for="(item, index) in iconList" :key="index" @click="iconPage(item.link)">
        <img :src="item.icon" alt="">
        <p>{{item.name}}</p>
      </div>
    </div>
    <div class="linkCell row spb">
      <div>党建动态</div>
      <div class="row">
        <p>更多</p>
        <img class="arrow_right" src="../assets/icon/arrow_right.png" alt="">
      </div>
    </div>
    <div class="newsBox">
      <ul>
        <li class="newsList row" v-for="(item, index) in newsList" :key="index">
          <div class="newsContent column spb">
            <p class="title">{{item.title}}</p>
            <div class="row spb newInfo">
              <p><img class="comment" src="../assets/icon/comment.png" alt="">{{item.viewNum}}</p>
              <p>{{item.createTime}}</p>
            </div>
          </div>
          <div class="newsImg">
            <img :src="item.img" alt="">
          </div>
        </li>
      </ul>
    </div>
    <div class="linkCell row spb">
      <div>先锋模范</div>
    </div>
    <div class="scrollBox">
      <div class="scrollX">
        <div  v-for="(item, index) in mumberList" :key="index">
          <img :src="item.src" alt="">
          <p>模范</p>
        </div>
      </div>
    </div>
    <!-- <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="1">
        <img slot="icon" src="../assets/icon/home_p.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="2">
        <img slot="icon" src="../assets/icon/manage_n.png">
        党务管理
      </mt-tab-item>
      <mt-tab-item id="3">
        <img slot="icon" src="../assets/icon/chat_n.png">
        交流
      </mt-tab-item>
      <mt-tab-item id="4">
        <img slot="icon" src="../assets/icon/learn_n.png">
        在线学习
      </mt-tab-item>
      <mt-tab-item id="5">
        <img slot="icon" src="../assets/icon/service_n.png">
        我的
      </mt-tab-item>
    </mt-tabbar> -->
    <!-- <div class="tabNav row">
      <div class="tabItem column spc als">
        <img src="../assets/icon/home_p.png">
        <p>首页</p>
      </div>
      <div class="tabItem column spc als">
        <img src="../assets/icon/manage_n.png">
        <p>党务管理</p>
      </div>
      <div class="tabItem column spc als">
        <img src="../assets/icon/chat_n.png">
        <p>交流</p>
      </div>
      <div class="tabItem column spc als">
        <img src="../assets/icon/learn_n.png">
        <p>在线学习</p>
      </div>
      <div class="tabItem column spc als">
        <img src="../assets/icon/service_n.png">
        <p>我的</p>
      </div>
    </div> -->
    <TabNav :selected="selected"></TabNav>
  </div>
</template>

<script>
import TabNav from '../components/common/tab-nav'
export default {
  name: 'Home',
  metaInfo: {
    title: '首页'
  },
  components: {
    TabNav
  },
  data () {
    return {
      selected: '首页',
      animate: false,
      iconList: [
        {icon: '../static/icon/dynamic.png', name: '党建动态', link: ''},
        {icon: '../static/icon/class.png', name: '三会一课', link: 'SHYK'},
        {icon: '../static/icon/activity.png', name: '活动报名', link: ''},
        {icon: '../static/icon/questionnaire.png', name: '调查问卷', link: 'Questionnaire'},
        {icon: '../static/icon/suggest.png', name: '建言献策', link: 'Suggest'},
        {icon: '../static/icon/test.png', name: '在线考试', link: ''},
        {icon: '../static/icon/mailbox.png', name: '书记信箱', link: ''},
        {icon: '../static/icon/more.png', name: '更多', link: ''}
      ],
      imgList: [
        {src: '../static/icon/banner.png'},
        {src: '../static/icon/banner.png'}
      ],
      newsList: [
        {title: '文章标题', viewNum: '12345', createTime: '2018-9-17 15:41', img: '../static/icon/photo.png'},
        {title: '文章标题', viewNum: '12345', createTime: '2018-9-17 15:41', img: '../static/icon/photo.png'},
        {title: '文章标题', viewNum: '12345', createTime: '2018-9-17 15:41', img: '../static/icon/photo.png'},
        {title: '文章标题', viewNum: '12345', createTime: '2018-9-17 15:41', img: '../static/icon/photo.png'}
      ],
      mumberList: [
        {src: '../static/icon/photo2.png'},
        {src: '../static/icon/photo2.png'},
        {src: '../static/icon/photo2.png'},
        {src: '../static/icon/photo2.png'},
        {src: '../static/icon/photo2.png'},
        {src: '../static/icon/photo2.png'}
      ],
      infoList: [
        {name: '消息1'},
        {name: '消息2'},
        {name: '消息3'}
      ]
    }
  },
  mounted () {
    setInterval(this.scroll, 2000)
  },
  methods: {
    scroll () {
      this.animate = true
      setTimeout(() => {
        this.infoList.push(this.infoList[0])
        this.infoList.shift()
        this.animate = false
      }, 1000)
    },
    goInfo () {
      this.$router.push({name: 'InfoCenter'})
    },
    iconPage (link) {
      this.$router.push({name: link})
    },
    goCenter () {
      this.$router.push({name: 'Usercenter'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
// @import url(../style/common.less);
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
.viewBox{
  background: #f4f4f4;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  padding-bottom: 80px;
}

.headImg{
  width: 35px;
  margin-left: 10px
}
.mySwipe {
  width: 100%;
  height: 48vw;
  img{
    width: 100%;
  }
}
.infoicon{
  height: 16px;
  margin:0 10px;
}
.infoScroll{
  background: #fff;
  padding: 10px 0;
  font-size: 14px;
  line-height: 18px;
}
.infoScrolls{
  height: 18px;
  overflow: hidden;

}
.anim{
  transition: all .8s;
  margin-top: -18px;
}
// .infoBox{
//   // position: relative;

//   li{
//     // line-height: 18px;
//     // text-align: left;
//     // height: 18px;
//   }
// }
.infoScroll , .linkCell{
  line-height: 18px;
  p{
    margin: 0;
  }
}
.arrow_right{
  height: 14px;
  display: inline-block;
  margin: 0 5px;
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
.iconBox{
  flex-wrap: wrap;
  background: #fff;
  margin-top: 10px;
}
.linkCell{
  background-color: #fff;
  margin-top: 12px;
  padding: 10px 0;
  font-size: 14px;
  line-height: 18px;
  color: #797979;
  div:first-child{
    color: #e51c23;
    border-left: 3px solid #e51c23;
    padding-left: 8px;
  }
}

.iconItem{
  width: 25vw;
  height: 20vw;
  p{
    width: 100%;
    margin: 3px 0;
    text-align: center;
    font-size: 14px;
  }
  img{
    display: block;
    width: 27px;
    height: 27px;
    position: relative;
    margin: 0 auto;
  }
}
.scrollBox{
  background: #fff;
  padding-left: 12px;
  width: 100%;
  overflow-x:hidden;
  .scrollX{
    width: auto;
    overflow-x: auto;
    white-space: nowrap;
    p{
      margin: 6px 0;
      font-size: 14px;
    }
    div{
      width: 78px !important;
      margin-right: 10px;
      // float: left;
      display: inline-block;

      img{
        width: 100%;
      }
    }
  }
}
</style>
