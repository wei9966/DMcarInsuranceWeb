<template>
  <div class="main login">
    <div class="s-form">
      <h5>缔梦车险在线报价</h5>
      <form class="form-horizontal">
        <div class="form-group">
          <label for class="col-sm-4 control-label">车辆行驶城市：</label>
          <div class="col-sm-6">
            <el-cascader v-model="values" :options="options" :props="props"></el-cascader>
          </div>
          <div class="col-sm-2">
            <input type="button" class="form-control s-input-btnbg" id placeholder />
          </div>
        </div>
        <div class="form-group">
          <label for class="col-sm-4 control-label">车辆牌号：</label>
          <div class="col-sm-4">
            <input type="text" class="form-control" id placeholder="沪A" value="沪A" />
          </div>
          <div class="checkbox col-sm-4">
            <label>
              <input type="checkbox" />新车未上牌
            </label>
          </div>
        </div>
        <div class="form-group">
          <label for class="col-sm-4 control-label">手机号：</label>
          <div class="col-sm-7">
            <input
              type="number"
              class="form-control"
              id="inputPassword3"
              placeholder="请输入手机号"
              v-model="getphone"
            />
          </div>
        </div>
        <div class="form-group s-out-group">
          <button type="submit" class="s-default" @click="next">快速报价</button>
        </div>
      </form>
    </div>
    <footer class="foots">
      <p>车险出单平台 版权所有</p>
      <p>Copyright@2017 Chexianchudanpingtai</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getphone: "",
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
      values: [],
      props: {
        value: "baseAreaid",
        label: "name",
        children: "children"
      },
      options: []
    };
  },
  methods: {
    //手机号验证
    next() {
      //手机号
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (this.getphone != "" && reg.test(this.getphone)) {
        this.person.userPhone = this.getphone;
        this.axios
          .post("/api/user/insuranceUser/insert", this.person)
          .then(data => {
            // this.$router.push('UserCenter')
            this.person.userId = data.data.data.userId;
            // console.log("后台返回的值",data.data);
            this.updatedlogin();
          });
      } else {
        this.$message({
          showClose: true,
          message: "手机号格式错误或为空",
          type: "error"
        });
      }
    },
    //传值下一个页面
    updatedlogin() {
      this.$router.push({
        name: "Home",
        path: "/Home",
        params: {
          id: this.person.userId
        }
      });
    }
    // next (e) {
    //   this.$router.push('home')
    //   e.preventDefault()
    // },

    // getCity() {
    //   this.axios.get("api/insuranceCity/selectTree").then(data => {
    //     this.options = data.data.data;
    //     this.value = data.data.data.baseAreaid;
    //     console.log(data.data.data);
    //   });
    // }
  },
  created() {
    this.getCity();
  }
};
</script>

<style>
</style>
