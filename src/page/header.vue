<!--  -->
<template>
  <header class="s-header">
    <div class="s_main1080">
      <div class="s-cursor">
        <img src="../../static/images/logo.png" />
        <span @click="goindex">缔梦车险出单平台</span>
        <router-link to="sign" id="yonhu" v-show="tshow==true">登录/注册</router-link>
          <!-- <router-link to="usercenter" id="yonhu" 
        v-if="tshow==false">
        手机用户{{user.userPhone}}</router-link> -->
        <a v-if="tshow==false" class="userPosition">
          当前用户{{user.insuranceLoginPhone}}
        </a>
        <a to="usercenter" id="yonhu"
        @click="loginOut" 
        v-if="tshow==false">
        退出登录</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      home: "",
      tshow: true,
      user:null
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
    //退出登录
    loginOut(){
        window.sessionStorage.setItem("token",null);
        window.sessionStorage.setItem("redisKey",null);
        this.errorMessage("退出成功");
        setTimeout(() => {
          this.$router.push("/loginOut")
        }, 1500);
    },
    errorMessage(data){
        this.$message({
           showClose: true,
          message: `${data}`,
          type: 'error',
          duration:1500
        });
    },
    getPersonMessge() {
      let redisKey=window.sessionStorage.getItem("redisKey");
      if (redisKey!=null && redisKey !='null') {
          return new Promise((resolve,reject)=>{
            let token=window.sessionStorage.getItem("token");
            this.axios
          .get("/api/user/insuranceUser/redisGet", { params: { redisKey: redisKey } ,
           headers: {
            token: window.sessionStorage.getItem("token")
                   }
                   })
          .then(data => {
            if (data.data.data!=null) {
                this.user = data.data.data;
            if (this.user.userId!=null||this.user.userId!='') {
               this.tshow=false;
            }
             resolve(this.user);
            }else{
                window.sessionStorage.setItem("token",null);
                window.sessionStorage.setItem("redisKey",null);
              resolve(data.data.data);
            }
          }).catch((data)=>{
              if (data.response.status==500) {
                  window.sessionStorage.setItem("token",null);
                  window.sessionStorage.setItem("redisKey",null);
              }
          });
        })
      }
    },
    async getAlldata(){
      await this.getPersonMessge();
    }
  },
  created() {
    // this.getTokenstatus();
    // window.setInterval(() => {
    //   this.getTokenstatus();
    //   setTimeout(fun, 0);
    // }, 5000);
    
  },mounted() {
    this.getAlldata();
  },
  activated() {
  },
};
</script>
<style>
#yonhu {
  position: absolute;
  left: 90%;
  top: 20px;
}
.userPosition{
  position: absolute;
  left: 82%;
  top: 20px;
  color: black;
  text-decoration: none;
}
</style>
