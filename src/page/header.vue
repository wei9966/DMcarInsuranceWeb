<!--  -->
<template>
   <header class="s-header">
        <div class="s_main1080">
        <div class="s-cursor" @click="goindex">
        <img src="../../static/images/logo.png">
        <span>缔梦车险出单平台</span>
        <router-link to="sign" id="yonhu">用户中心</router-link>
        </div>
    </div>
    </header>
</template>

<script>
export default {
  data () {
    return {
      home: ''
    }
  },
  watch: {
    $route () {
      if (this.$route.name !== 'login') {
        this.home = 'home'
      } else {
        this.home = 'login'
      }
    }
  },
  methods: {
    goindex: function (e) {
      this.$router.push(this.home)
    }
  }
}
</script>
<style>
#yonhu{
  position: absolute;
  left: 90%;
  top:20px
}
</style>
