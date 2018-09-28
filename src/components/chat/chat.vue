<template>
  <div class="viewBox">
    <mt-header class="myHeader" title="交流">
      <div slot="right">
        <img class="headImg" src="" alt="">
      </div>
    </mt-header>
    <mt-navbar class="myNavbar" v-model="act">
      <mt-tab-item id="1">最新</mt-tab-item>
      <mt-tab-item id="2">热门</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container class="chatContainer" v-model="act">
      <mt-tab-container-item id="1">
        <div class="chatList row" v-for="(item, index) in chatList1" :key="index">
          <div>
            <img class="chatuser" src="" alt="">
          </div>
          <div class="chatContent">
            <span class="istop" v-if="item.istop == '1'">顶置</span>
            <p class="f_big">{{item.name}}</p>
            <p class="f_middle">{{item.content}}</p>
            <div class="transmitBox f_small color_gray" v-if="item.transmit != ''">
              <p>{{item.transmit}}</p>
            </div>
            <div class="optionBox row spb f_small color_gray">
              <div class="row als"><img src="../../assets/icon/share.png" alt="">{{item.share}}</div>
              <div class="row als"><img src="../../assets/icon/comment_s.png" alt="">{{item.comment}}</div>
              <div class="row als"><img src="../../assets/icon/good_n.png" alt="">{{item.likeNum}}</div>
            </div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        222
      </mt-tab-container-item>
    </mt-tab-container>
  <TabNav :selected="selected"></TabNav>
  </div>
</template>
<script>
import TabNav from '../../components/common/tab-nav'
export default {
  name: 'User',
  metaInfo: {
    title: '交流'
  },
  components: {
    TabNav
  },
  data () {
    return {
      selected: '交流',
      act: '1',
      chatList1: [
        {img: '', name: '用户名', istop: '1', content: '内容', transmit: '转发内容', share: '120', comment: '200', likeNum: '30'},
        {img: '', name: '用户名', istop: '0', content: '', transmit: '转发内容', share: '120', comment: '200', likeNum: '30'},
        {img: '', name: '用户名', istop: '0', content: '内容', transmit: '', share: '120', comment: '200', likeNum: '30'},
        {img: '', name: '用户名', istop: '1', content: '内容', transmit: '转发内容', share: '120', comment: '200', likeNum: '30'},
        {img: '', name: '用户名', istop: '0', content: '', transmit: '转发内容', share: '120', comment: '200', likeNum: '30'},
        {img: '', name: '用户名', istop: '0', content: '内容', transmit: '', share: '120', comment: '200', likeNum: '30'}

      ],
      chatList2: [

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
.mint-navbar .mint-tab-item.is-selected{
  color: #e51c23;
  border-color: #e51c23;
  margin-bottom: 0;
}
.myNavbar{
  width: 100%;
  position: fixed;
  top: 50px;
  left: 0;
  z-index: 150;
  box-shadow: 0 1px 2px 2px rgba(100,100,100, .2);
}
.chatContainer{
  margin-top: 50px;

}
.chatContent{
  flex-grow: 1;
}
p{
  margin: 2px 0;
}
.chatuser{
  width: 45px;
  height: 45px;
  background-color: #007de4;
  border-radius: 50%;
  margin: 5px;
  display: block;
}
.istop{
  padding: 2px 4px;
  font-size: 12px;
  color: #007de4;
  border:1px solid #007de4;
  display: block;
  width: 35px;
  text-align: center;
  border-radius: 3px;
}
.chatList{
  background-color: #fff;
  border-top: 1px solid #f0f0f0;
  padding: 15px 10px;
}
.transmitBox{
  background: #f4f4f4;
  padding: 10px;
}
.optionBox{
  padding: 10px 0 5px 0;
  img{
    width: 17px;
    height: 17px;
    display: inline-block;
    margin-right: 3px;
  }
}
</style>
