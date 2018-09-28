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
        <mt-tab-item id="3">党建动态</mt-tab-item>
        <mt-tab-item id="3">领导</mt-tab-item>
      </mt-navbar>
    </div>
    <!-- tab-container -->
    <mt-tab-container v-model="act">
      <mt-tab-container-item id="1">
        111
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
  <TabNav :selected="selected"></TabNav>
  </div>
</template>
<script>
import TabNav from '../../components/common/tab-nav'
export default {
  name: 'User',
  metaInfo: {
    title: '党建动态'
  },
  components: {
    TabNav
  },
  data () {
    return {
      selected: '交流',
      act: '1'
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
</style>
