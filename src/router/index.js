import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../page/Login.vue'], resolve)
    },
    {
      path: '/Home',
      name: 'Home',
      component: resolve => require(['../page/Home.vue'], resolve)
    },
    {
      path: '/selectingOffers',
      name: 'selectingOffers',
      component: resolve => require(['../page/selectingOffers.vue'], resolve)
    },
    {
      path: '/verify',
      name: 'verify',
      component: resolve => require(['../page/verify.vue'], resolve)
    },
    {
      path: '/pay',
      name: 'pay',
      component: resolve => require(['../page/pay.vue'], resolve)
    },
    {
      path: '/insuranceDetial',
      name: 'insuranceDetial',
      component: resolve => require(['../page/insuranceDetial.vue'], resolve)
    },
    {
      path: '/brand',
      name: 'brand',
      component: resolve => require(['../page/brand.vue'], resolve)
    }
  ]
})
