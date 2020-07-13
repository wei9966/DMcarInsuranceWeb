
<template>
  <div class="main index">
    <div class="h_10"></div>
    <div class="h_10"></div>
    <div class="s_main1080 s_warp">
    </div>
    <div class="s_main1080 main" id="dropdown1">
      <div class="row-s selectingoffer">
        <div class="row s-selectingoffers-list">
          <div class="col-sm-3">
            <div class="title">
              <span class="span-sel">商业险选择</span>
              <span>
                <el-switch
                  class="demo"
                  v-model="myCheckbox"
                  active-color="#FF7F16"
                  inactive-color="#c0c0c0"
                  active-text="是"
                  inactive-text="否"
                  @click="handleClick"
                ></el-switch>
                <!-- <input type="checkbox" name="my-checkbox" data-on-text="是" data-off-text="否" checked> -->
                <!-- <input type="checkbox" class="btn-switch postion_ab"> -->
              </span>
              <span class="span-sel2">投保</span>
              <!-- <p>
                生效日期：
                <input type="text" name id class="form-control form_datetime" placeholder />
              </p> -->
            </div>
            <div v-show="myCheckbox" class="content">
              <h4>保障项目</h4>
              <ul class="list-group">
                <li v-for="item in carInsurs" class="list-group-item">
                  <span>{{item.ciName}}</span>
                  <img src="../../static/images/icon-c.png" alt />
                </li>
              </ul>
            </div>
          </div>

          <!--option1-->
          <div
            @click="dynamicPrice1($event)"
            class="col-sm-3 s-option s-right-sol s-border-left S-Checkbox-Radio1"
            id="fangan1"
            data-type="s-active"
          >
            <div>
              <div class="title">
                <h2>推荐方案 86%</h2>
                <h1>
                  ￥
                  <i>{{discountPrice1}}元</i>
                </h1>
                <h3>市场：{{taocanPrice1}}元</h3>
              </div>
              <div v-show="myCheckbox" class="content">
                <div class="row titles">
                  <div class="col-sm-6 text-center">
                    <span>保额</span>
                    <div
                      class="includeGroup"
                      v-for="(value,key,index) in insuranceInserIncludeOption1"
                      v-if="index>2 && index<len+3"
                    >
                      <span
                        class="text-center include1 panel"
                        style="width:90px;display:inline-block;line-height: 21px;"
                        v-if="value==1"
                      >投保</span>
                      <span
                        class="include1 panel"
                        style="width:90px;display:inline-block;line-height: 21px;"
                        v-else="value==0"
                      >不投保</span>
                    </div>
                  </div>
                  <div class="col-sm-6 text-center">
                    <span>保费(元)</span>
                    <div
                      v-for="item in carInsurs"
                      class="text-center"
                      style="margin-top:1.8px;margin-bottom:2.7px;"
                    >
                      <span style="color:#FF7F16">{{item.ciMoney}}</span>
                    </div>
                  </div>
                </div>
                <div class="row"></div>
              </div>
            </div>
          </div>
          <!--option2-->
          <div
            @click="dynamicPrice2"
            class="col-sm-3 s-option s-right-sol S-Checkbox-Radio1"
            data-type="s-active"
          >
            <div class="title">
              <h2>高性价比方案 56%</h2>
              <h1>
                ￥
                <i>{{discountPrice2}}元</i>
              </h1>
              <h3>市场：{{taocanPrice2}}元</h3>
            </div>
            <div v-show="myCheckbox" class="content">
              <div class="row titles">
                <div class="col-sm-6 text-center">
                  <span>保额</span>
                  <div
                    class="includeGroup"
                    v-for="(value,key,index) in insuranceInserIncludeOption2"
                    v-if="index>2 && index<len+3"
                  >
                    <span
                      class="text-center include1 panel"
                      style="width:90px;display:inline-block;line-height: 21px;"
                      v-if="value==1"
                    >投保</span>
                    <span
                      class="include1 panel"
                      style="width:90px;display:inline-block;line-height: 21px;"
                      v-else="value==0"
                    >不投保</span>
                  </div>
                </div>
                <div class="col-sm-6 text-center" style="float:right">
                  <span>保费(元)</span>
                  <div
                    v-for="item in carInsurs"
                    class="text-center"
                    style="margin-top:1.8px;margin-bottom:2.7px;"
                  >
                    <span style="color:#FF7F16">{{item.ciMoney}}</span>
                  </div>
                </div>
              </div>
              <div class="row"></div>
            </div>
          </div>
          <!--option-end-->
          <div class="option-SALI">
            <div class="col-sm-3">
              <div class="title">
                <span class="span-sel">交强险选择</span>
                <span>
                  <el-switch
                    class="demo"
                    v-model="value1"
                    active-color="#FF7F16"
                    active-text="是"
                    inactive-text="否"
                    disabled
                  ></el-switch>
                </span>
                <span class="span-sel2">投保</span>
                <!-- <p>
                  生效日期：
                  <input type="text" name id class="form-control form_datetime" placeholder />
                </p>-->
              </div>
            </div>
            <div class="col-sm-3 s-option">
              <div class="title">
                <h2>{{insuranceInserJiaoQiang.ciType}}</h2>
                <h1>市场：{{insuranceInserJiaoQiang.ciMoney}}元</h1>
              </div>
            </div>
            <div class="col-sm-3 s-option">
              <div class="title">
                <h2>{{insuranceInserCheChuan.ciType}}</h2>
                <h1>市场：{{insuranceInserCheChuan.ciMoney}}元</h1>
              </div>
            </div>
            <div class="col-sm-3 s-option s-border-right">
              <div class="title">
              </div>
            </div>
          </div>
        </div>
        <!--list-end-->
        <div class="h_10"></div>
        <div class="s_main1080 s_next s-total">
          <div class="row">
            <span class="s-span-title">方案总价</span>
            <div class="col-sm-2 text-right">
              <span class="s-span">
                <h5>商业险</h5>
                <h4>{{totalPriceShangYe}}</h4>
              </span>
            </div>
            <span>
              <img src="../../static/images/add.png" alt />
            </span>
            <div class="col-sm-2 text-center">
              <span class="s-span">
                <h5>{{insuranceInserJiaoQiang.ciType}}</h5>
                <h4>{{insuranceInserJiaoQiang.ciMoney}}</h4>
              </span>
            </div>
            <span>
              <img src="../../static/images/add.png" alt />
            </span>
            <div class="col-sm-2 text-left">
              <span class="s-span">
                <h5>{{insuranceInserCheChuan.ciType}}</h5>
                <h4>{{insuranceInserCheChuan.ciMoney}}</h4>
              </span>
            </div>
            <span>
              <img src="../../static/images/equal.png" alt />
            </span>
            <div class="col-sm-2 text-left">
              <span class="s-add-all">
                ￥
                <i>{{totalMoney}}</i>
              </span>
            </div>
          </div>
        </div>
        <!--s-total end-->
        <div class="h_10"></div>
        <div class="s_main1080 s_next next">
          <div class="last_btn text-right">
            <button type="submit" class="s-default-last" @click="last">上一步</button>
          </div>
          <div class="next_btn text-left">
            <button type="submit" class="s-default" @click="next">下一步</button>
          </div>
        </div>
      </div>
      <!--end row-s selectingoffer-->
    </div>
    <!--end s_main1080 main-->
    <footer class="foot">
      <p>车险出单平台 版权所有</p>
      <p>Copyright@2017 Chexianchudanpingtai</p>
    </footer>
  </div>
  <!--end main index-->
