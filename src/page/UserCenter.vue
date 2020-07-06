<!--  -->
<template>
<body id="uc-UserCenter">
  <div>
    <h1>用户中心</h1>
  </div>
  <div>
    <a href="#" @click="loginMethodMes">个人资料</a>
    <a href="#" @click="loginMethodPass">订单信息</a>
  </div>
  <div v-model="person">
    <div id="uc-shouji" style="disply" v-model="flag" v-show="flag==true">
      <li>
        用户名
        <span v-model="modify" v-show="modify==false">{{person.userName}}</span>
        <input type="text" v-model="person.userName" v-show="modify==true" />
      </li>

      <li>
        密&nbsp;&nbsp;&nbsp;码
        <span v-model="modify" v-show="modify==false">{{person.userPass}}</span>
        <input type="text" v-model="person.userPass" v-show="modify==true" />
      </li>

      <li>
        手机号
        <span v-model="modify" v-show="modify==false">{{person.userPhone}}</span>
        <input type="text" v-model="person.userPhone" v-show="modify==true" />
      </li>

      <li>
        邮&nbsp;&nbsp;&nbsp;箱
        <span v-model="modify" v-show="modify==false">{{person.userEmail}}</span>
        <input type="text" v-model="person.userEmail" v-show="modify==true" />
      </li>

      <li>
        性&nbsp;&nbsp;&nbsp;别
        <span v-model="modify" v-show="modify==false">{{person.userSex}}</span>
        <input type="text" v-model="person.userSex" v-show="modify==true" />
      </li>

      <li>
        地&nbsp;&nbsp;&nbsp;址
        <span v-model="modify" v-show="modify==false">{{person.userAddress}}</span>
        <input type="text" v-model="person.userAddress" v-show="modify==true" />
      </li>

      <li>
        身份证
        <span v-model="modify" v-show="modify==false">{{person.userCard}}</span>
        <input type="text" v-model="person.userCard" v-show="modify==true" />
      </li>
    </div>
    <div>
      <button @click="loginmodify">修改</button>
      <button @click="loginpreservation">保存</button>
    </div>

    <div id="uc-zhanghao" v-model="flag" v-show="flag==false">订单详情</div>
  </div>
