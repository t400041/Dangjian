<template>
<div class="viewBox">
  <XHeader class="myHeader" title="课程详情" :left-options="{'backText':''}"></XHeader>
  <video src="" class="courseVideo" controls="controls"></video>
  <div class="paddingBox">
    {{coursename}}
  </div>
  <Mytab :tabList="tabList" @tabchange="tabchange"></Mytab>
</div>
</template>
<script>
import Mytab from '../../components/common/my-tab'
export default {
  name: 'CourseDetail',
  metaInfo: {
    title: '课程详情'
  },
  components: {
    Mytab
  },
  data () {
    return {
      act: 0,
      coursename: '课程名称',
      tabList: [
        {name: '目录'},
        {name: '学习心得'},
        {name: '试题'}
      ]
    }
  },
  mounted () {

  },
  methods: {
    back () {
      this.$router.back(-1)
    },
    tabchange (act) {
      this.act = act
    }
  }
}
</script>
<style lang="less" scoped>
.courseVideo{
  width: 100vw;
  height: 56.2vw;
}
.viewBox{
  padding-bottom: 0;
}
.mint-navbar .mint-tab-item.is-selected{
  color: #e51c23;
  border-color: #e51c23;
  margin-bottom: 0;
}
</style>
