// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('es6-promise').polyfill()
import Vue from 'vue'
import App from './App'
import router from './router'
import header from './page/header.vue'
import $ from 'jquery'
import moment from 'moment'

import '../static/bootstrap-3.3.7-dist/css/bootstrap.min.css'
import '../static/bootstrap-3.3.7-dist/css/bootstrap-datetimepicker.min.css'
import '../static/bootstrap-3.3.7-dist/css/bootstrap-switch.css'
import '../static/css/style.css'
import '../static/bootstrap-3.3.7-dist/js/bootstrap.min.js'
import '../static/bootstrap-3.3.7-dist/js/app.js'
import '../static/bootstrap-3.3.7-dist/js/bootstrap-datetimepicker.min.js'
import '../static/bootstrap-3.3.7-dist/js/bootstrap-datepicker.zh-CN.js'
import '../static/bootstrap-3.3.7-dist/js/bootstrap-switch.js'
Vue.config.productionTip = false
Vue.component('my-header', header)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
