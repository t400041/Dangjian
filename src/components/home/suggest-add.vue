<template>
<div class="viewBox">
  <XHeader class="myHeader" title="新建议" :left-options="{'backText':''}"></XHeader>
  <div class="linkCell row spb">
    <div>欢迎使用在线留言</div>
  </div>
  <div class="feildBox">
    <group>
      <x-input title="姓名" label-width="90px" v-model="username" type="text" placeholder="请输入姓名"></x-input>
      <x-input title="电话" label-width="90px" v-model="phone" type="tel" placeholder="请输入电话"></x-input>
      <x-textarea title="建议" label-width="90px" :value="suggest" :max="200" placeholder="请留下您的建议" :rows="4"></x-textarea>
      <x-input title="验证码" label-width="90px" v-model="captcha">
        <div slot="right">
          <img  src="../../assets/head.png" alt="">
        </div>
      </x-input>
    </group>
  </div>
  <XButton class="submit" text="提交" type="warn"></XButton>
</div>
</template>
<script>
import { XInput, XTextarea, XButton } from 'vux'
export default {
  name: 'SuggestAdd',
  metaInfo: {
    title: '建言献策'
  },
  components: {
    XInput,
    XTextarea,
    XButton
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
.feildBox{
  border-bottom: 1px solid #f0f0f0;
  background-color: #fff;
}
</style>
