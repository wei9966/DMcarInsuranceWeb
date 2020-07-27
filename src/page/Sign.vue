<!--  -->
<template>
<div class="main login">
  <!-- <el-row :gutter="20" style="width:1920px;"> -->
  <el-col :span="15"><div class="grid-content bg-purple">
      <div class="whiteDiv" >
          <img src="" alt="">
      </div>
    </div></el-col>
    <el-col :span="5" style="margin-top:5%;" class="loginBody">
    <div class="grid-content bg-purple" style="padding:5%;">
        <div id="sg-us-login">
    <h1 align="center">用户登录</h1>
        </div>
        <div>
          <el-link type="primary" @click="loginMethodMes" style="fontSize:18px;margin-left:15%;">验证码登录</el-link>
          <el-link type="primary" @click="loginMethodPass" style="fontSize:18px;margin-left:15%;">密码登录</el-link>
        </div>
  <div>
    <div id="sg-shouji"  v-model="flag" v-show="flag==true">
        <el-input
            placeholder="请输入手机号或邮箱"
            v-model="getphone"
            clearable
            class="marT">
        </el-input>
        <el-input
            placeholder="请输入验证码"
            v-model="sgcode"
            clearable
            class="marT"
            style="width:66%;">
        </el-input>
        <el-button type="success" style="" v-show="show" @click="getCode2">获取验证码</el-button>
        <span v-show="!show" class="count" id="sg-gain-code">{{count}}秒后重试</span>
      <h5 style="fontSize:16px;">
        温馨提示：未注册帐号的手机号或邮箱，登录时将自动注册，且代表已同意
        <a href="#">《用户服务协议》</a>
      </h5>
    </div>
    <div id="sg-zhanghao" v-model="flag" v-show="flag==false">
        <el-input
            placeholder="手机号/邮箱/用户名"
            v-model="getnumber"
            clearable
            class="marT">
        </el-input>
        <el-input
            placeholder="请输入密码"
            v-model="getpass"
            clearable
            class="marT"
            type="password">
        </el-input>
      <section id="ts">
        <Verify
          @success="alert('success')"
          @error="alert('error')"
          :type="3"
          :showButton="false"
          :barSize="{width:'300px',height:'40px'}"
          id="sg-zh-code"
          class="marT"
        ></Verify>
      </section>
    </div>
  </div>
  <div>
    <el-button type="primary" @click="Sign" class="marT" style="width:100%;" >立刻登录</el-button>
  </div>
    </div>
    </el-col> 
</el-row>
  
  
</div>
  
</template>

