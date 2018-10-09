<template>
<div class="bgBox column spc">
  <div class="formBox signBOx">
    <div class="formItem row">
      <input type="tel" name="tel" id="tel1" placeholder="请输入手机号" v-model="tel">
    </div>
    <div class="formItem row spb als">
      <input type="texy" class="codeinput" name="code" id="code" placeholder="请输短信验证码" v-model="code">
      <div class="sendBtn" v-if="sendstatus == true" @click="codeSend()">
        发送验证码
      </div>
      <div class="sendBtn disabled" v-if="sendstatus == false">
        {{sendbtn}}
      </div>
    </div>
    <div class="formItem btn" v-if="status == '0'">
      下一步
    </div>
    <div class="next" v-if="status == '1'">
      <div class="formItem row">
        <input type="password"  id="password1" placeholder="请输入密码" v-model="password1">
        <img src="" alt="">
      </div>
      <div class="formItem row">
        <input type="password"  id="password2" placeholder="请再次输入密码" v-model="password2">
        <img src="" alt="">
      </div>
      <div class="formItem btn">
        确认修改
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'ChangePassword',
  data () {
    return {
      status: '0',
      tel: '',
      code: '',
      sendstatus: true, // 发送验证码按钮状态
      sendbtn: '',
      password1: '',
      password2: ''
    }
  },
  metaInfo () {
    return {
      title: '修改密码'
    }
  },
  mounted () {

  },
  methods: {
    codeSend () {
      this.sendstatus = false
      this.sendbtn = '60秒后重试'
      let _this = this
      let i = 60
      this.timeloop = setInterval(() => {
        i--
        _this.sendbtn = i + '秒后重试'
        if (i === 0) {
          clearInterval(this.timeloop)
          this.sendstatus = true
        }
      }, 1000)
    },
    loginSubmit () {
      console.log(this.tel1)
    }
  }
}
</script>
<style lang="less" scoped>
.bgBox{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  background-color: rgb(247, 194, 114);
}
.formBox{
  padding: 30px;
  position: relative;
}
.goSign{
  text-align: center;
}
.codeinput{
  width: calc(100% - 140px);
}
.formItem{
  width: 100%;
  height: 50px;
  border-radius: 4px;
  background: #fff;
  margin-bottom: 15px;
  input{
    border:none;
    outline: none !important;
    padding:15px;
    background: transparent;
    font-size: 16px;
  }
}
.formItem.btn{
  background-color: #e51c23;
  text-align: center;
  color: #fff;
  text-align: center;
  line-height: 50px;
}
.sendBtn {
  padding:6px;
  font-size: 14px;
  color: #e51c23;
  border: 1px solid #e51c23;
  margin-right: 15px;
}
</style>
