<!--  -->
<template>
<body id="sg-users-login">
  <div id="sg-us-login">
    <h1>用户登录</h1>
  </div>
  <div>
    <a href="#" @click="loginMethodMes" id="sg-Text-login">短信登录</a>
    <a href="#" @click="loginMethodPass" id="sg-pass-login">密码登录</a>
  </div>
  <div>
    <div id="sg-shouji" style="disply" v-model="flag" v-show="flag==true">
      <section>
        <input placeholder="手机号" v-model="getphone" id="sg-phone" />
      </section>
      <section>
        <input placeholder="验证码" v-model="sgcode" id="sg-sj-code" />
        <button v-show="show" @click="getCode2" id="sg-gain-code">获取验证码</button>
        <span v-show="!show" class="count" id="sg-gain-code">{{count}}秒后重试</span>
      </section>
      <h6>
        温馨提示：未注册帐号的手机号，登录时将自动注册，且代表已同意
        <a href="#">《用户服务协议》</a>
      </h6>
    </div>

    <div id="sg-zhanghao" v-model="flag" v-show="flag==false">
      <section>
        <input placeholder="手机号/邮箱/用户名" v-model="getnumber" id="sg-number" />
      </section>
      <section>
        <input placeholder="密码" v-model="getpass" id="sg-pass" />
      </section>
      <section id="ts">
        <Verify
          @success="alert('success')"
          @error="alert('error')"
          :type="3"
          :showButton="false"
          :barSize="{width:'165px',height:'40px'}"
          id="sg-zh-code"
        ></Verify>
      </section>
    </div>
  </div>
  <div>
    <button @click="Sign" id="sg-login">登录</button>
  </div>
</body>
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
      }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    loginMethodMes() {
      this.flag = true;
    },
    loginMethodPass() {
      this.flag = false;
    },
    //获取验证码
    getCode2() {
      this.axios
        .post("/api/third/message/sendMessage?phoneNumber=" + this.Phone)
        .then(data => {
          console.log(data);
          this.msgCode = data.data.data;
        });
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
    //插件验证
    alert(text) {
      this.test = text;
      console.log(this.test);
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
        if (
          this.sgcode == this.msgCode &&
          this.getphone != "" &&
          this.sgcode != "" &&
          reg.test(this.getphone)
        ) {
          this.person.userPhone = this.getphone;
          this.axios
            .post("/api/user/insuranceUser/insert", this.person)
            .then(data => {
              // this.$router.push('UserCenter')
              this.person.userId = data.data.data.userId;
              // console.log("后台返回的值",data.data);
              this.updateduc();
            });
        } else if (!reg.test(this.getphone) && this.getphone != "") {
          this.$message({
            showClose: true,
            message: "手机号格式错误！",
            type: "error"
          });
        } else if (this.sgcode == "" && this.getphone != "") {
          this.$message({
            showClose: true,
            message: "验证码不能为空！",
            type: "error"
          });
        } else if (
          this.sgcode != this.msgCode &&
          this.getphone != "" &&
          !reg.test(this.getphone)
        ) {
          this.$message({
            showClose: true,
            message: "验证码错误！",
            type: "error"
          });
        } else if (this.getphone == "") {
          this.$message({
            showClose: true,
            message: "手机号不能为空！",
            type: "error"
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
              .get("/api/user/insuranceUser/emailLogin", {
                params: { userEmail: this.getnumber, userPass: this.getpass }
              })
              .then(data => {
                if ((this.insuranceClause = data.data.code == 0)) {
                  if (this.test == "success") {
                    this.axios
                      .get("/api/user/insuranceUser/queryId", {
                        params: {
                          userEmail: this.getnumber,
                          userPhone: "",
                          userName: ""
                        }
                      })
                      .then(data => {
                        this.person.userId = data.data.data.userId;
                        console.log("查询到的数据", this.person.userId);
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
              .get("/api/user/insuranceUser/phoneLogin", {
                params: { userPhone: this.getnumber, userPass: this.getpass }
              })
              .then(data => {
                if ((this.insuranceClause = data.data.code == 0)) {
                  if (this.test == "success") {
                    this.axios
                      .get("/api/user/insuranceUser/queryId", {
                        params: {
                          userEmail: "",
                          userPhone: this.getnumber,
                          userName: ""
                        }
                      })
                      .then(data => {
                        this.person.userId = data.data.data.userId;
                        console.log("查询到的数据", this.person.userId);
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
          } else if (nam.test(this.person.userName)) {
            //用户名登录
            this.axios
              .get("/api/user/insuranceUser/nameLogin", {
                params: { userName: this.getnumber, userPass: this.getpass }
              })
              .then(data => {
                if ((this.insuranceClause = data.data.code == 0)) {
                  if (this.test == "success") {
                    this.axios
                      .get("/api/user/insuranceUser/queryId", {
                        params: {
                          userEmail: "",
                          userPhone: "",
                          userName: this.getnumber
                        }
                      })
                      .then(data => {
                        this.person.userId = data.data.data.userId;
                        console.log("查询到的数据", this.person.userId);
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
        name: "usercenter",
        params: {
          id: this.person.userId
        }
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
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
div {
}
#sg-users-login {
  text-align: center;
}
#sg-Text-login,
#sg-pass-login {
  width: 200px;
}
#sg-login {
  width: 165px;
  height: 30px;
}

#sg-shouji {
}
#sg-phone,
#sg-sj-code,
#sg-agin-code {
  margin: 5px;
}
#sg-phone {
  width: 165px;
}
#sg-sj-code {
  width: 70px;
  position: relative;
  right: 4px;
}
#sg-agin-code {
}

#sg-zhanghao {
}
#sg-zh-code {
  width: 170px;
  position: relative;
  left: 43.5%;
  margin: 5px;
}
#sg-number,
#sg-pass {
  margin: 5px;
  width: 165px;
}
</style>