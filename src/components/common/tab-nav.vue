<template>
<div>
  <div class="tabNav row">
    <div class="tabItem column spc als" @click="tabChange('Home')">
      <img src="../../assets/icon/home_p.png" v-if="selected == '首页'">
      <img src="../../assets/icon/home_n.png" v-else>
      <p class="color_red" v-if="selected == '首页'">首页</p>
      <p v-else>首页</p>
    </div>
    <div class="tabItem column spc als" @click="tabChange('Manage')">
      <img src="../../assets/icon/manage_p.png" v-if="selected == '党务管理'">
      <img src="../../assets/icon/manage_n.png" v-else>
      <p class="color_red" v-if="selected == '党务管理'">党务管理</p>
      <p v-else>党务管理</p>
    </div>
    <div class="tabItem column spc als" @click="tabChange('Chat')">
      <img src="../../assets/icon/chat_p.png" v-if="selected == '交流'">
      <img src="../../assets/icon/chat_n.png" v-else>
      <p class="color_red" v-if="selected == '交流'">交流</p>
      <p v-else>交流</p>
    </div>
    <div class="tabItem column spc als" @click="tabChange('Learn')">
      <img src="../../assets/icon/learn_p.png" v-if="selected == '在线学习'">
      <img src="../../assets/icon/learn_n.png" v-else>
      <p class="color_red" v-if="selected == '在线学习'">在线学习</p>
      <p v-else>在线学习</p>
    </div>
    <div class="tabItem column spc als" @click="tabChange('Service')">
      <img src="../../assets/icon/service_p.png" v-if="selected == '服务'">
      <img src="../../assets/icon/service_n.png" v-else>
      <p class="color_red" v-if="selected == '服务'">服务</p>
      <p v-else>服务</p>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'TabNav',
  data () {
    return {
      msg: ''
    }
  },
  props: {
    selected: String
  },
  mounted () {

  },
  methods: {
    tabChange (linkname) {
      this.$router.push({name: linkname})
    }
  }
}
</script>
<style lang="less" scoped>
.tabNav{
  border-top: 1px solid #f0f0f0;
  width: 100%;
  height: 60px;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #fff;
  .tabItem{
    width: 25vw;
    p{
      margin: 2px;
      font-size: 14px;
    }
    img{
      width: 24px;
      height: 24px;
    }
  }
}
</style>
