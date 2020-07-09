
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
              :disabled="damutou"
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
              style="width: 306px;">
            </el-date-picker>
          </div>
          <div class="checkbox col-sm-2 s-tap-index" data-val="example_1" style="position: absolute;left:540px;">
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
          <div class="checkbox col-sm-4 error">2002年后车架号为17位哦</div>
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
          <div class="checkbox col-sm-4 error">亲，您输入的发动机号不正确哦！</div>
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
          <div class="checkbox col-sm-4 error">亲，请参考行驶证品牌型号填写!</div>
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
              style="width: 306px;">
            </el-date-picker>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 text-left" style="margin-left:102px;">
            是否过户车辆：
            <el-switch
              style="display:blank;left:10px;"
              v-model="flag1"
              active-color="#13ce66"
              inactive-color="#ff4949"
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
        <h5>其它投保信息</h5>
          <div style="position:absolute; margin-left:200px;margin-top:-40px">
        <el-switch v-model="isShow" active-text="是" inactive-text="否"></el-switch>
        <!-- <div style="position:absolute; margin-left:200px;margin-top:-40px"> 
                     <input type="checkbox" v-model="isShow" name="my-checkbox" data-on-text="是" data-off-text="否" checked > 
                    
        </div>-->
          </div>
          <div v-show="isShow">
            
          <div class="row">
            <div class="col-sm-6 text-right">
              起保日期：
              <!-- <input type="text" name="" id="" class="form-control form_datetime" placeholder="请输入开始时间"/> -->
              <el-date-picker
                  style="width:308px"
                  v-model="value3"
                   align="right"
                   type="date"
                  placeholder="选择日期"
                   :picker-options="pickerOptions">
               </el-date-picker>
            </div>
            <div class="checkbox col-sm-2 s-tap-index" data-val="example_3">
              <img src="../../static/images/icon-c.png" alt />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 text-right">
              车主姓名：
              <input type="text" name id class="form-control" v-model="z_name"/>
            </div>
          </div>
          <div class="row s-input-data-3">
            <div class="col-sm-3 text-right">
              证件号码：
              <div class="btn-group" role="group">
                <button
                  type="button"
                  class="btn btn-default dropdown-toggle s-select-with-1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  请选择
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a>身份证</a>
                  </li>
                  <li>
                    <a>临时身份证</a>
                  </li>
                  <li>
                    <a>驾驶证</a>
                  </li>
                  <li>
                    <a>外国人出入境证</a>
                  </li>
                  <li>
                    <a>其他</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-4">
              <input type="text" name id class="form-control"  v-model="z_idCard"/>
            </div>
            <div class="checkbox col-sm-4 error">
                <!-- 身份证号不正确，请重新输入 -->
                </div> 
          </div>
          <div class="row">
            <div class="col-sm-6 text-right">
              Email：
              <input type="text" name id class="form-control"  v-model="z_Email"/>
            </div>
          </div>
          <div class="row-example_1-image example_3">
            <img src="../../static/images/example_3.png" />
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
        carInfoBrand: "", // 车辆品牌型号
        carInfoRegisterDate: "", // 车辆注册日期
        cityId: "", // 车辆投保城市
        carInfoCard: "", //车辆车牌号
        carInfoOwner:"", //车辆所有人
        carInfoFrameNo: "", //车辆车架号
        carInfoEnigneNumber: "", //车辆发动机号
        carInfoConfigurationModel: "", //车辆类型
        carInfoDateFirst: "", //初登日期
        carInfoTransfer: "", //是否过户车辆
        carInfoTransferDate: "", //过户日期
        userId: "", //用户id
      },
        z_name:"",//车主姓名
        z_idCard:"",//车主身份证
        z_Email:"",//车主emali
        isShow:"",
        //isShow1:"",
        value3:"",
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
      checked:false,
      flag1:true,
      dmt:false,
      damutou:false,
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
          }]
         },
         
         isShow:true,
    };
  },
  mounted() {
    this.init();
    this.getClause();
    this.getClause1();
    this.getClause2();
    this.otherinfo();
  },
  name: "",
  watch: {
    //监测路由变化
    $route: "getParams"
  },
  created() {
    this.getParams();
    this.otherinfo();
    this.otherinfo2();

  },
  methods: {
    getParams() {
      //取到路由带过来的参数
      console.log("路由传过来的参数", this.$route.params.id);
      var routerParams = this.$route.params.id;
      //将数据放在当前组件的数据内
      this.id = routerParams;
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
      console.log("点击了下一页");
      if (this.flag1==true) {
        this.InsuranceCarInfo.carInfoTransfer=1;
      }else{
        this.InsuranceCarInfo.carInfoTransfer=0;
      }
      this.axios
        .post("/api/insuranceCity/insuranceCarInfo/insertOne",this.InsuranceCarInfo)
        .then(data => {
          console.log();
          
        });
         //传值下一个页面
         console.log(this.InsuranceCarInfo);
         console.log("asdas"+this.InsuranceCarInfo.carInfoTransfer);
         
         this.Home()
      //  this.$router.push('selectingOffers')
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
       Home() {
        this.$router.push({
        name: "selectingOffers",
        path: "/selectingOffers",
        params: {
          InsuranceCarInfo: this.InsuranceCarInfo,
          // carInfoCard: this.InsuranceCarInfo.carInfoCard,
          // carInfoOwner: this.InsuranceCarInfo.carInfoOwner,
          // carInfoTransfer: this.InsuranceCarInfo.carInfoTransfer,
          // carInfoFrameNo: this.InsuranceCarInfo.carInfoFrameNo,
          // carInfoEnigneNumber:this.InsuranceCarInfo.carInfoEnigneNumber
          //
        }
      });
    },
    otherinfo(){
       this.axios.get('api/otherInsur/info/selectTwo',{params:{id:this.id}}).then(data=>{
            // console.log("返回的数据",data.data);
            // for (let index = 0; index < data.length; index++) {
            //     console.log("遍历的数据",data.data[index]);
                
            // }
            console.log("日期",data.data);
            if(data.data.code==10001){
                this.isShow=false
                console.log("显示。。。。。。",this.isShow);
                
            }else{
                this.isShow=true
                 this.value3=data.data.data[0].icAddtime
            }
           
            
       });
   },
   otherinfo2(){
    this.axios.get('/api/user/insuranceUser/selectOne',{params:{id:this.id}}).then(data=>{
            this.person = data.data.data;
            this.z_name=this.person.userName
            this.z_idCard=this.person.userCard
            this.z_Email=this.person.userEmail
       });
   }
  }
};
</script>
<style>
</style>