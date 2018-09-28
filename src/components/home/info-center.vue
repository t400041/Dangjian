<template>
  <div class="viewBox">
    <mt-header class="myHeader" title="消息">
      <div slot="left">
        <img class="back" src="../../assets/icon/back.png" alt="" @click="back()">
      </div>
    </mt-header>
    <div class="infoBox">
      <div class="infoItem row">
        <div class="infoIcon">
          <img src="../../assets/icon/suggest.png" alt="">
          <mt-badge class="mybadge" type="error" size="small">10</mt-badge>
        </div>
        <div>
          <p class="f_big">三会一课</p>
          <p class="f_small color_gray">您有一个会议通知，请注意查看~</p>
        </div>
        <div>
          <p class="f_middle">time</p>
        </div>
      </div>
      <div class="infoItem row">
        <div class="infoIcon">
          <img src="../../assets/icon/suggest.png" alt="">
          <mt-badge class="mybadge" type="error" size="small">5</mt-badge>
        </div>
        <div>
          <p class="f_big">组织活动</p>
          <p class="f_small color_gray">您有一个会议通知，请注意查看~</p>
        </div>
        <div>
          <p class="f_middle">time</p>
        </div>
      </div>
      <div class="infoItem row">
        <div class="infoIcon">
          <img src="../../assets/icon/suggest.png" alt="">
          <mt-badge class="mybadge" type="error" size="small">10</mt-badge>
        </div>
        <div>
          <p class="f_big">心愿认领</p>
          <p class="f_small color_gray">您有一个会议通知，请注意查看~</p>
        </div>
        <div>
          <p class="f_middle">time</p>
        </div>
      </div>
      <div class="infoItem row">
        <div class="infoIcon">
          <img src="../../assets/icon/suggest.png" alt="">
          <mt-badge class="mybadge" type="error" size="small">10</mt-badge>
        </div>
        <div>
          <p class="f_big">在线学习</p>
          <p class="f_small color_gray">您有一个会议通知，请注意查看~</p>
        </div>
        <div>
          <p class="f_middle">time</p>
        </div>
      </div>
      <div class="infoItem row">
        <div class="infoIcon">
          <img src="../../assets/icon/suggest.png" alt="">
          <mt-badge class="mybadge" type="error" size="small">10</mt-badge>
        </div>
        <div>
          <p class="f_big">建言献策</p>
          <p class="f_small color_gray">您有一个会议通知，请注意查看~</p>
        </div>
        <div>
          <p class="f_middle">time</p>
        </div>
      </div>
      <div class="infoItem row">
        <div class="infoIcon">
          <img src="../../assets/icon/suggest.png" alt="">
          <mt-badge class="mybadge" type="error" size="small">10</mt-badge>
        </div>
        <div>
          <p class="f_big">领导信箱</p>
          <p class="f_small color_gray">您有一个会议通知，请注意查看~</p>
        </div>
        <div>
          <p class="f_middle">time</p>
        </div>
      </div>
      <div class="infoItem row">
        <div class="infoIcon">
          <img src="../../assets/icon/suggest.png" alt="">
          <mt-badge class="mybadge" type="error" size="small">10</mt-badge>
        </div>
        <div>
          <p class="f_big">民主评议</p>
          <p class="f_small color_gray">您有一个会议通知，请注意查看~</p>
        </div>
        <div>
          <p class="f_middle">time</p>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'User',
  metaInfo: {
    title: '党建动态'
  },
  data () {
    return {
      selected: '交流',
      act: '1'
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
.mint-navbar .mint-tab-item.is-selected{
  color: #e51c23;
  border-color: #e51c23;
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
  .mybadge{
    position: absolute;
    right: 0;
    top: 0;
    border:1px #fff solid;
  }
}
</style>
