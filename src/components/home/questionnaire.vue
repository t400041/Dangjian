<template>
  <div class="viewBox">
    <mt-header class="myHeader" title="调查问卷">
      <div slot="left">
        <img class="back" src="../../assets/icon/back.png" alt="" @click="back()">
      </div>
    </mt-header>
    <div class="questionList" v-for="(item, index) in questionList" :key="index">
      <p class="f_big f_b">
        {{item.name}}
      </p>
      <div class="row spb f_small color_gray">
        <p>{{item.num}}</p>
        <p>{{item.time}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Questionnaire',
  metaInfo: {
    title: '调查问卷'
  },
  data () {
    return {
      questionList: [
        {name: '问卷名称', num: '1234', time: '2018-9-25'},
        {name: '问卷名称', num: '1234', time: '2018-9-25'},
        {name: '问卷名称', num: '1234', time: '2018-9-25'}
      ]
    }
  },
  mounted () {},
  methods: {
    back () {
      this.$router.back(-1)
    }
  }
}
</script>
<style lang="less" scoped>
.viewBox{
  background: #f4f4f4;
  width: 100%;
  min-height: 100%;
  overflow-y: auto;
  padding-bottom: 80px;
}
.questionList{
  padding: 10px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
  p{
    margin: 3px 0;
    text-align: left;
  }
}
</style>