</body>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {},
  name: "",
  data() {
    //这里存放数据
    return {
      id: "",

      flag: true,
      getnumber: "",
      getpass: "",
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
      modify: false,
      //个人表状态
      regPhone1: true,
      regEmail1: true,
      regSfz1: true,
      regName1: true,
      regSex1: true,
      regPass1: true
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    //监测路由变化
    $route: "getParams"
  },
  //方法集合
  methods: {
    getParams() {
      //取到路由带过来的参数
      console.log("路由传过来的参数", this.$route.params.id);
      var routerParams = this.$route.params.id;
      //将数据放在当前组件的数据内
      this.id = routerParams;
    },

    //个人信息
    loginMethodMes() {
      this.flag = true;
    },
    //订单详情
    loginMethodPass() {
      this.flag = false;
    },
    //修改方法
    loginmodify() {
      this.modify = true;
    },
    //保存方法
    loginpreservation() {
      this.modify = false;
      //手机号
      var regPhone = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      //邮箱
      var regEmail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      //身份证(15位数字或18位最后一位可以是数字或X)
      var regSfz = /^(\d{15}|\d18|^\d{17}(\d|X|x))$/;
      //用户名：只能包括数字字母的组合，长度为4-15位
      var regName = /^[A-Za-z0-9]{4,15}$/;
      //性别
      var regSex = /^['男'|'女']$/;
      //密码6-16位任意字符
      var regPass = /^\w{6,16}$/;
      //信息表状态判断
      //用户名
      if (regName.test(this.person.userName)) {
        this.regName1 = true;
      } else if (this.person.userName != "") {
        this.regName1 = false;
      } else {
        this.regName1 = true;
      }
      //密码
      if (regPass.test(this.person.userPass)) {
        this.regPass1 = true;
      } else if (this.person.userPass != "") {
        this.regPass1 = false;
      } else {
        this.regPass1 = true;
      }
      //手机号
      if (regPhone.test(this.person.userPhone)) {
        this.regPhone1 = true;
      } else if (this.person.userPhone != "") {
        this.regPhone1 = false;
      } else {
        this.regPhone1 = true;
      }
      //邮箱
      if (regEmail.test(this.person.userEmail)) {
        this.regEmail1 = true;
      } else if (this.person.userEmail != "") {
        this.regEmail1 = false;
      } else {
        this.regEmail1 = true;
      }
      //性别
      if (regSex.test(this.person.userSex)) {
        this.regSex1 = true;
      } else if (this.person.userSex != "") {
        this.regSex1 = false;
      } else {
        this.regSex1 = true;
      }
      //身份证
      if (regSfz.test(this.person.userCard)) {
        this.regSfz1 = true;
      } else if (this.person.userCard != "") {
        this.regSfz1 = false;
      } else {
        this.regSfz1 = true;
      }
      //提示语
      if (
        this.regName1 &&
        this.regPass1 &&
        this.regPhone1 &&
        this.regEmail1 &&
        this.regSex1 &&
        this.regSfz1
      ) {
        //更新个人信息表
        this.axios
          .post("/api/user/insuranceUser/update", this.person)
          .then(data => {
            if (data.data.code == 0) {
              this.$message({
                showClose: true,
                message: "恭喜你，修改成功",
                type: "success"
              });
            }
          });
      } else {
        if (this.regName1 == false) {
          this.$message({
            showClose: true,
            message: "用户名格式错误：只能包括数字字母的组合，长度为4-15位",
            type: "error"
          });
        }
        if (this.regPass1 == false) {
          this.$message({
            showClose: true,
            message: "密码格式错误：6-16位任意字符",
            type: "error"
          });
        }
        if (this.regPhone1 == false) {
          this.$message({
            showClose: true,
            message: "手机号错误：11位手机号",
            type: "error"
          });
        }
        if (this.regEmail1 == false) {
          this.$message({
            showClose: true,
            message: "邮箱格式错误：xxx@xxx.xxx",
            type: "error"
          });
        }
        if (this.regSex1 == false) {
          this.$message({
            showClose: true,
            message: "性别格式错误：男或女",
            type: "error"
          });
        }
        if (this.regSfz1 == false) {
          this.$message({
            showClose: true,
            message: "身份证格式错误：15位数字或18位最后一位可以是数字或X",
            type: "error"
          });
        }
      }
      //存在错误则不保存
      if (
        this.regName1 == false ||
        this.regPass1 == false ||
        this.regPhone1 == false ||
        this.regEmail1 == false ||
        this.regSex1 == false ||
        this.regSfz1 == false
      ) {
        this.modify = true;
      }
      //测试
      // console.log(
      //   "regName" +
      //     this.regName1 +
      //     "/regPass" +
      //     this.regPass1 +
      //     "/regPhone" +
      //     this.regPhone1 +
      //     "/regEmail" +
      //     this.regEmail1 +
      //     "/regSex" +
      //     this.regSex1 +
      //     "/regSfz" +
      //     this.regSfz1
      // );
    },
    cardModify() {},
    //查询个人信息
    getPersonMessge() {
      console.log(this.id);
      if (this.flag == true) {
        this.axios
          .get("/api/user/insuranceUser/selectOne", { params: { id: this.id } })
          .then(data => {
            this.person = data.data.data;
          });
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getParams();
    this.getPersonMessge();
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
#uc-UserCenter {
  text-align: center;
}

#uc-shouji {
  font-size: 13px;
  width: 200px;
  height: 210px;
  position: relative;
  left: 43%;
  top: 50%;
  margin: 0px;
  margin-top: 20px;
}

li {
  width: 300px;
  padding: 4px;
  text-align: left;
  list-style: none;
}
</style>