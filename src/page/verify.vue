<!--  -->
<template>
	<div class="main index">
		<div class="h_10"></div>
		<div class="h_10"></div>
		<div class="s_main1080 s_warp">
			<img src="../../static/images/setp3.png" alt="">
		</div>
		<div class="h_10"></div>
		<div class="s_main1080 main">
			<div class="row-s selectingoffer verify">
				<div class="row s-bottom">
					<img src="../../static/images/corporation_1.png" alt="">
					<span>太平车险</span>
				</div>
				<!-- 报价信息-->
				<div class="row">
					<div class="panel panel-info">
						<div class="panel-heading">
							<h4 class="panel-title">
								<a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
									报价信息
									<button class="s-button-1 pull-right" id="collapseThree-text">展开</button>
									<span class="pull-right">应付金额：
										<span>{{totalMoney}}</span>
									</span>
								</a>
							</h4>
						</div>
						<div id="collapseThree" class="panel-collapse collapse">
							<div class="panel-body">
								<div class="row-s title">
									<div class="col-sm-5 text-left">
										商业险险种
										<span>生效日期2018-01-10 </span>
									</div>
									<div class="col-sm-3 text-left">
										保额
									</div>
									<div class="col-sm-3 text-right">
										保费(元)
									</div>
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
								<div>

								</div>
							</div>
						</div>
					</div>

				</div>

				<!-- 报价信息end-->
				<!--车辆信息-->
				<div class="row car_inf">
					<div class="panel panel-info">
						<div class="panel-heading">
							<h4 class="panel-title">
								<a data-toggle="collapse" data-parent="#accordion" href="#collapseThree2">
									车辆信息
									<button class="s-button-1 pull-right"  id="collapseThree2-text">展开</button>
									<span class="pull-right">修改车辆信息</span>
								</a>
							</h4>
						</div>
						<div id="collapseThree2" class="panel-collapse collapse">
							<div class="panel-body">
								<div class="row-s">
									<div class="col-sm-4 text-left">
										投保城市：
										<span>{{insuranceCarInfo.cityId}}</span>
									</div>
									<div class="col-sm-4 text-left">
										车牌号：
										<span>{{insuranceCarInfo.carInfoCard}}</span>
									</div>
									<div class="col-sm-4 text-left">
										车辆配置型号：
										<span>{{insuranceCarInfo.carInfoBrand}}</span>
									</div>
								</div>

								<div class="row-s">
									<div class="col-sm-4 text-left">
										车架号/VIN码：
										<span>{{insuranceCarInfo.carInfoFrameNo}}</span>
									</div>
									<div class="col-sm-4 text-left">
										发动机号：
										<span>{{insuranceCarInfo.carInfoEnigneNumber}}</span>
									</div>
									<div class="col-sm-4 text-left">
										车价：
										<span>76400.0</span>
									</div>
								</div>

								<div class="row-s">
									<div class="col-sm-4 text-left">
										车辆注册日期：
										<span>{{insuranceCarInfo.carInfoRegisterDate}}</span>
									</div>
									<div class="col-sm-4 text-left">
										座位数：
										<span>5</span>
									</div>
									<div class="col-sm-4 text-left">
									</div>
								</div>

								<div class="row-s">
									<div class="col-sm-4 text-left">
										车主姓名：
										<span>{{insuranceCarInfo.carInfoOwner}}</span>
									</div>
									<div class="col-sm-4 text-left">
										证件号码：
										<span>123456789987654321</span>
									</div>
									<div class="col-sm-4 text-left">
									</div>
								</div>



							</div>
						</div>
					</div>

				</div>
				<!--车辆信息end-->
				<div class="row-s s-verify-table">
					<h5>人员信息</h5>
					<div v-model="insuranceUser">
					<div class="row s-verify-title">
						<div class="col-sm-6 text-left">
							投保人
							<span>保费发票抬头为投保人</span>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-2 text-right">
							姓名:
						</div>
						<div class="col-sm-6 text-left">
							<input type="text" name="" id="" v-model="insuranceUser.userName" class="form-control" placeholder="" value="张三">
						</div>
					</div>
					<div class="row s-input-data-3">
						<div class="col-sm-2 text-right">
							证件号码：
						</div>
						<div class="col-sm-3 text-left">
							<div class="btn-group" role="group">
								<button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
								 aria-expanded="false">
									居民身份证
									<span class="caret"></span>
								</button>
								<!-- <ul class="dropdown-menu">
									<li>
										<a>Dropdown link</a>
									</li>
									<li>
										<a>Dropdown link</a>
									</li>
								</ul> -->
							</div>
						</div>
						<div class="col-sm-4">
							<input type="text" name="" v-model="insuranceUser.userCard" id="" class="form-control">
						</div>

					</div>
					<div class="row">
						<div class="col-sm-2 text-right">
							Email：
						</div>
						<div class="col-sm-6 text-left">

							<input type="text" name="" id="" v-model="insuranceUser.userEmail" class="form-control">
						</div>
					</div>
					<div class="row">
						<div class="col-sm-2 text-right">
							地址：
						</div>
						<div class="col-sm-9 text-left">
							<input type="text" name="" v-model="insuranceUser.userAddress" id="" class="form-control">
						</div>
					</div>
					</div>
					<div class="row s-verify-title">
						<div class="col-sm-6 text-left">
							被保险人
							<input type="checkbox" v-model="isInsuranceInsured" class="s-checkbox S-Checkbox-Radio s-checkbox-multiple-yes S-Checkbox-Radio1" data-type="s-checkbox-multiple-yes">
							<span>同投保人</span>
						</div>
					</div>
				<div v-show="!isInsuranceInsured">
					<div v-model="insuranceInsured">
					<div class="row">
						<div class="col-sm-2 text-right">
							姓名:
						</div>
						<div class="col-sm-6 text-left">
							<input type="text" name="" v-model="insuranceInsured.insuredName" id="" class="form-control" placeholder="" value="张三">
						</div>
					</div>
					<div class="row s-input-data-3">
						<div class="col-sm-2 text-right">
							证件号码：
						</div>
						<div class="col-sm-3 text-left">
							<div class="btn-group" role="group">
								<button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
								 aria-expanded="false">
									居民身份证
									<span class="caret"></span>
								</button>
								<!-- <ul class="dropdown-menu">
									<li>
										<a>Dropdown link</a>
									</li>
									<li>
										<a>Dropdown link</a>
									</li>
								</ul> -->
							</div>
						</div>
						<div class="col-sm-4">
							<input type="text" v-model="insuranceInsured.insuredCard" name="" id="" class="form-control">
						</div>

					</div>
					<div class="row">
						<div class="col-sm-2 text-right">
							Email：
						</div>
						<div class="col-sm-6 text-left">

							<input type="text" name="" v-model="insuranceInsured.insuredEmail" id="" class="form-control">
						</div>
					</div>
					<div class="row">
						<div class="col-sm-2 text-right">
							地址：
						</div>
						<div class="col-sm-9 text-left">

							<input type="text" name="" id="" v-model="insuranceInsured.insuredAddress" class="form-control">
						</div>
					</div>
					</div>	
				</div>

					<div class="row s-verify-title">
						<div class="col-sm-6 text-left">
							行驶证车主
						</div>
					</div>
					<div v-model="insuranceDrivingLicense">
					<div class="row">
						<div class="col-sm-2 text-right">
							姓名：
						</div>
						<div class="col-sm-6 text-left">
							<input type="text" v-model="insuranceDrivingLicense.drivingLicenseName" name="" id="" class="form-control">
						</div>
					</div>
					<div class="row">
						<div class="col-sm-2 text-right">
							证件号码：
						</div>
						<div class="col-sm-6 text-left">
							<input type="text" name="" id="" v-model="insuranceDrivingLicense.drivingLicenseCard" class="form-control">
						</div>
					</div>
					</div>		
					<div class="s-lines-style"></div>
					<h5>保单领取方式</h5>
					<div class="row s-verify-title">
						<div class="col-sm-6 text-left">
							配送方式
							<input type="checkbox" v-model="isInsuranceInsured" class="s-checkbox S-Checkbox-Radio s-checkbox-multiple-yes S-Checkbox-Radio1" data-type="s-checkbox-multiple-yes">
							<span>同投保人</span>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-2 text-right">
							领取方式：
						</div>
						<div class="col-sm-6 text-left">
							<input type="radio" v-model="distribution" name="pay" class="S-Checkbox-Radio1 s-checkbox s-checkbox-multiple2 s-checkbox-multiple2-active" id="pay"
							 value="" data-type='s-checkbox-multiple2-active' /> 免费送单
							<input type="radio" v-model="distribution" name="pay" class="S-Checkbox-Radio1 s-checkbox s-checkbox-multiple2" id="pay" value="" data-type='s-checkbox-multiple2-active'
							/> 门店自取
						</div>
					</div>
					<div class="row">
						<div class="col-sm-2 text-right">
							收件人:
						</div>
						<div class="col-sm-6 text-left">
							<input type="text" name="" id="" class="form-control" placeholder="" value="张三">
						</div>
					</div>
					<div class="row">
						<div class="col-sm-2 text-right">
							手机号:
						</div>
						<div class="col-sm-6 text-left">
							<input type="number" name="" id="" class="form-control" placeholder="" value="">
						</div>
					</div>
					<div class="s-lines-style"></div>
					<div class="row">
						<h3>
							<span>
								<button class="s-button-1 pull-right" data-toggle="modal" data-target="#myModal">点击查看条款内容</button>
							</span>为保障您的权益，请仔细阅读条款内容，特别是条款中责任免除部分</h3>
					</div>
					<div class="row">
						<!-- <div class="col-sm-1 text-right">
							<input type="button" :checkbox="false" class="s-checkbox S-Checkbox-Radio s-checkbox-multiple-yes S-Checkbox-Radio1" data-type="s-checkbox-multiple-yes">
							<input type="button" :checkbox="false" class="s-checkbox S-Checkbox-Radio s-checkbox-multiple-yes S-Checkbox-Radio1" data-type="s-checkbox-multiple-yes">
						</div> -->
						<div class="col-sm-5 text-right">
							<el-checkbox v-model="checked">保险人已明确条款内容、免除保险人责任条款含义及其法律后果</el-checkbox>
						</div>
					</div>
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
			</div>
		</div>
        <footer class="foot">
		<p>车险出单平台 版权所有</p>
		<p>Copyright@2017 Chexianchudanpingtai</p>
	</footer>
    <!-- 模态框（Modal） -->
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
						&times;
					</button>
					<h4 class="modal-title" id="myModalLabel">
						<div id="navbarExample" class="navbar navbar-static">
							<div class="navbar-inner">
								<div class="container" style="width: auto;">
									<ul class="nav">
										<li class="active">
											<a href="#clause0">车险条款</a>
										</li>
										<li class="">
											<a href="#clause1">特别约定</a>
										</li>
										<li class="">
											<a href="#clause2">投保声明</a>
										</li>
										<li class="">
											<a href="#clause3">免责声明</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</h4>
				</div>
				<div class="modal-body">
					<div data-spy="scroll" 
					data-target="#navbarExample" data-offset="50" 
					class="scrollspy-example"
					 >
						<div v-for="(clause,index) in insuranceClause"
						 class="row" :id="generateId(index)">
							<h4>{{clause.clauseType}}</h4>
							<p>尊敬的客户：</p>
							<p>
								{{clause.clauseContent}}
							</p>
						</div>
					</div>
				</div>
				<div class="modal-footer text-center">
					<button type="button" class="btn btn-default" data-dismiss="modal">本人已阅读
					</button>
				</div>
			</div>
			<!-- /.modal-content -->
		</div>
		<!-- /.modal -->
	</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
		id: '',// 用户id
		totalMoney: 0,//保险总金额
		insuranceClause:[],//所有条款
		checked:false,//判断是否点击了同意条款
		isInsuranceInsured:true,//判断是否为同投保人
		distribution:false,//配送方式
		insuranceUser:{//投保人(用户)
			userId:'13',
			userName:'',
			userCard:'',
			userAddress:'',
			userEmail:''
		},
		insuranceInsured:{//被保险人
			insuredName:'',
			insuredCard:'',
			insuredAddress:'',
			insuredEmael:''
		},
		insuranceDrivingLicense:{//行驶证车主
			drivingLicenseName:'',
			drivingLicenseCard:''
		},
		insuranceUserId:'',//投保人id
		insuranceInsuredId:0,//被保险人id
		insuranceDrivingLicenseId:0,//行驶证车主id
		carInsurs:[],//所有保险类型
		insuranceInserIncludeOption:null,//保险套餐
		includeOption:[],//所有选择的套餐的下标
		insuranceInserJiaoQiang:[],//交强险
		insuranceInserCheChuan:[],//车船税
		insuranceCarInfo:null,
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
	getParams(){
		// 取到路由带过来的参数
		var totalMoney=this.$route.query.totalMoney;
		this.totalMoney=totalMoney;//赋值总金额
		 this.insuranceInserIncludeOption=JSON.parse(this.$route.query.insuranceInserIncludeOption);//赋值保险清单
		 		  let index = 0;
				  let index2 = -3;
		 for (const option in this.insuranceInserIncludeOption){		
		  	 if (option == "ci" + index &&this.insuranceInserIncludeOption[option] == 1) {
				if (index>2) {
					this.includeOption.push(index2);
				}	
			}
				index++;
				index2++;	
		 }
		this.insuranceCarInfo=JSON.parse(this.$route.query.insuranceCarInfo);
	},
    init() {
      $(".panel-info .panel-collapse").on("shown.bs.collapse", function(e) {
        $("#" + this.id + "-text").text("收起");
      });
      $(".panel-info .panel-collapse").on("hidden.bs.collapse", function(e) {
        $("#" + this.id + "-text").text("展开");
      });
      app.input_Name();
      $(".btn-group").click(function() {
        var mydropdown = new app.customdropdown($(this));
      });
    },
    next: function(txt) {
		if (!this.checked) {
			this.$message({
          message: '请勾选确认协议',
          type: 'warning'
        });
			return false;
		}
	// this.addInfo();
	this.validVerift();
	//   this.$router.push("pay");
	//   this.$router.push({
	// 	  name:"pay",
	// 	  path:"/pay",
	// 	  query:{
	// 		  totalMoney: this.totalMoney,//传输总金额
	// 		  insuranceInserIncludeOption:JSON.stringify(this.insuranceInserIncludeOption),//套餐清单
	// 		  insuranceUser:JSON.stringify(this.insuranceUser),//投保人
	// 		  insuranceInsured:this.insuranceInsuredId,//被保险人
	// 		  insuranceDrivingLicense:this.insuranceDrivingLicenseId,//车主
	// 		  insuranceCarInfo:JSON.stringify(this.insuranceCarInfo),//车辆信息
	// 	  }
	//   });
	},
	validVerift(){
		 var regEmail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      //手机号
		  var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
		  var card=/^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
			//校验数据
		if (this.insuranceUser.userName==null||this.insuranceUser.userName=='') {
			this.errorMessage("请输入投保人姓名");
			return false;
		}
		if (this.insuranceUser.userCard==null||this.insuranceUser.userCard=='') {
			this.errorMessage("请输入投保人身份证号码");
			return false;
		}else{
			if (card.test(this.insuranceUser.userCard)) {
				this.errorMessage("身份证号码格式不正确");
				return false;
			}
		}
		if (this.insuranceUser.userEmail==null||this.insuranceUser.userEmail=='') {
			this.errorMessage("请输入投保人Email");
			return false;
		}else{
			if (!regEmail.test(this.insuranceUser.userEmail)) {
				this.errorMessage("Email格式有误");
			return false;
			}
		}
		if (this.insuranceUser.userAddress==null||this.insuranceUser.userAddress=='') {
			this.errorMessage("请输入投保人地址");
			return false;
		}
		if (!this.isInsuranceInsured) {
			if (this.insuranceInsured.insuredName==null||this.insuranceInsured.insuredName=='') {
				this.errorMessage("请输入被保险人姓名");
				return false;
			}
			if (this.insuranceInsured.insuredCard==null||this.insuranceInsured.insuredCard=='') {
				this.errorMessage("请输入被保险人身份证号码");
				return false;
			}else{
				if (card.test(this.insuranceInsured.insuredCard)) {
				this.errorMessage("身份证号码格式不正确");
				return false;
			}
			}
			if (this.insuranceInsured.insuredEmail==null||this.insuranceInsured.insuredEmail=='') {
				this.errorMessage("请输入被保险人邮箱");
				return false;
			}else{
				if (!regEmail.test(this.insuranceInsured.insuredEmail)) {
				this.errorMessage("Email格式有误");
				return false;
			}
			}
			if (this.insuranceInsured.insuredAddress==null||this.insuranceInsured.insuredAddress=='') {
				this.errorMessage("请输入被保险人地址");
				return false;
			}
		}
		if (this.insuranceDrivingLicense.drivingLicenseName==null||this.insuranceDrivingLicense.drivingLicenseName=='') {
			this.errorMessage("请输入车主姓名");
			return false;
		}
		if (this.insuranceDrivingLicense.drivingLicenseCard==null||this.insuranceDrivingLicense.drivingLicenseCard=='') {
			this.errorMessage("请输入车主证件号码");
			return false;
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
    last: function(txt) {
      this.$router.push("selectingOffers");
	},
	getClause(){
		this.axios.get('/api/policy/insuranceClause/select').then(data=>{
			this.insuranceClause=data.data.data;
			console.log(this.insuranceClause);
		});	
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
          // console.log("返回的数据", data.data.data);
        });
      });
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
    },//获取车船税
    getinsuranceInserCheChuan() {
      this.axios
        .get("/api/carInsur/insur/selectOne", {
          params: { id: 2 }
        })
        .then(data => {
          // this.carInsurs = data.data.data;
          this.insuranceInserCheChuan = data.data;
        });
    },
	generateId(index){
		return "clause"+index;
	},
	getMessage(){

	},
	async addInfo(){
		await this.addUserInfomation();
	},
	addUserInfomation(){
		return new Promise((resolve,reject)=>{
			//更新投保人
		if (!this.isInsuranceInsured) {
			this.axios.post('/api/policy/feign/user/update',this.insuranceUser).then(data=>{	
				console.log("更新的投保人信息",data.data.data);
			});
		}
		//添加被保险人
		if (!this.isInsuranceInsured) {
			this.axios.post('/api/policy/insuranceInsured/insertOne',this.insuranceInsured).then(data=>{
				this.insuranceInsuredId=data.data.data.insuranceInsuredId.
				console.log("添加的被保险人",data.data.data);
			});
		}
		//添加行驶证车主
		this.axios.post('/api/policy/insuranceDrivingLicense/insertOne',this.insuranceDrivingLicense).then(data=>{
				this.insuranceDrivingLicenseId=data.data.data.drivingLicenseId;
				console.log("添加的行驶证车主",data.data.data);
			});
		})
		resolve(this.insuranceInsuredId!=0);
	},
	 async getAllData(){
		 await this.getinsur();
		 await this.getinsuranceInserJiaoQiang();
		 await this.getinsuranceInserCheChuan();
	 }
  },
  created() {
	  this.getClause();
	  this.getParams();
	  this.getAllData();
}
};
</script>
<style>

</style>