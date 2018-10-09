<template>
<tab active-color="#e51c23"
  bar-active-color="#e51c23"
  v-model.number="tabIndex">
  <tab-item @on-item-click="$emit('tabchange',index)"
   v-for="(item, index) in tabList" :key="index"
  >
    {{item.name}}
  </tab-item>
</tab>
</template>
<script>
import { Tab, TabItem } from 'vux'
export default {
  name: 'Mytab',
  props: {
    tabList: Array,
    selected: String
  },
  components: {
    Tab,
    TabItem
  },
  data () {
    return {
      tabIndex: 0
    }
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>

</style>
