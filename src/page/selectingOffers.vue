
<template>
  <div class="main index">
    <div class="h_10"></div>
    <div class="h_10"></div>
    <div class="s_main1080 s_warp">
      <img src="../../static/images/setp2.png" alt />
    </div>
    <div class="s_main1080 main" id="dropdown1">
      <div class="row-s selectingoffer">
        <h5>
          <span class="pull-right">
            <img src="../../static/images/corporation_1.png" alt />
            <button class="s-button-1" @click="adjustBrand">调整品牌</button>
          </span>
          <img src="../../static/images/icon-car.png" alt class="selectingoffer-car-img" />
          <span>别克SGM7104LAA1轿车</span>
        </h5>
        <div class="row">
          <div class="col-sm-3 text-left">
            车主:
            <span>{{this.carInfoCard}}</span>
          </div>
          <div class="col-sm-2 text-left">
            是否过户:
            <span>否</span>
          </div>
          <div class="col-sm-3 text-left">
            车架号:
            <span>LS4AAB*******2393</span>
          </div>
          <div class="col-sm-3 text-left">
            发动机号:
            <span>B**C5</span>
          </div>
        </div>
        <div class="s-lines-style"></div>
        <div class="row s-span1">
          <span>
            所在省份：
            <span>上海市</span> 协商价值：
            <span>129900.0</span> 实际价值：
            <span>129900.0</span> 交通违法系数：
            <span>0.00</span>
          </span>
        </div>
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

          <!--option3-->
          <div
            @click="dynamicPrice3"
            class="col-sm-3 s-option s-right-sol S-Checkbox-Radio1"
            data-type="s-active"
          >
            <div class="title">
              <h2>私人订制 56%</h2>
              <h1>
                ￥
                <i>{{taocanPrice3}}</i>
              </h1>
              <h3></h3>
            </div>
            <div v-show="myCheckbox" class="content">
              <div class="content">
                <div class="row titles">
                  <div class="col-sm-6 text-center">
                    <span>保额</span>
                    <div
                      class="includeGroup"
                      v-for="(value,key,index) in insuranceInserIncludeOption3"
                      v-if="index>2 && index<len+3"
                    >
                      <!-- <span class=" text-center include1 panel" style="width:90px;display:inline-block;line-height: 21px;" v-if="value==1">投保</span>
                      <span class=" include1 panel" style="width:90px;display:inline-block;line-height: 21px;" v-else="value==0">不投保</span>-->

                      <select
                        style="width:90px;margin-top:10px;border-radius: 3px;text-align:center;text-align-last:center;"
                        @click="getmeoryxuanze"
                        v-model="insuranceInserIncludeOption3[key]"
                      >
                        <option value="0">不投保</option>
                        <option value="1">投保</option>
                      </select>
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
                <h2></h2>
                <h1></h1>
                <h3></h3>
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
      carInfoCard:'',
      carInfoOwner:'',
      carInfoTransfer:'',
      carInfoFrameNo:'',
      carInfoEnigneNumber:'',
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
      flagByTaoCanId: 0
      // totalMoney: 0
    };
  },
   name: "",
  watch: {
    //监测路由变化
    $route: "getParams"
  },
  created() {
    this.getParams();
  },
  mounted() {
    this.init();
  },
  methods: {
    getParams() {
      //取到路由带过来的参数
      var routerParams1 = this.$route.params.carInfoCard;
      //将数据放在当前组件的数据内
      this.carInfoCard = routerParams1;
      var routerParams2 = this.$route.params.carInfoOwner;
      this.carInfoOwner = routerParams2;
      var routerParams3 = this.$route.params.carInfoTransfer;
      this.carInfoTransfer = routerParams3;
      var routerParams4 = this.$route.params.carInfoFrameNo;
      this.carInfoFrameNo = routerParams4;
      var routerParams5 = this.$route.params.carInfoEnigneNumber;
      this.carInfoEnigneNumber = routerParams5;
      console.log("传过来的参数",this.$route.params.carInfoCard);
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
    next: function(txt) {
      this.setInsuranceInserIncludeTaoCan();
      if (this.flagByTaoCanId != 0) {
        this.$router.push({
          name: "verify",
          params: { iiId: this.flagByTaoCanId }
        });
      } else {
        this.$router.push("verify");
      }
    },
    last: function(txt) {
      this.$router.push("home");
    },
    adjustBrand: function() {
      this.$router.push("brand");
    },
    getinsur() {
      this.axios
        .get("/api/carInsur/insur/selectAllType", {
          params: { ciType: "商业险", ciState: 1 }
        })
        .then(data => {
          this.carInsurs = data.data.data;
          this.len = this.carInsurs.length;
          console.log("数据长度" + this.len);

          // console.log("返回的数据", data.data.data);
        });
    },
    getInsuranceInserIncludeOption1() {
      this.axios
        .get("/api/carInsur/incloud/selectOne", {
          params: { id: 1 }
        })
        .then(data => {
          // this.carInsurs = data.data.data;
          this.insuranceInserIncludeOption1 = data.data.data;
          let index = 0;
          let index2 = -3;
          for (const key in this.insuranceInserIncludeOption1) {
            // console.log("套餐清单1的值",this.insuranceInserIncludeOption1[key],key,key=='ci'+index,this.insuranceInserIncludeOption1[key]==1);
            if (
              key == "ci" + index &&
              this.insuranceInserIncludeOption1[key] == 1
            ) {
              if (index > 2) {
                this.money1 += this.carInsurs[index2].ciMoney;
                this.taocanPrice1 = this.money1;
                // console.log("类型2的金额",this.carInsurs[index2].ciMoney,"类型的名称",this.carInsurs[index2].ciName);
              }
            }
            index++;
            index2++;
          }
          console.log("套餐1的金额为" + this.money1);

          // console.log("套餐清单1的值",this.insuranceInserIncludeOption1);
          // console.log("返回的数据", data.data.data);
        });
    },
    getInsuranceInserIncludeOption2() {
      this.axios
        .get("/api/carInsur/incloud/selectOne", {
          params: { id: 2 }
        })
        .then(data => {
          // this.carInsurs = data.data.data;
          this.insuranceInserIncludeOption2 = data.data.data;
          let index = 0;
          let index2 = -3;
          for (const key in this.insuranceInserIncludeOption2) {
            // console.log("套餐清单1的值",this.insuranceInserIncludeOption1[key],key,key=='ci'+index,this.insuranceInserIncludeOption1[key]==1);
            if (
              key == "ci" + index &&
              this.insuranceInserIncludeOption2[key] == 1
            ) {
              if (index > 2) {
                this.money2 += this.carInsurs[index2].ciMoney;
                this.taocanPrice2 = this.money2;
                // console.log("类型1的金额",this.carInsurs[index2].ciMoney,"类型的名称",this.carInsurs[index2].ciName);
              }
            }
            index++;
            index2++;
          }
          console.log("套餐2的金额为" + this.money2);
          // console.log("返回", data.data.data);
        });
    },
    getInsuranceInserIncludeOption3() {
      this.axios
        .get("/api/carInsur/incloud/selectOne", {
          params: { id: 3 }
        })
        .then(data => {
          // this.carInsurs = data.data.data;
          this.insuranceInserIncludeOption3 = data.data.data;
          // console.log("返回", data.data.data);
        });
    },
    getmeoryxuanze() {
      this.money3 = 0;
      this.taocanPrice3 = 0;
      let index = 0;
      let index2 = -3;
      for (const key in this.insuranceInserIncludeOption3) {
        // console.log("套餐清单3的值",this.insuranceInserIncludeOption3[key],key,key=='ci'+index,this.insuranceInserIncludeOption3[key]==1);
        if (
          key == "ci" + index &&
          this.insuranceInserIncludeOption3[key] == 1
        ) {
          if (index > 2) {
            this.money3 += this.carInsurs[index2].ciMoney;
            this.taocanPrice3 = this.money3;
            // console.log("类型3的金额",this.carInsurs[index2].ciMoney,"类型的名称",this.carInsurs[index2].ciName);
            this.totalPriceShangYe = this.taocanPrice3;
          }
        }
        index++;
        index2++;
      }
      console.log("套餐3的金额为" + this.money3);
    },
    getinsuranceInserJiaoQiang() {
      this.axios
        .get("/api/carInsur/insur/selectOne", {
          params: { id: 1 }
        })
        .then(data => {
          // this.carInsurs = data.data.data;
          this.insuranceInserJiaoQiang = data.data;
          console.log("交强", data.data);
        });
    },
    getinsuranceInserCheChuan() {
      this.axios
        .get("/api/carInsur/insur/selectOne", {
          params: { id: 2 }
        })
        .then(data => {
          // this.carInsurs = data.data.data;
          this.insuranceInserCheChuan = data.data;
          console.log("车船税", data.data);
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
            // this.carInsurs = data.data.data;
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
    dynamicPrice2() {
      this.flagByTaoCanId = 2;
      this.totalPriceShangYe = this.discountPrice2;
    },
    dynamicPrice3() {
      this.flagByTaoCanId = 3;
      this.totalPriceShangYe = this.taocanPrice3;
    },
    // 点击显示、隐藏
    handleClick() {
      this.isShow = !this.isShow;
    }
  },
  created() {
    this.getinsur();
    
    this.getinsuranceInserJiaoQiang();
    this.getinsuranceInserCheChuan();
  },
  beforeMount(){
    this.getInsuranceInserIncludeOption1();
    this.getInsuranceInserIncludeOption2();
    this.getInsuranceInserIncludeOption3();
  },
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