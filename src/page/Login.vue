<template>
  <div class="main login">
    <div class="s-form">
      <h5>缔梦车险在线报价</h5>
      <form class="form-horizontal">
        <div class="form-group">
          <label for class="col-sm-4 control-label">车辆牌号：</label>
          <div class="col-sm-4">
            <input type="text" class="form-control" v-model="personnelInformation.personnelLicensePlate"/>
          </div>
          <div class="checkbox col-sm-4">
            <label>
              <input type="checkbox" v-model="personnelInformation.personnelNewCarFlag" />新车未上牌
            </label>
          </div>
        </div>
        <div class="form-group">
          <label for class="col-sm-4 control-label">车辆估价</label>
          <div class="col-sm-6">
              <el-select v-model="personnelInformation.personnelCarPrice" placeholder="请选择车价">
              <el-option
                v-for="item in evaluations"
                :key="item.evaluationId"
                :label="item.evaluationType"
                :value="item.evaluationId"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="form-group">
          <label for class="col-sm-4 control-label">手机号：</label>
          <div class="col-sm-7">
            <input
              type="text"
              class="form-control"
              id="inputPassword3"
              placeholder="请输入手机号"
              v-model="personnelInformation.personnelPhone"
            />
          </div>
        </div>
        <div class="form-group s-out-group">
          <input type="button" class="s-default" @click="next" value="快速报价"/>
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
      options: [],
      personnelInformation:{//客户预信息
          personnelCarPrice:null,//估价
          personnelPhone:'',//手机号
          insuranceInserIncludeId:'',//套餐id
          personnelLicensePlate:'',//车牌号
          insuranceCityId:'',//城市id
          personnelNewCarFlag:''//是否
      },
      evaluations:[]
    };
  },
  methods: {
    //手机号验证
    next() {
      //手机号
      // var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      // if (this.getphone != "" && reg.test(this.getphone)) {
      //   this.person.userPhone = this.getphone;
      //   this.axios
      //     .post("/api/user/insuranceUser/insert", this.person)
      //     .then(data => {
      //       // this.$router.push('UserCenter')
      //       this.person.userId = data.data.data.userId;
      //       // console.log("后台返回的值",data.data);
            this.updatedlogin();
      //     });
      // } else {
      //   this.$message({
      //     showClose: true,
      //     message: "手机号格式错误或为空",
      //     type: "error"
      //   });
      // }
    },
    //传值下一个页面
    updatedlogin() {
      // this.$router.push({
      //   name: "Home",
      //   path: "/Home",
      //   params: {
      //     id: this.person.userId
      //   }
      // });
      if (this.personnelInformation.personnelNewCarFlag==true) {
          this.personnelInformation.personnelNewCarFlag=1;
      }else{
        this.personnelInformation.personnelNewCarFlag=0;
      }
      this.$router.push({
        name: "selectOffer",
        path: "/selectoffer",
        query: {
          id: this.person.userId,
          personnelInformation:JSON.stringify(this.personnelInformation)
        }
      });
    },
    getEvaluations(){
      return new Promise((resolve,reject)=>{
        this.axios.get('/api/policy/insuranceEvaluation/select').then(data=>{
            this.evaluations=data.data.data;
            resolve(data.data.data);
        });
      })
    },
    async getAllData(){
     await this.getEvaluations();
    }
  },
  created() {
    this.getAllData();
  }
};
</script>

<style>
</style>
