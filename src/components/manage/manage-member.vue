<template>
  <div class="viewBox">
    <XHeader class="myHeader" title="党员管理" :left-options="{'backText':''}"></XHeader>
    <Swiper :list="imgList" class="mySwipe" :auto="true" :show-desc-mask="false" dots-position="center" :aspect-ratio="0.48" :loop="true">
    </Swiper>
    <div class="iconBox row">
      <div class="iconItem column spc" v-for="(item, index) in iconList" :key="index">
        <img :src="item.icon" alt="">
        <p>{{item.name}}</p>
      </div>
    </div>
    <div class="searchBox">
      <div class="searchItem row">
        <img src="" alt="">
        <input type="search" placeholder="搜索...">
      </div>
    </div>
    <div class="memberList">
      <div class="memberItem row" v-for="(item, index) in memberList" :key="index">
        <img class="memberHead" :src="item.head" alt="">
        <div>
          <p class="f_big f_b">{{item.name}}</p>
          <p class="f_small color_gray">{{item.job}}</p>
          <p class="f_small color_gray">{{item.xw}} | 入党时间{{item.time}}</p>
        </div>
        <div class="f_middle color_gray">{{item.number}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper } from 'vux'
export default {
  name: 'User',
  metaInfo: {
    title: '党员管理'
  },
  components: {
    Swiper
  },
  data () {
    return {
      imgList: [
        { img: '../static/icon/mbanner.png' },
        { img: '../static/icon/mbanner2.png' },
        { img: '../static/icon/mbanner3.png' }
      ],
      iconList: [
        { icon: '../static/icon/change.png', name: '党员转入' },
        { icon: '../static/icon/out.png', name: '党员转出' },
        { icon: '../static/icon/flow.png', name: '流动党员' }
      ],
      memberList: [
        { name: '姓名', head: '', job: '职位/支部', time: '2012-12-11', xw: '硕士', number: '18722122214' },
        { name: '姓名', head: '', job: '职位/支部', time: '2012-12-11', xw: '硕士', number: '18722122214' }
      ]
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
  background: #f4f4f4;
  width: 100%;
  min-height: 100%;
  overflow-y: auto;
  padding-bottom: 80px;
}
.mySwipe {
  width: 100%;
  height: 48vw;
  img{
    width: 100%;
  }
}
.iconBox {
    background: #fff;
}
.iconItem {
  flex-grow: 1;
  height: 20vw;
  p {
    width: 100%;
    margin: 3px 0;
    text-align: center;
    font-size: 14px;
  }
  img {
    display: block;
    width: 27px;
    height: 27px;
    position: relative;
    margin: 0 auto;
  }
}
.memberList{
  background-color: #fff;
}
.memberItem{
  padding: 10px;
  border-top: 1px solid #f4f4f4;
  p{
    margin: 2px 0;
    text-align: left;
  }
}
.memberHead{
  width: 47px;
  height: 47px;
  margin: 5px 10px 5px 5px;
  background-color: aquamarine;
  border-radius: 50%;
}
.searchBox{
 padding: 8px 15px;
 background: #fff;
 border-top: 1px solid #f0f0f0;
 margin-top: 10px;
}
.searchItem{
  background: #f4f4f4;
  padding: 5px;
  height: 36px;
  border-radius:18px;
  border: 1px solid #f0f0f0;
  input{
    border: none;
    background-color: transparent;
    outline: none !important;
  }
}
</style>
