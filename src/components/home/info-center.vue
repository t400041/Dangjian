<template>
  <div class="viewBox">
    <XHeader class="myHeader" title="消息" :left-options="{'backText':''}"></XHeader>
    <div class="infoBox">
      <div class="infoItem row" v-for="(item, index) in info" :key="index">
        <div class="infoIcon">
          <img :src="item.img" alt="">
          <Badge class="myBadge" :text="item.infonum"></Badge>
        </div>
        <div style="width: calc(100% - 70px)">
          <p class="row als spb">
            <span class="f_big">{{item.name}}</span>
            <span class="f_middle color_gray">{{item.time}}</span>
          </p>
          <p class="f_small color_gray">{{item.news}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Badge } from 'vux'
export default {
  name: 'User',
  metaInfo: {
    title: '消息中心'
  },
  components: {
    Badge
  },
  data () {
    return {
      selected: '交流',
      info: [
        {name: '三会一课', img: '../static/icon/class-info.png', news: '您有一个会议通知，请注意查看~', time: '2018-10-08', infonum: 5},
        {name: '组织活动', img: '../static/icon/class-info.png', news: '您有一个会议通知，请注意查看~', time: '2018-10-08', infonum: 6},
        {name: '心愿认领', img: '../static/icon/wish-info.png', news: '您有一个会议通知，请注意查看~', time: '2018-10-08', infonum: 7},
        {name: '在线学习', img: '../static/icon/learn-info.png', news: '您有一个会议通知，请注意查看~', time: '2018-10-08', infonum: 8},
        {name: '建言献策', img: '../static/icon/comment-info.png', news: '您有一个会议通知，请注意查看~', time: '2018-10-08', infonum: 9},
        {name: '领导信箱', img: '../static/icon/mailbox-info.png', news: '您有一个会议通知，请注意查看~', time: '2018-10-08', infonum: 10},
        {name: '民主评议', img: '../static/icon/evaluate-info.png', news: '您有一个会议通知，请注意查看~', time: '2018-10-08', infonum: 11}
      ]
    }
  },
  mounted () {

  },
  methods: {
    back () {
      this.$router.back(-1)
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
.infoBox{
  background-color: #fff;
  padding: 0 5px;
  width: 100%;
}
.infoItem{
  padding:10px;
  border-bottom: 1px solid #f4f4f4;
  p{
    margin: 0 0 4px 0;
    text-align: left;
  }
}
.infoIcon{
  width: 50px;
  height: 50px;
  margin:0 10px;
  position: relative;
  img{
    width: 100%;
    height: 100%;
    display: block;
  }
  .myBadge{
    position: absolute;
    right: 0;
    top: 0;
    border:1px #fff solid;
  }
}
</style>
