// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('es6-promise').polyfill()
import Vue from 'vue'
import App from './App'
import router from './router'
import header from './page/header.vue'
import $ from 'jquery'
import moment from 'moment'
import axios from 'axios'
import VueAxios from 'vue-axios'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {
  InfiniteScroll
} from 'element-ui';


import '../static/bootstrap-3.3.7-dist/css/bootstrap.min.css'
import '../static/bootstrap-3.3.7-dist/css/bootstrap-datetimepicker.min.css'
import '../static/bootstrap-3.3.7-dist/css/bootstrap-switch.css'
import '../static/css/style.css'
import '../static/bootstrap-3.3.7-dist/js/bootstrap.min.js'
import '../static/bootstrap-3.3.7-dist/js/app.js'
import '../static/bootstrap-3.3.7-dist/js/bootstrap-datetimepicker.min.js'
import '../static/bootstrap-3.3.7-dist/js/bootstrap-datepicker.zh-CN.js'
import '../static/bootstrap-3.3.7-dist/js/bootstrap-switch.js'
Vue.use(InfiniteScroll)
Vue.use(VueAxios, axios)
Vue.use(elementUi)
Vue.config.productionTip = false
Vue.component('my-header', header)
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  console.log("token是",window.sessionStorage.getItem("token"));
  let token = window.sessionStorage.getItem("token");
  let id=window.sessionStorage.getItem("userId");
  if (token ===null || token === '' || token=== 'null') {
      if (!(to.path=='/login'||to.path=='/selectoffer'||to.path=='/sign')) {
          next('/sign');
      }else{
        next()
      }
  }else{//如果token不为空
    if (to.path=='/sign') {//并且访问的地址是登录页面
      if (!(token===null || token==='')) {
        next({path:'/home',query: {
          id: id
       }})
      }
    }else{
      next();
    }
  }
})
new Vue({
  el: '#app',
  router,
  components: {

    App
  },
  template: '<App/>'
})
