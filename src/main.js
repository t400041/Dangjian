// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App.vue'
import Viser from 'viser-vue'
import Meta from 'vue-meta'
import { XHeader } from 'vux'

Vue.component('XHeader', XHeader)

Vue.use(Viser)
Vue.use(Meta)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
