<!--  -->
<template>
<body id="uc-UserCenter">
  <div><h1>用户中心</h1></div>
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
  name:'',
  data() {
    //这里存放数据
    return {

      id:'',

      flag: false,
      getnumber: "",
      getpass: "",
      //user表对象
      person: {
        userId:"",//id
        userName: "", //用户名
        userPass: "", //密码
        userPhone: "", //手机号
        userEmail: "", //邮箱
        userSex: "", //性别
        userAddress: "", //地址
        userCard: "" //身份证
      },
      modify: false
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    //监测路由变化
    '$route':'getParams'
  },
  //方法集合
  methods: {
    getParams(){
      //取到路由带过来的参数
      console.log("路由传过来的参数",this.$route.params.id);  
      var routerParams = this.$route.params.id
      //将数据放在当前组件的数据内
      this.id = routerParams
    },

    //个人信息
    loginMethodMes() {
      this.flag = true;
      this.getPersonMessge();
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
          } else {
            this.$message({
              showClose: true,
              message: "服务器忙，请稍后重试",
              type: "error"
            });
          }
        });
    },
    cardModify() {},
    //查询个人信息
    getPersonMessge() {
      console.log(this.id);
      this.axios            
        .get("/api/user/insuranceUser/selectOne", { params:{id: this.id}})
        .then(data => {
          this.person = data.data.data;
        });
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
#uc-UserCenter{
  text-align: center;
}

#uc-shouji{
  font-size: 13px;
  width: 200px;
  height: 210px;
  position: relative;
  left: 43%;
  top: 50%;
  margin:0px;
  margin-top: 20px;
}

li {
  width: 300px;
  padding: 4px;
  text-align: left;
  list-style: none;
}
</style>