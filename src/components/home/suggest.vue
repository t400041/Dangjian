<template>
<div class="viewBox">
  <mt-header class="myHeader" title="建言献策">
    <div slot="left">
      <img class="back" src="../../assets/icon/back.png" alt="" @click="back()">
    </div>
    <div slot="right">
      <img class="addSuggest" src="../../assets/icon/add_suggest.png" alt="" @click="addSuggest()">
    </div>
  </mt-header>
  <div class="linkCell row spb">
    <div>历史建言献策精选</div>
  </div>
  <div class="suggestList" v-for="(item, index) in suggestList" :key="index">
    <p class="row als"><span class="ask ">问</span><span class="f_big f_b">{{item.suggest}}</span></p>
    <p><span class="answer">答</span><span class="f_small color_gray">{{item.answer}}</span></p>
  </div>
</div>
</template>
<script>
export default {
  name: 'Suggest',
  metaInfo: {
    title: '建言献策'
  },
  data () {
    return {
      suggestList: [
        {suggest: '问卷名称', answer: '1234'},
        {suggest: '问卷名称', answer: '1234'},
        {suggest: '问卷名称', answer: '1234'}
      ]
    }
  },
  mounted () {},
  methods: {
    back () {
      this.$router.back(-1)
    },
    addSuggest () {
      this.$router.push({name: 'SuggestAdd'})
    }
  }
}
</script>
<style lang="less" scoped>
.linkCell{
  background: transparent;
  margin-top: 0;
  padding: 10px 0;
  font-size: 15px;
  line-height: 18px;
  color: #797979;
  div:first-child{
    border-left: 3px solid #e51c23;
    padding-left: 8px;
  }
}
.suggestList{
  background-color: #fff;
  padding:12px;
  border-bottom: 1px solid #f0f0f0;
  p{
    margin: 4px 0;
    text-align: left;
  }
}
.ask, .answer{
  width: 22px;
  height: 22px;
  line-height: 22px;
  display: inline-block;
  border-radius: 3px;
  color: #fff;
  font-size: 13px;
  text-align: center;
  margin-right: 10px;
}
.ask{
  background-color: #e51c23;
}
.answer{
  background-color: #00a0e9;
}
.addSuggest{
  width: 35px;
  margin-right: 10px;
}
</style>
