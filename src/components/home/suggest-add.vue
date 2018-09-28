<template>
<div class="viewBox">
  <mt-header class="myHeader" title="新建议">
    <div slot="left">
      <img class="back" src="../../assets/icon/back.png" alt="" @click="back()">
    </div>
  </mt-header>
  <div class="linkCell row spb">
    <div>欢迎使用在线留言</div>
  </div>
  <div class="feildBox">
    <mt-field class="myFeild" label="姓名" placeholder="请输入姓名" v-model="username"></mt-field>
    <mt-field class="myFeild" label="电话" placeholder="请输入电话" type="number" v-model="phone"></mt-field>
    <mt-field class="myFeild" label="建议" placeholder="请留下您的建议" type="textarea" rows="4" v-modal="suggest"></mt-field>
    <mt-field class="myFeild" label="验证码" v-model="captcha">
      <img src="../../assets/logo.png" height="45px" width="100px">
    </mt-field>
  </div>
  <mt-button class="submit" type="danger" size="large">提交</mt-button>
</div>
</template>
<script>
export default {
  name: 'SuggestAdd',
  metaInfo: {
    title: '建言献策'
  },
  data () {
    return {
      username: '',
      phone: '',
      suggest: '',
      captcha: ''
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
.submit{
  margin: 15px;
  width: calc(100% - 30px);
}
.myFeild{
  border-bottom: 1px solid #f0f0f0;
}
</style>
