<!--  -->
<template>
 <div class="main index">
        <div class="h_10"></div>
        <div class="s_main1080 main detial">
            <div class="row-s selectingoffer">
                <div class="row s-pay-header">
                    <div class="col-sm-6">
                        <h4>投保单详情</h4>
                    </div>
                    <div class="col-sm-6 text-right">
                        <img src="../../static/images/corporation_1.png" alt="">
                        <span>太平车险</span>
                    </div>
                </div>
                <div class="s-lines-style"></div>
                <div class="row">
                    <h4>投保人信息</h4>
                    <div class="col-sm-12 text-left">
                        姓名:
                        <span>{{insuranceUser.userName}}</span>
                    </div>
                    <div class="col-sm-6 text-left">
                        证件类型:
                        <span>身份证</span>
                    </div>
                    <div class="col-sm-6 text-left">
                        证件号:
                        <span>{{insuranceUser.userCard}}</span>
                    </div>
                    <div class="col-sm-6 text-left">
                        手机号:
                        <span>13900000000</span>
                    </div>
                    <div class="col-sm-6 text-left">
                        邮箱:
                        <span>{{insuranceUser.userEmail}}</span>
                    </div>
                </div>
                <div class="s-lines-style"></div>
                <div class="row">
                    <h4>被保人信息</h4>
                    <div class="col-sm-12 text-left">
                        姓名:
                        <span>张三</span>
                    </div>
                    <div class="col-sm-6 text-left">
                        证件类型:
                        <span>身份证</span>
                    </div>
                    <div class="col-sm-6 text-left">
                        证件号:
                        <span>242525198806122632</span>
                    </div>
                    <div class="col-sm-6 text-left">
                        手机号:
                        <span>13900000000</span>
                    </div>
                    <div class="col-sm-6 text-left">
                        邮箱:
                        <span>13900000000@163.com</span>
                    </div>
                </div>
                <div class="s-lines-style"></div>
                <div class="row">
                    <h4>车辆信息</h4>
                    <div class="col-sm-6 text-left">
                        车牌号:
                        <span>{{insuranceCarInfo.carInfoCard}}</span>
                    </div>
                    <div class="col-sm-6 text-left">
                        厂牌型号:
                        <span>{{insuranceCarInfo.carInfoConfigurationModel}}</span>
                    </div>
                    <div class="col-sm-6 text-left">
                        车架号:
                        <span>{{insuranceCarInfo.carInfoFrameNo}}</span>
                    </div>
                    <div class="col-sm-6 text-left">
                        发动机号:
                        <span>{{insuranceCarInfo.carInfoEnigneNumber}}</span>
                    </div>
                    <div class="col-sm-6 text-left">
                        初登日期:
                        <span>{{insuranceCarInfo.carInfoDateFirst}}</span>
                    </div>
                    <div class="col-sm-6 text-left">
                        座位:
                        <span>5</span>
                    </div>
                </div>
                <div class="s-lines-style"></div>
                <div class="row">
                    <h4>车主信息</h4>
                    <div class="col-sm-12 text-left">
                        姓名:
                        <span>{{insuranceDrivingLicense.drivingLicenseName}}</span>
                    </div>
                    <div class="col-sm-6 text-left">
                        证件类型:
                        <span>身份证</span>
                    </div>
                    <div class="col-sm-6 text-left">
                        证件号:
                        <span>{{insuranceDrivingLicense.drivingLicenseCard}}</span>
                    </div>
                </div>
                <div class="s-lines-style"></div>
                <div class="row">
                    <h4>保险日期</h4>
                    <div class="col-sm-12 text-left">
                        2018年1月10日0时至2019年1月9日24时止
                    </div>
                </div>
                <div class="s-lines-style"></div>
                <div class="row">
                    <h4>商业险保险责任及保费</h4>
                    <div class="col-sm-5 text-left">
										<h4>商业险险种</h4>
									</div>
									<div class="col-sm-3 text-left">
										<h4>保额</h4>
									</div>
									<div class="col-sm-3 text-right">
										<h4>保费(元)</h4>
									</div>
                    <div class="row-s" v-for="(carInsur,index) in carInsurs" v-if="index in includeOption">
									<div class="col-sm-5 text-left">
										{{carInsur.ciName}}
									</div>
									<div class="col-sm-3 text-left">
										{{carInsur.maxmoney}}
									</div>
									<div class="col-sm-3 text-right">
										{{carInsur.ciMoney}}
									</div>
								</div>    
                </div>
                <div class="s-lines-style"></div>
                <div class="row">
                    <h4>交强险和车船税责任保费</h4>
                    <div class="col-sm-5 text-left">
									</div>
									<div class="col-sm-3 text-left">
										<h4>保额</h4>
									</div>
									<div class="col-sm-3 text-right">
										<h4>保费(元)</h4>
									</div>
                    <div class="row-s">
									<div class="col-sm-5 text-left">
										{{insuranceInserJiaoQiang.ciName}}
									</div>
									<div class="col-sm-3 text-left">
										{{insuranceInserJiaoQiang.maxmoney}}
									</div>
									<div class="col-sm-3 text-right">
										{{insuranceInserJiaoQiang.ciMoney}}
									</div>
								</div>
								<div class="row-s">
									<div class="col-sm-5 text-left">
										{{insuranceInserCheChuan.ciName}}
									</div>
									<div class="col-sm-3 text-left">
										{{insuranceInserCheChuan.maxmoney}}
									</div>
									<div class="col-sm-3 text-right">
										{{insuranceInserCheChuan.ciMoney}}
									</div>
								</div>
                </div>
                <div class="s-lines-style"></div>
                <div class="s_main1080 detial s_next s-total">
                    <div class="row">
                        <h4 class="text-left">您需要缴费的保费</h4>
                        <div class="col-sm-2 text-right s-margin-63">
                            <span class="s-span">
                                <h5>商业险</h5>
                                <h4>{{money*0.95}}</h4>
                            </span>
                        </div>
                        <span>
                            <img src="../../static/images/add.png" alt="">
                        </span>
                        <div class="col-sm-2 text-center">
                            <span class="s-span">
                                <h5>交强险</h5>
                                <h4>{{insuranceInserJiaoQiang.ciMoney}}</h4>
                            </span>
                        </div>
                        <span>
                            <img src="../../static/images/add.png" alt="">
                        </span>
                        <div class="col-sm-2 text-left">
                            <span class="s-span">
                                <h5>车船税</h5>
                                <h4>{{insuranceInserCheChuan.ciMoney}}</h4>
                            </span>
                        </div>
                        <span>
                            <img src="../../static/images/equal.png" alt="">
                        </span>
                        <div class="col-sm-2 text-left">
                            <span class="s-add-all">￥
                                <i>{{totalMoney}}</i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="row s-detial-back">
                    <div class="col-sm-12 text-center">
                        <button class="s-button-1" @click="back">关闭窗口</button>
                    </div>

                </div>
            </div>

        </div>
        <div class="h_10"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        insuranceUser:null,//投保人(用户)
        insuranceInsured:null,//被保险人
        carInsurs:null,//所有保险类型
        insuranceInserIncludeOption:null,//保险套餐
        insuranceInserJiaoQiang:null,//交强险
        insuranceInserCheChuan:null,//车船税
        insuranceDrivingLicense:null,//行驶证车主
        InsuranceCarInfo:null,//车辆信息
        includeOption:[],//套餐清单下标
        totalMoney:0,//套餐总金额
        money:0,
        insuranceDrivingLicenseId:null,//车主id

    };
  },
  watch: {
    //监测路由变化
    $route: "getParams"
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {},
    back: function(txt) {
      this.$router.go(-1);
    },
     getParams() {
      this.insuranceUser=JSON.parse(this.$route.query.insuranceUser);//投保人
      console.log("详情页面的用户",this.insuranceUser);
      this.insuranceCarInfo=JSON.parse(this.$route.query.insuranceCarInfo);//车辆信息
      this.insuranceInsured=this.$route.query.insuranceInsured;//被保险人
      this.insuranceInserIncludeOption=JSON.parse(this.$route.query.insuranceInserIncludeOption);//保险清单
      this.insuranceDrivingLicense=this.$route.query.insuranceDrivingLicense;//车主信息
      console.log("投保人",this.insuranceUser);
      console.log("被保险人",this.insuranceInsured);
      console.log("保险清单",this.insuranceInserIncludeOption);
     },
     getIncludeMoney(){
        return new Promise((resolve, reject)=>{
             let index = 0;
				  let index2 = -3;
		 for (const option in this.insuranceInserIncludeOption){		
		  	 if (option == "ci" + index &&this.insuranceInserIncludeOption[option] == 1) {
				if (index>2) {
                    this.includeOption.push(index2);
                    this.money+=this.carInsurs[index2].ciMoney;
				}	
			}
				index++;
				index2++;	
         }
         console.log("金额",this.money);
         this.totalMoney=(this.insuranceInserCheChuan.ciMoney+this.insuranceInserJiaoQiang.ciMoney)+(this.money*0.95);
         resolve(this.money);
        })
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
          console.log("数据长度" + this.len);
          resolve(data.data.data);
          // console.log("返回的数据", data.data.data);
        });
      });
	},
	//获取交强险
	getinsuranceInserJiaoQiang() {
      return new Promise((resolve, reject)=>{
            this.axios
        .get("/api/carInsur/insur/selectOne", {
          params: { id: 1 }
        })
        .then(data => {
          this.insuranceInserJiaoQiang = data.data;
           resolve(data.data);
        });
      })
    },//获取车船税
    getinsuranceInserCheChuan() {
      return new Promise((resolve, reject)=>{
          this.axios
        .get("/api/carInsur/insur/selectOne", {
          params: { id: 2 }
        })
        .then(data => {
          // this.carInsurs = data.data.data;
          this.insuranceInserCheChuan = data.data;
           resolve(data.data);
        });
      })
    },
    getInsuranceDrivingLicense(){
        return new Promise((resolve, reject)=>{
          this.axios
        .get("/api/policy/insuranceDrivingLicense/selectOne", {
          params: { id:this.insuranceDrivingLicenseId}
        })
        .then(data => {
          // this.carInsurs = data.data.data;
        //   this.insuranceDrivingLicense = data.data.data;
          console.log("车主信息",data.data.data);
           resolve(data.data);
        });
      })
    },
    async getAllData(){
		 await this.getinsur();
		 await this.getinsuranceInserJiaoQiang();
         await this.getinsuranceInserCheChuan();
         await this.getInsuranceDrivingLicense();
         await this.getIncludeMoney();
     },
  },
  created() {
      this.getAllData();
      this.getParams();
  },
  mounted(){
     
  } 
 
     
};
</script>
<style>

</style>