<template>
  <div class="viewBox">
    <mt-header class="myHeader" title="积分详情">
      <div slot="left">
        <img class="back" src="../../assets/icon/back.png" alt="" @click="back()">
      </div>
    </mt-header>
    <v-chart
      :data="data"
      :padding="[20, 'auto']">
      <!-- <v-scale y :options="yOptions" /> -->
      <v-pie :radius="0.85" :inner-radius="0.5" series-field="name" :colors="['#FE5D4D','#3BA4FF','#737DDE']" />
      <v-legend :options="legendOptions"  diabled/>
      <v-guide type="html" :options="htmlOptions" />
    </v-chart>
    <div class="linkCell row spb">
      <div>积分记录</div>
    </div>
    <div class="tableBox">
      <table class="myTable">
        <thead>
          <tr>
            <td>内容</td>
            <td class="p10">积分</td>
            <td class="p10">时间</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tableList" :key="index">
            <td>{{item.content}}</td>
            <td class="p10">{{item.score}}</td>
            <td class="p10">{{item.time}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
// const DataSet = require('@antv/data-set')
import { VChart, VLine, VArea, VPie, VPoint, VScale, VAxis, VGuide, VLegend } from 'vux'
const data = [
  { name: '专题教育', percent: 60, a: '0', score: '12' },
  { name: '政策法规', percent: 10, a: '0', score: '2' },
  { name: '三会一课', percent: 30, a: '0', score: '6' }
]

const map = {}
data.map(obj => {
  map[obj.name] = obj.score + '分'
})

export default {
  name: 'ScoreDetail',
  metaInfo: {
    title: '积分详情'
  },
  components: {
    VChart,
    VLine,
    VArea,
    VPie,
    VPoint,
    VScale,
    VAxis,
    VGuide,
    VLegend
  },
  data () {
    return {
      tableList: [
        {content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容', score: '12', time: '09-29'},
        {content: '内容', score: '12', time: '09-29'},
        {content: '内容', score: '12', time: '09-29'}
      ],
      data,
      // map,
      htmlOptions: {
        position: [ '50%', '45%' ],
        html: `
          <div style="width: 250px;height: 35px;text-align: center;">
            <div style="font-size: 14px">总计</div>
            <div style="font-size: 18px">20 分</div>
          </div>`
      },
      legendOptions: {
        position: 'right',
        itemFormatter (val) {
          return val + '  ' + map[val]
        }
      },
      yOptions: {
        formatter (val) {
          return val * 1000 + '%'
        }
      }
    }
  },
  mounted () {
  },
  methods: {
    getWidth () {
      let webWidth = document.body.offsetWidth
      console.log(webWidth)
      return webWidth
    },
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
.tableBox{
  padding:10px;
  background-color: #fff;
}
.myTable{
  table-layout: fixed;
  width: 100%;
  thead{
    background-color: #f0f0f0;
  }
  tbody{
    background-color: #f4f4f4;
    td:first-child{
      width: 66%;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
  }
  td{
    padding: 10px 0;
    text-align: center;
  }
}
td.p10{
  width: 17%;
}
.myChart{
  background-color: #fff;
  width: 100%;
}
</style>
