<template>
  <div class="main login">
    <div class="s-form">
      <h5>缔梦车险在线报价</h5>
      <form class="form-horizontal">
        <div class="form-group">
          <label for class="col-sm-4 control-label">车辆牌号：</label>
          <div class="col-sm-4">
            <el-input placeholder="请输入车牌号"
             v-model="personnelInformation.personnelLicensePlate"
            :disabled="personnelInformation.personnelNewCarFlag"
            style="width:100%"/>
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
      <p>Copyright@2020 Chexianchudanpingtai</p>
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
          personnelNewCarFlag:false//是否
      },
      evaluations:[]
    };
  },
  methods: {
    //手机号验证
    next() {
      //手机号
            if (!this.valid()) {
                return;
            }
            this.updatedlogin();
    },
    //传值下一个页面
    updatedlogin() {
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
    //获取金额
    getEvaluations(){
      return new Promise((resolve,reject)=>{
        this.axios.get('/api/policy/insuranceEvaluation/select').then(data=>{
            this.evaluations=data.data.data;
            resolve(data.data.data);
        });
      })
    },
    valid(){
      let carInfoCardValid=/^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/;
      //车牌号码
      if (!this.personnelInformation.personnelNewCarFlag) {
          if (this.personnelInformation.personnelLicensePlate==''||this.personnelInformation.personnelLicensePlate==null) {
            this.errorMessage("请输入您的车牌号码");
            return false;
        }else{
            if(!carInfoCardValid.test(this.personnelInformation.personnelLicensePlate)){
              this.errorMessage("您输入的车牌号不规范哦");
              return false;
          }else{
            return true;
          }
        }
      }else{
        return true;
      }
    },
    async getAllData(){
     await this.getEvaluations();
    },
    errorMessage(data){
        this.$message({
           showClose: true,
          message: `${data}`,
          type: 'error',
          duration:1500
        });
    },
  },
  created() {
    this.getAllData();
  }
};
</script>

<style>
</style>
