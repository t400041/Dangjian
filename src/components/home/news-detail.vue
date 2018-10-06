<template>
<div class="viewBox">
  <mt-header class="myHeader" title="新闻详情">
    <div slot="left">
      <img class="back" src="../../assets/icon/back.png" alt="" @click="back()">
    </div>
  </mt-header>
  <div class="titleBox">
    <h2 class="f_big">
      {{newsInfo.title}}
    </h2>
    <p class="f_small color_gray">
      {{newsInfo.time}} | 阅读量 {{newsInfo.num}}
    </p>
  </div>
  <div class="contentBox" v-html="newsInfo.content"></div>
</div>

</template>
<script>
export default {
  name: 'NewsDetail',
  metaInfo: {
    title: '新闻详情'
  },
  data () {
    return {
      newsInfo: {
        title: '新闻标题',
        time: '2018-10-6',
        num: '12345',
        content: '<p>新闻内容</p>'
      }
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
.viewBox{
  background-color: #fff;
}
.titleBox, .contentBox{
  padding: 15px;
  p{
    margin: 3px 0;
  }
}
</style>