<script>
import Verify from "vue2-verify";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: { Verify },
  props: {},
  data() {
    //这里存放数据
    return {
      flag: true,
      getnumber: "",
      getpass: "",
      loginType: 0,
      //验证码
      show: true,
      count: "",
      timer: null,
      getphone: "",
      sgcode: "",
      msgCode: "",
      code2: "",
      test: "",
      //user表对象
      person: {
        userId: "", //id
        userName: "", //用户名
        userPass: "", //密码
        userPhone: "", //手机号
        userEmail: "", //邮箱
        userSex: "", //性别
        userAddress: "", //地址
        userCard: "" //身份证
      },
      flag1:null,//判断跳转页面
      personnelId:null,//客户预信息id 
      personnel:null,//客户预信息
      tokenstatus:"",//token返回code
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
      $route: "getParams"
  },
  //方法集合
  methods: {
    getParams(){
       this.flag1= this.$route.query.flag;
      this.getAllData();
    },
    loginMethodMes() {
      this.flag = true;
    },
    loginMethodPass() {
      this.flag = false;
    },
    checkPhone(){
        //验证手机号是否是保险人员
        return new Promise((resolve,reject)=>{
            this.axios.get(`/api/user/loginUser/checkPhone/${this.getphone}`).then(data=>{
            resolve(data.data.code);
            return data.data.code;
        });
        })
    },
    checkEmail(){
        //验证手机号是否是保险人员
        return new Promise((resolve,reject)=>{
            this.axios.get(`/api/user/loginUser/checkEmail/${this.getphone}`).then(data=>{
            resolve(data.data.code);
            return data.data.code;
        });
        })
    },
    //获取验证码
  async getCode2() {
      var regEmail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      //手机号
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if(this.getphone==''||this.getphone==null){
           this.$message({
            showClose: true,
            message: "请输入手机号或邮箱",
            type: "error"
          }); 
          return false;
      }
      if(reg.test(this.getphone)){
        //这里先去后台请求,看是否要发送请求
       let code= await this.checkPhone();
       if (code==0) {
          this.axios
        .post("/api/third/message/sendMessage?phoneNumber=" + this.getphone)
        .then(data => {
          this.msgCode = data.data.data;
          this.person.userPhone=this.getphone;
           this.messageShow("验证码发送成功","success");
           this.timeMethod();
        });
       }else{
         //这里写不是保险人员
         this.messageShow("服务器忙,请联系管理员","error");
         return ;
       }
      }else{
        //这里先去后台请求,看是否要发送请求
       let code= await this.checkEmail();
       if (code==0) {
          this.axios
        .post(`/api/third/email/send/${this.getphone}`)
        .then(data => {
          this.msgCode = data.data.data;
          this.person.userEmail=this.getphone;
          this.messageShow("验证码发送成功","success");
          this.timeMethod();
        });
       }else{
         //这里写不是保险人员
         this.messageShow("服务器忙,请联系管理员","error");
         return ;
       }
      }
    },
    timeMethod(){
       //倒计时
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
    messageShow(data,type){
      this.$message({
          showClose: true,
          message: `${data}`,
          type: `${type}`
        });
    },
    //插件验证
    alert(text) {
      this.test = text;
    },
    //登录
    Sign() {
      //邮箱
      var regEmail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      //手机号
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      //用户名：只能包括数字字母的组合，长度为4-15位
      var nam = /^[A-Za-z0-9]{4,15}$/;
      //手机验证码登录
      if (this.flag == true) {
        if (this.sgcode == "" && this.getphone != "") {
          this.$message({
            showClose: true,
            message: "验证码不能为空！",
            type: "error"
          });
          return false;
        } 
        if (
          this.sgcode != this.msgCode &&
          this.getphone != ""
        ) {
          this.$message({
            showClose: true,
            message: "验证码错误！",
            type: "error"
          });
          return false;
        }
        if (this.getphone == "") {
          this.$message({
            showClose: true,
            message: "手机号不能为空！",
            type: "error"
          });
          return false;
        }
        if (
          this.sgcode == this.msgCode &&
          this.getphone != "" &&
          this.sgcode != ""
        ) {
          //这里进行登录
          this.axios
            .post(`/api/user/loginUser/phoneCodeLogin/${this.getphone}`)
            .then(data => {
              if ((this.insuranceClause = data.data.code == 200)) {
                 window.sessionStorage.setItem("token",data.data.extended.token)
                  this.insertRedis();
                  window.sessionStorage.setItem("userId",data.data.extended.user.userId)
                  this.person.userId = data.data.extended.user.userId;
                  this.updateduc();
              }
            });
        } 
      } else {
        // 账号登录,验证账号格式是否正确
        if (
          regEmail.test(this.getnumber) ||
          reg.test(this.getnumber) ||
          (nam.test(this.getnumber) && this.getnumber != "")
        ) {
          //邮箱名登录
          if (regEmail.test(this.getnumber)) {
            this.axios
              .get("/api/user/loginUser/emailLogin", {
                params: { userEmail: this.getnumber, userPass: this.getpass }
              })
              .then(data => {
                if ((this.insuranceClause = data.data.code == 200)) {
                  window.sessionStorage.setItem("token",data.data.extended.token)
                  this.insertRedis();
                  window.sessionStorage.setItem("userId",data.data.extended.user.userId)
                  if (this.test == "success") {
                    this.axios
                      .get("/api/user/insuranceUser/queryId", {
                        params: {
                          userEmail: this.getnumber,
                          userPhone: "",
                          userName: ""
                        }, headers: {
            token: window.sessionStorage.getItem("token")}
                      })
                      .then(data => {
                        this.person.userId = data.data.data.userId;
                        this.updateduc();
                      });
                  } else {
                    this.$message({
                      showClose: true,
                      message: "请校验验证码",
                      type: "error"
                    });
                  }
                } else {
                  this.$message({
                    showClose: true,
                    message: "用户名或密码错误！",
                    type: "error"
                  });
                }
              });
            //手机号登录
          } else if (reg.test(this.getnumber)) {
            this.axios
              .get("/api/user/loginUser/phoneLogin", {
                params: { userPhone: this.getnumber, userPass: this.getpass }
              })
              .then(data => {               
                if ((this.insuranceClause = data.data.code == 200)) {
                  window.sessionStorage.setItem("token",data.data.extended.token);
                  this.insertRedis();
                  window.sessionStorage.setItem("userId",data.data.extended.user.userId); 
                  if (this.test == "success") {
                    this.axios
                      .get("/api/user/insuranceUser/queryId", {
                        params: {
                          userEmail: "",
                          userPhone: this.getnumber,
                          userName: ""
                        }, headers: {
            token: window.sessionStorage.getItem("token")
                   }
                      })
                      .then(data => {
                        this.person.userId = data.data.data.userId;
                        this.updateduc();
                      });
                  } else {
                    this.$message({
                      showClose: true,
                      message: "请校验验证码",
                      type: "error"
                    });
                  }
                } else {
                  this.$message({
                    showClose: true,
                    message: "用户名或密码错误！",
                    type: "error"
                  });
                }
              });
          } else if (nam.test(this.getnumber)) {
            //用户名登录
            this.axios
              .get("/api/user/loginUser/nameLogin", {
                params: { userName: this.getnumber, userPass: this.getpass }
              })
              .then(data => {
                if ((this.insuranceClause = data.data.code == 200)) {
                  window.sessionStorage.setItem("token",data.data.extended.token);
                  this.insertRedis();
                  window.sessionStorage.setItem("userId",data.data.extended.user.userId);
                  if (this.test == "success") {
                    this.axios
                      .get("/api/user/insuranceUser/queryId", {
                        params: {
                          userEmail: "",
                          userPhone: "",
                          userName: this.getnumber
                        },headers:{
                           token: window.sessionStorage.getItem("token")}
                      })
                      .then(data => {
                        this.person.userId = data.data.data.userId;
                        this.updateduc();
                      });
                  } else {
                    this.$message({
                      showClose: true,
                      message: "请校验验证码",
                      type: "error"
                    });
                  }
                } else {
                  this.$message({
                    showClose: true,
                    message: "用户名或密码错误！",
                    type: "error"
                  });
                }
              });
          }
        } else {
          if (this.getnumber == "" && this.getpass == "") {
            this.$message({
              showClose: true,
              message: "账号&密码不能为空",
              type: "error"
            });
          } else if (this.getpass == "") {
            this.$message({
              showClose: true,
              message: "密码不能为空",
              type: "error"
            });
          }
        }
      }
    },
    updateduc() {
            this.$router.push({
            name: "loginSuccess",
           query: {
              personnelId:this.personnelId
           }
           });
    },
    //将用户信息保存到redis
    insertRedis(){
        return new Promise((resolve,reject)=>{
            this.axios.get('/api/user/insuranceUser/redisInsert',{headers: {
              token: window.sessionStorage.getItem("token")
                   }
                   }).then(data=>{
                     window.sessionStorage.setItem("redisKey",data.data.key)
            });
        });
    },
    getPersonnel(){
        return new Promise((resolve,reject)=>{
            this.axios.get('/api/policy/insurancePersonnelInformation/selectOne',{params:{id:this.personnelId}}).then(data=>{
                this.personnel=data.data;
                this.getnumber=data.data.personnelPhone;
                this.getphone=data.data.personnelPhone;
                if (!this.flag1==1) {
                  this.personnel=null;
                }
                resolve(data.data);
            });
        })
    },
   async getAllData(){
        await this.getPersonnel();
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getParams();
    
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
  .loginBody{
      background-color: white;
      border-radius: 2%;
      opacity:0.98;
  }
  .whiteDiv{
    width: 100%;
  }
  .marT{
    margin-top: 6%;
  }
</style>