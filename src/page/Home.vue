
<template>
  <div class="main index">
    <div class="h_10"></div>
    <div class="h_10"></div>
    <div class="s_main1080 s_warp">
      <img src="../../static/images/setp1.png" alt />
    </div>
    <div class="s_main1080 main" v-model="InsuranceCarInfo">
      <div class="row-s">
        <h5>录入车辆信息</h5>
        <div class="row">
          <div class="col-sm-12 text-left" style="margin-left:130px;">
            投保城市：
            <el-select v-model="value" placeholder="请选择省份" @change="getClause1">
              <el-option
                v-for="item in city"
                :key="item.baseAreaid"
                :label="item.name"
                :value="item.baseAreaid"
              ></el-option>
            </el-select>
            <el-select v-model="InsuranceCarInfo.cityId" placeholder="请选择市区" @change="getClause2">
              <el-option
                v-for="item in city1"
                :key="item.baseAreaid"
                :label="item.name"
                :value="item.baseAreaid"
              ></el-option>
            </el-select>
            <el-select v-model="value2" placeholder="请选择县区">
              <el-option
                v-for="item in city2"
                :key="item.baseAreaid"
                :label="item.name"
                :value="item.baseAreaid"
              ></el-option>
            </el-select>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6 text-left" style="margin-left:130px;" >
            车牌号码：
              <el-input
                placeholder="请输入车牌号码"
                v-model="InsuranceCarInfo.carInfoCard"
                :disabled="damutou"
                style="width:306px;">
              </el-input>
            <!-- <input type="text" name="" id="" v-model="InsuranceCarInfo.carInfoCard" class="form-control" disabled="false" /> -->
          </div>
        </div>
        <div style="position: absolute;left:500px;top:120px;">
           <div class="checkbox col-sm-2">
            <label>
              <el-checkbox v-model="checked" @change="dmtChange2">新车未上牌</el-checkbox>
              <!-- <input type="checkbox" class="s-checkbox" @change="dmtChange2" />新车未上牌 -->
            </label>
          </div>
          <div class="col-sm-4 indexes" style="margin-left:80px;width:400px">
            <input type="button" class="form-control s-input-btnbg" id value="信息检索" placeholder /> 只支持上海车牌和续保使用信息检索
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 text-left" style="margin-left:116px;">
            车辆所有人：
            <el-input
              placeholder="请输入车辆所有人"
              v-model="InsuranceCarInfo.carInfoOwner"
              style="width:306px;">
            </el-input>
            <!-- <input type="text" name="" id="" v-model="InsuranceCarInfo.carInfoOwner" class="form-control" disabled="damutou" /> -->
          </div>
        </div>
      </div>
      <div class="s-lines-style"></div>
      <div class="row-s">
        <h5>车辆信息</h5>
        <div class="row">
          <div class="col-sm-6 text-left" style="margin-left:102px;">
            车辆注册日期：
            <el-date-picker
              v-model="InsuranceCarInfo.carInfoRegisterDate"
              type="date"
              placeholder="选择日期"
              style="width: 306px;"
            ></el-date-picker>
          </div>
          <div
            class="checkbox col-sm-2 s-tap-index"
            data-val="example_1"
            style="position: absolute;left:540px;"
          >
            <img src="../../static/images/icon-c.png" alt />
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6 text-right">
            车架号/车辆识别代号/VIN码：
            <el-input
                placeholder="请输入车辆识别代号"
                v-model="InsuranceCarInfo.carInfoFrameNo"
                style="width:306px;">
            </el-input>
            <!-- <input type="text" name="" id="" v-model="InsuranceCarInfo.carInfoFrameNo" class="form-control"/> -->
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 text-right">
            发动机号：
            <el-input
                placeholder="请输入发动机号"
                v-model="InsuranceCarInfo.carInfoEnigneNumber"
                style="width:306px;">
            </el-input>
            <!-- <input type="text" name="" id="" v-model="InsuranceCarInfo.carInfoEnigneNumber" class="form-control"/> -->
          </div>
          <!-- <div class="checkbox col-sm-4 error">亲，您输入的发动机号不正确哦！</div> -->
        </div>
        <div class="row">
          <div class="col-sm-6 text-right">
            品牌型号：
             <el-input
                placeholder="请输入品牌型号"
                v-model="InsuranceCarInfo.carInfoBrand"
                style="width:306px;">
            </el-input>
            <!-- <input type="text" name="" id="" v-model="InsuranceCarInfo.carInfoConfigurationModel" class="form-control"/> -->
          </div>
          <!-- <div class="checkbox col-sm-4 error">亲，请参考行驶证品牌型号填写!</div> -->
        </div>
        <div class="row">
          <div class="col-sm-6 text-right">
            车辆类型：
             <el-input
                placeholder="请输入车辆类型"
                v-model="InsuranceCarInfo.carInfoConfigurationModel"
                style="width:306px;">
            </el-input>
            <!-- <input type="text" name="" id="" v-model="InsuranceCarInfo.carInfoBrand" class="form-control"/> -->
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 text-left" style="margin-left:29px;">
            购车发票日期：/初登日期：
            <el-date-picker
              v-model="InsuranceCarInfo.carInfoDateFirst"
              type="date"
              placeholder="选择日期"
              style="width: 306px;"
            ></el-date-picker>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 text-left" style="margin-left:102px;">
            是否过户车辆：
            <el-switch
              style="display:blank;left:10px;"
              v-model="flag1"
              active-color="#FF7F16"
              active-text="是"
              inactive-text="否"
               @change="dmtChange">
            </el-switch>
            <!-- <input type="checkbox" name="my-checkbox" v-model="InsuranceCarInfo.carInfoTransfer"  data-on-text="是" data-off-text="否" checked/> --> 
            <!-- <input type="checkbox" class="btn-switch s_top"> -->
            <span class="s-exmp-car s-tap-index" data-val="example_2">如何区别过户车？</span>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6 text-left" style="margin-left:130px;">
            过户日期：
            <el-date-picker
              v-model="InsuranceCarInfo.carInfoTransferDate"
              type="date"
              placeholder="选择日期"
              style="width: 306px;"
              :disabled="dmt">
            </el-date-picker>
          </div>
        </div>
        <div class="row-example_1-image example_1">
          <img src="../../static/images/example_1.png" />
        </div>
        <div class="row-example_1-image example_2">
          <img src="../../static/images/example_2.png" />
        </div>
      </div>
      <div class="s-lines-style"></div>

      <div class="row-s">
        <h5>个人信息</h5>
        <div v-show="isShow">
          <div class="row">
            <div class="col-sm-6 text-right">
              车主姓名：
              <!-- <input type="text" name="" id="" class="form-control form_datetime" placeholder="请输入开始时间"/> -->
              <el-input
                  style="width:60%"
                  placeholder="请输入个人姓名"
                  v-model="user.userName"
                   >
               </el-input>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 text-right">
              身份证号码:
              <el-input
                type="text"
                 style="width:60%"
                 placeholder="请输入个人身份证号码"
                 v-model="user.userCard"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 text-right">
              邮箱：
              <el-input type="text" 
               style="width:60%"
                placeholder="请输入邮箱"
                v-model="user.userEmail"/>
            </div>
            <div class="checkbox col-sm-4 error">
              <!-- 身份证号不正确，请重新输入 -->
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 text-right">
              联系地址:
              <el-input
                type="text"
                 style="width:60%"
                 placeholder="请输入联系地址"
                 v-model="user.userAddress"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 text-right">
              联系方式:
              <el-input
                type="text"
                 style="width:60%"
                 placeholder="请输入联系方式"
                 v-model="user.userPhone"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h_10"></div>
    <div class="s_main1080 s_next">
      <div class="next_btn">
        <button type="submit" class="s-default" v-on:click="next">快速报价</button>
      </div>
    </div>
    <footer class="foot">
      <p>车险出单平台 版权所有</p>
      <p>Copyright@2017 Chexianchudanpingtai</p>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "", //Login传过来的用户Id
      value: "",
      city: [],
      value1: "",
      city1: [],
      value2: "",
      city2: [],
      InsuranceCarInfo: {
        carInfoBrand: null, // 车辆品牌型号
        carInfoRegisterDate: null, // 车辆注册日期
        cityId: null, // 车辆投保城市
        carInfoCard: null, //车辆车牌号
        carInfoOwner: null, //车辆所有人
        carInfoFrameNo: null, //车辆车架号
        carInfoEnigneNumber: null, //车辆发动机号
        carInfoConfigurationModel: null, //车辆类型
        carInfoDateFirst: null, //初登日期
        carInfoTransfer: null, //是否过户车辆
        carInfoTransferDate: null, //过户日期
        userId: null, //用户id
      },
        z_name:"",//车主姓名
        z_idCard:"",//车主身份证
        z_Email:"",//车主emali
        isShow:"",
        //isShow1:"",
        value3:"",
      checked:false,
      flag1:true,
      dmt:false,
      damutou:false,
      personnelId:null,//客户预信息id
      personnel:null,//客户预信息
      user:{
          userName:'',//用户名
          userPhone:'',//手机号
          userEmail:'',//邮箱
          userSex:'',//性别 
          userAddress:'',//地址
          userCard:''//身份证号码
      },
      insuranceCarInfoId:0,
      userId:0,
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      isShow: true
    };
  },
  mounted() {
    this.init();
    this.getClause();
    this.getClause1();
    this.getClause2();
  },
  name: "",
  watch: {
    //监测路由变化
    $route: "getParams"
  },
  created() {
    this.getParams();
  },
  methods: {
    getParams() {
      //获取的用户id
      var routerParams = this.$route.query.id;
      //将数据放在当前组件的数据内
      this.id = routerParams;
      this.personnelId=this.$route.query.personnelId;
      this.getAllData();
    },
    dmtChange(data){
        if(data==false){
          this.dmt=true
        }else{
          this.dmt=false
        }
    },
    dmtChange2(data){
        if(data==false){
          this.damutou=false
        }else{
          this.damutou=true
        }
    },
    init() {
      $("[name='my-checkbox']").bootstrapSwitch();
      app._toggle();
      $(".form_datetime").datepicker({
        format: "yyyy-mm-dd",
        language: "zh-CN",
        minView: "month",
        autoclose: true,
        todayBtn: false,
        startDate: "2013-02-14 10:00",
        minuteStep: 10
      });
      $(".btn-group").click(function() {
        var mydropdown = new app.customdropdown($(this));
      });
    },
    next: function(txt) {
      if (this.flag1 == true) {
        this.InsuranceCarInfo.carInfoTransfer = 1;
      } else {
        this.InsuranceCarInfo.carInfoTransfer = 0;
      }
      if (this.valid()) {
          this.addData();
      }
      //传值下一个页面
      //  this.$router.push('selectingOffers')
    },
    addDataCar(){//当前页面的信息添加进入数据库
        return new Promise((resolve,reject)=>{
            this.axios
        .post(
          "/api/insuranceCity/insuranceCarInfo/insertOne",
          this.InsuranceCarInfo
        )
        .then(data => {
              this.insuranceCarInfoId=data.data.data.insuranceCarInfoId;
              this.InsuranceCarInfo=data.data.data;
              resolve(data.data.data);
        });
        })
    },
    addDataUser(){
       return new Promise((resolve,reject)=>{
            this.axios
        .post(
          "/api/user/insuranceUser/insertUser",
          this.user,{
           headers: {
              token: window.sessionStorage.getItem("token")
                }
              }
        )
        .then(data => {
              this.userId=data.data.data.userId;
              resolve(data);
        });
        })
    },
    async addData(){
      await this.addDataUser();
      await this.addDataCar();
      this.Home();
    },
    getClause(){
        this.axios.get('/api/insuranceCity/insuranceCity/selectOne2',{params:{parentid:0}}).then(data=>{
            this.city=data.data.data
         });
      },
      getClause1(data){
        this.InsuranceCarInfo.cityId='',
               this.value2='',
        this.axios.get('/api/insuranceCity/insuranceCity/selectOne2',{params:{parentid:data}}).then(data=>{
            this.city1=data.data.data
         });
      },
      getClause2(data){
        this.value2='',
        this.axios.get('/api/insuranceCity/insuranceCity/selectOne2',{params:{parentid:data}}).then(data=>{
            this.city2=data.data.data
         });
      },
      getPersonnelInfo(){
          return new Promise((resolve, reject)=>{
              this.axios.get('/api/policy/insurancePersonnelInformation/selectOne',{params:{id:this.personnelId}}).
              then(data=>{
                  this.personnel=data.data;
                  this.InsuranceCarInfo.carInfoCard=this.personnel.personnelLicensePlate;
              resolve(data.data);
         });
          });
      },
       Home() {
        this.$router.push({
        name: "selectingOffers",
        path: "/selectingOffers",
        query: {
          InsuranceCarInfo: JSON.stringify(this.InsuranceCarInfo),
          userId:this.userId,
          // carInfoCard: this.InsuranceCarInfo.carInfoCard,
          // carInfoOwner: this.InsuranceCarInfo.carInfoOwner,
          // carInfoTransfer: this.InsuranceCarInfo.carInfoTransfer,
          // carInfoFrameNo: this.InsuranceCarInfo.carInfoFrameNo,
          // carInfoEnigneNumber:this.InsuranceCarInfo.carInfoEnigneNumber
        }
      });
    },
    valid(){
      let frameNoValid=/[\dA-HJ-NPR-Z]{17}/;//车辆识别码
      let carInfoCardValid=/^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/;
      //验证所有正则
      //城市
      if (this.InsuranceCarInfo.cityId==''||this.InsuranceCarInfo.cityId==null) {
          this.errorMessage("请勾选投你的投保城市");
          return false;
      }
      //车牌号码
      if (!this.damutou) {
          if (this.InsuranceCarInfo.carInfoCard==''||this.InsuranceCarInfo.carInfoCard==null) {
            this.errorMessage("请输入您的车牌号码");
            return false;
        }else{
            if(!carInfoCardValid.test(this.InsuranceCarInfo.carInfoCard)){
              this.errorMessage("您输入的车牌号不规范哦");
              return false;
          }
        }
      }
      //车辆所有人
      if (this.InsuranceCarInfo.carInfoOwner==''||this.InsuranceCarInfo.carInfoOwner==null) {
          this.errorMessage("请输入车辆所有人");
          return false;
      }
      //车辆注册日期
      if (this.InsuranceCarInfo.carInfoRegisterDate==''||this.InsuranceCarInfo.carInfoRegisterDate==null) {
          this.errorMessage("请选择您的车辆注册日期");
          return false;
      }
      //车辆识别代号
      if (this.InsuranceCarInfo.carInfoFrameNo==''||this.InsuranceCarInfo.carInfoFrameNo==null) {
           this.errorMessage("请输入车辆识别代号");
          return false;
      }else{
        if (!frameNoValid.test(this.InsuranceCarInfo.carInfoFrameNo)) {
                this.errorMessage("2002年后车架号为17位哦");
              return false;
          }
      }
      //发动机号
      if (this.InsuranceCarInfo.carInfoEnigneNumber==''||this.InsuranceCarInfo.carInfoEnigneNumber==null) {
          this.errorMessage("请输入发动机号");
          return false;
      }
      //品牌型号
      if (this.InsuranceCarInfo.carInfoBrand==''||this.InsuranceCarInfo.carInfoBrand==null) {
          this.errorMessage("请输入品牌型号");
          return false;
      }
      //车辆类型
      if (this.InsuranceCarInfo.carInfoConfigurationModel==''||this.InsuranceCarInfo.carInfoConfigurationModel==null) {
          this.errorMessage("请输入车辆类型");
          return false;
      }
      //初登日期
      if (this.InsuranceCarInfo.carInfoDateFirst==''||this.InsuranceCarInfo.carInfoDateFirst==null) {
          this.errorMessage("请输入你的初登日期");
          return false;
      }
        //过户日期
      if (!this.dmt) {
          if (this.InsuranceCarInfo.carInfoTransferDate==''||this.InsuranceCarInfo.carInfoTransferDate==null) {
          this.errorMessage("请输入你的过户日期");
          return false;
      }
      //用户
      if (this.user.userName==''||this.user.userName==null) {
          this.errorMessage("请输入用户名");
          return false;
      }
      //手机号
      if (this.user.userPhone==''||this.user.userPhone==null) {
          this.errorMessage("请输入手机号");
          return false;
      }
      //邮箱
      if (this.user.userEmail==''||this.user.userEmail==null) {
          this.errorMessage("请输入邮箱");
          return false;
      }
      //地址
      if (this.user.userAddress==''||this.user.userAddress==null) {
          this.errorMessage("请输入地址");
          return false;
      }
      //身份证号码
      if (this.user.userCard==''||this.user.userCard==null) {
          this.errorMessage("请输入身份证号码");
          return false;
      }
      }
      return true;
    },
    errorMessage(data){
        this.$message({
           showClose: true,
          message: `${data}`,
          type: 'error',
          duration:1500
        });
    },
    async getAllData(){
        await this.getPersonnelInfo();
    }
  }
};
</script>
<style>
</style>