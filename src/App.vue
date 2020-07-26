<template>
  <div id="app">
    <my-header  v-if="show"></my-header>
    <router-view />
  </div>
</template>
<script>
export default {
    name: 'app',
   
    data () {
      return {
        show: false
      }
    },
    watch: {
      '$route' () {
        // 等于详情页面的时候为true
        this.show = this.$route.name !== 'insuranceDetial'
      }
    }
}
</script>
<style>
</style>
