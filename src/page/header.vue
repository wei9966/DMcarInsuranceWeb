<!--  -->
<template>
  <header class="s-header">
    <div class="s_main1080">
      <div class="s-cursor">
        <img src="../../static/images/logo.png" />
        <span @click="goindex">缔梦车险出单平台</span>
        <router-link to="sign" id="yonhu" v-model="tshow" v-show="tshow==true">登录/注册</router-link>
        <router-link to="usercenter" id="yonhu" v-model="tshow" v-show="tshow==false">用户</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      home: "",
      tshow: true
    };
  },
  watch: {
    $route() {
      if (this.$route.name !== "login") {
        this.home = "home";
      } else {
        this.home = "login";
      }
    }
  },
  methods: {
    goindex: function(e) {
      this.$router.push(this.home);
    },
    //获取Token状态
    getTokenstatus() {
      //取token
      let t = window.sessionStorage.getItem("token");
      console.log("取到的token:" + t);
      //调用验证TOKEN方法
      this.axios
        .get("/api/user/insuranceUser/admin", {
          headers: {
            token: `${t}`
          }
        })
        .then(data => {
          //返回200正确
          if (data.data.code == 200) {
            this.tshow = false;
            this.tokenstatus = 200;
          }
        })
        .catch(data => {
          console.log("错误code:", data.response.status);
          //500Token异常或尚未登录
          this.tshow = true;
          this.tokenstatus = 500;
          this.$router.push({ name: "sign" });
          this.$message({
            showClose: true,
            message: "请重新登录！",
            type: "error"
          });
        });
    }
  },
  created() {
    // this.getTokenstatus();
    // window.setInterval(() => {
    //   this.getTokenstatus();
    //   setTimeout(fun, 0);
    // }, 5000);
  }
};
</script>
<style>
#yonhu {
  position: absolute;
  left: 90%;
  top: 20px;
}
</style>
