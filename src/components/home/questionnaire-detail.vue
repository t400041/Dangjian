<template>
  <div class="viewBox">
    <mt-header class="myHeader" title="调查问卷">
      <div slot="left">
        <img class="back" src="../../assets/icon/back.png" alt="" @click="back()">
      </div>
    </mt-header>
    <div class="paddingBox">
      <p class="f_big f_b">
        {{title}}
      </p>
      <p class="f_middle">
        {{content}}
      </p>
    </div>
    <div class="paddingBox" v-for="(item, index) in questionList" :key="index">
      <div class="qTitle row">
        <div>
          <p>
            {{index + 1}}.
          </p>
        </div>
        <div>
          <p>
            <span class="color_red" v-if="item.type == '1'">【单选】</span>
            <span class="color_red" v-if="item.type == '2'">【多选】</span>
            {{item.question}}
          </p>
        </div>
      </div>
      <div class="">
        <mt-radio
          v-if="item.type == '1'"
          v-model=valueList[index]
          :options="item.option">
        </mt-radio>
        <mt-checklist
          v-if="item.type == '2'"
          v-model=ckeckboxList
          :options="item.option">
        </mt-checklist>
      </div>
    </div>
    <div class="submit" @click="submit">
      提交
    </div>
  </div>
</template>
<script>
export default {
  name: 'QuestionnaireDetail',
  metaInfo: {
    title: '调查问卷'
  },
  data () {
    return {
      title: '问卷标题',
      content: '问卷描述',
      questionList: [
        {
          question: '问题题目1',
          type: '1',
          option: [
            {value: 'A', label: '选项A'},
            {value: 'B', label: '选项B'},
            {value: 'C', label: '选项C'},
            {value: 'D', label: '选项D'}
          ]
        },
        {
          question: '问题题目2',
          type: '2',
          option: [
            {value: 'A', label: '选项A'},
            {value: 'B', label: '选项B'},
            {value: 'C', label: '选项C'},
            {value: 'D', label: '选项D'}
          ]
        },
        {
          question: '问题题目3',
          type: '1',
          option: [
            {value: 'A', label: '选项A'},
            {value: 'B', label: '选项B'},
            {value: 'C', label: '选项C'},
            {value: 'D', label: '选项D'}
          ]
        }
      ],
      valueList: [],
      ckeckboxList: []
    }
  },
  mounted () {
    console.log(this.questionList.length)
  },
  methods: {
    back () {
      this.$router.back(-1)
    },
    submit () {
      console.log(this.valueList)
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
.paddingBox{
  margin-bottom: 10px;
}
.submit{
  width: 100%;
  padding: 10px;
  background-color: #e51c23;
  position: fixed;
  left: 0;
  bottom: 0;
  color: #fff;
  text-align: center;
}
</style>
