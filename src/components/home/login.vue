<template>
<div class="bgBox column spc">
  <div class="formBox loginBox" v-if="status == '0'">
    <div class="formItem row">
      <input type="tel" name="tel" id="tel1" placeholder="请输入手机号" v-model="tel1">
    </div>
    <div class="formItem row">
      <input type="password" name="pass" id="password1" placeholder="请输入密码" v-model="password1">
      <img src="" alt="">
    </div>
    <div class="formItem btn" @click="loginSubmit">
      登录
    </div>
    <div class="row spb">
      <p class="p_middle" @click="goSign">没有账号，去注册</p>
      <p class="p_middle">忘记密码</p>
    </div>
  </div>
  <div class="formBox signBOx" v-if="status == '1'">
    <div class="formItem row">
      <input type="tel" name="tel" id="tel1" placeholder="请输入手机号" v-model="tel2">
    </div>
    <div class="formItem row">
      <input type="text" name="name" id="name" placeholder="请输入您的姓名" v-model="username">
    </div>
    <div class="formItem row">
      <input type="password"  id="password2" placeholder="请输入密码" v-model="password2">
      <img src="" alt="">
    </div>
    <div class="formItem row">
      <input type="password"  id="password3" placeholder="请再次输入密码" v-model="password3">
      <img src="" alt="">
    </div>
    <div class="formItem btn">
      注册
    </div>
    <div>
      <p class="p_middle goSign" @click="goLogin">已有账号，去登录</p>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      status: '0',
      myTitle: '',
      tel1: '',
      tel2: '',
      password1: '',
      password2: '',
      password3: '',
      username: ''
    }
  },
  metaInfo () {
    return {
      title: this.myTitle
    }
  },
  mounted () {
    if (this.status === '0') {
      this.myTitle = '登录'
    } else {
      this.myTitle = '注册'
    }
  },
  methods: {
    goSign () {
      this.status = '1'
      this.myTitle = '注册'
    },
    goLogin () {
      this.status = '0'
      this.myTitle = '登录'
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
</style>
