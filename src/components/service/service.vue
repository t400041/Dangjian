<template>
  <div class="viewBox">
    <XHeader class="myHeader" title="服务" :left-options="{'showBack':false}" >
      <div slot="right" class="rightSlot">
        <img class="headImg" src="" alt="">
      </div>
    </XHeader>
    <div class="linkCell row spb">
      <div>社区服务</div>
      <div class="row">
        <p>更多</p>
        <img class="arrow_right" src="../../assets/icon/arrow_right.png" alt="">
      </div>
    </div>
    <div class="serviceBox row">
      <div class="serviceItem column spc" v-for="(item, index) in serviceList" :key="index" :style="{backgroundImage: 'url('+item.src+')'}">
        <p>{{item.name}}</p>
      </div>
    </div>
    <div class="linkCell row spb">
      <div>心愿墙（120）</div>
      <div class="row">
        <p>更多</p>
        <img class="arrow_right" src="../../assets/icon/arrow_right.png" alt="">
      </div>
    </div>
    <div class="wallBox">
      <div class="wallItem row" v-for="(item, index) in wallList" :key="index">
        <img src="../../assets/icon/wish.png" alt="">
        <div>
          <p class="f_middle f_b">{{item.detail}}</p>
          <p class="f_small"><span class="color_gray">悬赏</span><span class="color_red">{{item.score}}分</span></p>
        </div>
      </div>
    </div>
    <div class="linkCell row spb">
      <div>服务项目（24）</div>
      <div class="row">
        <p>更多</p>
        <img class="arrow_right" src="../../assets/icon/arrow_right.png" alt="">
      </div>
    </div>
    <div class="projectBox">
      <div class="projectItem row" v-for="(item, index) in projectList" :key="index">
        <img :src="item.img" alt="">
        <div class="projectDetail">
          <p class="f_big">{{item.name}}</p>
          <p class="f_small"><span class="color_gray">报名人数：</span><span class="color_red">{{item.num}}名</span></p>
          <p class="f_small"><span class="color_gray">地址：</span>{{item.add}}</p>
        </div>
        <div class="btnBox">
          <XButton text="报名" type="warn" mini v-if="item.state == 1"></XButton>
          <XButton text="已满" type="warn" mini v-if="item.state == 2" disabled></XButton>
        </div>
      </div>
    </div>
    <div class="listBox row spc">
      <div class="findBox column spc" v-for="(item, index) in findList" :key="index" :style="{backgroundImage: 'url('+item.src+')'}">
        {{item.name}}
      </div>
      <!-- <div class="findBox zyz">
        找志愿者
      </div>
      <div class="findBox join">
        <p>加入</p>
        <p>志愿者</p>
      </div>
      <div class="findBox feel">
        发布心情
      </div>
      <div class="findBox addporject">
        发起项目
      </div> -->
    </div>
    <TabNav :selected="selected"></TabNav>
  </div>
</template>
<script>
import TabNav from '../../components/common/tab-nav'
import { XButton } from 'vux'
export default {
  name: 'User',
  metaInfo: {
    title: '服务'
  },
  components: {
    TabNav,
    XButton
  },
  data () {
    return {
      selected: '服务',
      serviceList: [
        {name: '政治服务', src: '../static/icon/bg_orange.png'},
        {name: '长者服务', src: '../static/icon/bg_blue.png'},
        {name: '物业服务', src: '../static/icon/bg_green.png'},
        {name: '免费服务', src: '../static/icon/bg_red.png'}
      ],
      wallList: [
        {detail: '心愿1', score: '20'},
        {detail: '心愿2', score: '20'},
        {detail: '心愿3', score: '20'}
      ],
      projectList: [
        {name: '项目名1', img: '../static/icon/phtoo.png', num: '20', add: '地址', state: '1'},
        {name: '项目名2', img: '../static/icon/phtoo.png', num: '20', add: '地址', state: '1'},
        {name: '项目名3', img: '../static/icon/phtoo.png', num: '20', add: '地址', state: '2'}
      ],
      findList: [
        {name: '找党员', src: '../static/icon/bg_partymember.png'},
        {name: '找志愿者', src: '../static/icon/bg_findvolunteer.png'},
        {name: '加入志愿者', src: '../static/icon/bg_intovolunteer.png'},
        {name: '发布心情', src: '../static/icon/release.png'},
        {name: '发起项目', src: '../static/icon/project.png'}
      ]
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
}
.rightSlot{
  position: absolute;
  top: -8px;
  right: 0;
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
  p{
    margin: 0;
  }
}
.arrow_right{
  height: 14px;
  display: inline-block;
  margin: 0 5px;
}
.serviceBox{
  padding: 15px;
  background: #fff;
}
@gap:2px;
.serviceItem{
  width: calc(25% - @gap);
  margin: 0 @gap;
  height: 15.5vw;
  background-size: 100% 100%;
  p {
    text-align: center;
    margin: 0;
    color: #fff;
    font-size: 14px;
  }
}
.wallBox ,.projectBox{
  background: #fff;
  padding-left: 10px;
}
.wallItem{
  padding: 10px 10px 10px 0;
  border-top: 1px solid #f4f4f4;
  p{
    text-align: left;
    margin: 2px 0;
  }
  img{
    display: block;
    width: 12vw;
    height: 12vw;
    margin-right: 10px
  }
}
.projectItem{
  padding: 10px 10px 10px 0;
  border-top: 1px solid #f4f4f4;
  img{
    display: block;
    width: 18vw;
    height: 18vw;
    margin-right: 10px;
  }
  p{
    text-align: left;
    margin: 2px 0;
  }

  .projectDetail{
    width: calc(80% - 63px);
  }
}
.listBox{
  background-color: #fff;
  padding:10px;
  margin-top: 10px;
}
.findBox{
  margin: 0 2px;
  height: 14vw;
  background-size: 100% 100%;
  flex-grow: 1;
  color: #fff;
  font-size: 13px;
  width: 19vw;
  text-align: center;
}
.weui-btn_mini{
  padding:0 12px;
}
</style>