</template>

<script>
export default {
  data() {
    return {
      id: '',// 用户id
      carInfoCard:'',// 车辆车牌号
      carInfoOwner:'',// 车辆所有人
      carInfoTransfer:'',// 是否过户车辆
      carInfoFrameNo:'',// 车辆车架号
      carInfoEnigneNumber:'',// 车辆发动机号
      carInsurs: [],
      myCheckbox: false,
      value1: true,
      insuranceInserIncludeOption1: null,
      insuranceInserIncludeOption2: null,
      insuranceInserIncludeOption3: null,
      insuranceInserJiaoQiang: [],
      insuranceInserCheChuan: [],
      len: 0,
      money1: 0,
      money2: 0,
      money3: 0,
      taocanPrice1: 0,
      taocanPrice2: 0,
      taocanPrice3: 0,
      totalPriceShangYe: 0,
      flagByTaoCanId: 0,
      personnelInformation:null
      // totalMoney: 0
    };
  },
   name: "",
  watch: {
    //监测路由变化
    $route: "getParams"
  },
  mounted() {
    this.init();
  },
  methods: {
    getParams() {
      //取到路由带过来的参数
       this.personnelInformation=this.$route.params.personnelInformation;
       console.log("传过来的客户预信息",this.personnelInformation);
      },
    init() {
      //   $("[name='my-checkbox']").bootstrapSwitch();
      app._toggle();
      app.input_Name();
      $(".form_datetime").datepicker({
        format: "yyyy-mm-dd",
        language: "zh-CN",
        minView: "month",
        autoclose: false,
        todayBtn: false,
        startDate: "2013-02-14 10:00",
        minuteStep: 10
      });
      $(".btn-group").click(function() {
        var mydropdown = new app.customdropdown($(this));
      });
    },
    //跳转到下一个页面
    next: function(txt) {
      var personnelId=null;
      this.setInsuranceInserIncludeTaoCan();
      this.personnelInformation.insuranceInserIncludeId=this.flagByTaoCanId;
          var insuranceInserIncludeOption=null;
          this.axios.post('/api/policy/insurancePersonnelInformation/insert',this.personnelInformation).then(data=>{
              console.log("添加的预客户信息",data.data.data);
              personnelId=data.data.data.personnelId;
              this.$router.push({
                path: "/sign",
                name: "sign",
                params: {
                      flag:1,
                      personnelId:personnelId     
                  }
            });
          }); 
        
    },
    last: function(txt) {
      this.$router.push("login");
    },
    //获取所有商业险
    getinsur() {
      return new Promise((resolve, reject)=>{
        this.axios
        .get("/api/carInsur/insur/selectAllType", {
          params: { ciType: "商业险", ciState: 1 }
        })
        .then(data => {
          this.carInsurs = data.data.data;
          this.len = this.carInsurs.length;
          resolve(data.data.data);
        });
      });
    },
    //获取套餐1
    getInsuranceInserIncludeOption1() {
      return new Promise((resolve, reject)=>{
        this.axios
        .get("/api/carInsur/incloud/selectOne", {
          params: { id: 1 }
        })
        .then(data => {
          // this.carInsurs = data.data.data;
          let index = 0;
          let index2 = -3;
          for (const key in data.data.data) {
            if (
              key == "ci" + index &&
              data.data.data[key] == 1
            ) {
              if (index > 2) {
                this.money1 += this.carInsurs[index2].ciMoney;
                this.taocanPrice1 = this.money1;
              }
            }
            index++;
            index2++;
          }
          this.insuranceInserIncludeOption1 = data.data.data;
           resolve(data.data.data);
          console.log("套餐1的金额为" + this.money1);
        });
      });
    },
    //获取套餐2,并计算金额
    getInsuranceInserIncludeOption2() {
      return new Promise((resolve, reject)=>{
         this.axios
        .get("/api/carInsur/incloud/selectOne", {
          params: { id: 2 }
        })
        .then(data => {
          let index = 0;
          let index2 = -3;
          for (const key in data.data.data) {
            if (
              key == "ci" + index &&
              data.data.data[key] == 1
            ) {
              if (index > 2) {
                this.money2 += this.carInsurs[index2].ciMoney;
                this.taocanPrice2 = this.money2;
              }
            }
            index++;
            index2++;
          }
          this.insuranceInserIncludeOption2 = data.data.data;
           resolve(data.data.data);
          console.log("套餐2的金额为" + this.money2);
          
        });
      });
    },
    //获取套餐3
    getInsuranceInserIncludeOption3() {
      this.axios
        .get("/api/carInsur/incloud/selectOne", {
          params: { id: 3 }
        })
        .then(data => {
          this.insuranceInserIncludeOption3 = data.data.data;
        });
    },
    //获取自定义选择的套餐和金额
    getmeoryxuanze() {
      this.money3 = 0;
      this.taocanPrice3 = 0;
      let index = 0;
      let index2 = -3;
      for (const key in this.insuranceInserIncludeOption3) {
        if (
          key == "ci" + index &&
          this.insuranceInserIncludeOption3[key] == 1
        ) {
          if (index > 2) {
            this.money3 += this.carInsurs[index2].ciMoney;
            this.taocanPrice3 = this.money3;
            this.totalPriceShangYe = this.taocanPrice3;
          }
        }
        index++;
        index2++;
      }
      console.log("套餐3的金额为" + this.money3);
    },
    //获取交强险
    getinsuranceInserJiaoQiang() {
      this.axios
        .get("/api/carInsur/insur/selectOne", {
          params: { id: 1 }
        })
        .then(data => {
          this.insuranceInserJiaoQiang = data.data;
        });
    },
    //获取车船税
    getinsuranceInserCheChuan() {
      this.axios
        .get("/api/carInsur/insur/selectOne", {
          params: { id: 2 }
        })
        .then(data => {
          this.insuranceInserCheChuan = data.data;
        });
    },
    //插入套餐
    setInsuranceInserIncludeTaoCan() {
      console.log(this.insuranceInserIncludeOption3);
      if (this.flagByTaoCanId == 3) {
        this.axios
          .post(
            "/api/carInsur/incloud/inserttaocan",
            this.insuranceInserIncludeOption3
          )
          .then(data => {
            this.insuranceInserIncludeOption3 = data.data.data;
            this.flagByTaoCanId = this.insuranceInserIncludeOption3.iiId;
            console.log("插入的套餐", data.data.data);
          });
      }
    },
    // 动态传递价格
    dynamicPrice1($event) {
      this.flagByTaoCanId = 1;
      this.totalPriceShangYe = this.discountPrice1;
    },
    //套餐2,动态传递价格
    dynamicPrice2() {
      this.flagByTaoCanId = 2;
      this.totalPriceShangYe = this.discountPrice2;
    },
    // 点击显示、隐藏
    handleClick() {
      this.isShow = !this.isShow;
    },
   async getAllData(){
   await this.getinsur();
   await this.getInsuranceInserIncludeOption1();
   await this.getInsuranceInserIncludeOption2();
   await this.getinsuranceInserJiaoQiang();
   await this.getinsuranceInserCheChuan();
    }
  },
  created() {
    this.getAllData();
    this.getParams();
  },
  beforeCreate(){
      

  },
  //显示值
  computed: {
    discountPrice1() {
      return this.taocanPrice1 * 0.95;
    },
    discountPrice2() {
      return this.taocanPrice2 * 0.95;
    },
    totalMoney() {
      return (
        this.totalPriceShangYe +
        this.insuranceInserJiaoQiang.ciMoney +
        this.insuranceInserCheChuan.ciMoney
      );
    }
  }
};
</script>

<style>
.demo .el-switch__label {
  position: absolute;
  display: none;
  color: #fff;
}
/*打开时文字位置设置*/
.demo .el-switch__label--right {
  z-index: 1;
  right: -12px;
}
/*关闭时文字位置设置*/
.demo .el-switch__label--left {
  z-index: 1;
  left: 23px;
}
/*显示文字*/
.demo .el-switch__label.is-active {
  display: block;
}
.demo.el-switch .el-switch__core,
.el-switch .el-switch__label {
  width: 50px !important;
}
.include1 {
  border: 1px solid #ccc;
  height: 23px;
}
.includeGroup {
  /* border: 1px solid #6C6C6C; */
  /* width: 93px; */
  height: 33.54px;
  display: block;
  /* margin: 10px 0 10px 0; */
  margin-top: 0.9px;
  margin-bottom: 1.5px;
}
</style>