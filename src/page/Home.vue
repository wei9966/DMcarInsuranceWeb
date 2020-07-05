
<template>
  <div class="main index">
        <div class="h_10"></div>
        <div class="h_10"></div>
        <div class="s_main1080 s_warp">
            <img src="../../static/images/setp1.png" alt="">
        </div>
        <div class="s_main1080 main">
            <div class="row-s">
                <h5>录入车辆信息</h5>
                <div class="row">
                    <div class="col-sm-6 text-right">
                        投保城市：
                        <select name="pro" id="pro" v-model="parent2Id"  @change="selectCitys">
                                <option v-for="city in citys" :value="getId(city)">{{city.name}}</option>
                        </select>
                        <select name="city" id="city" v-model="parent3Id" @change="selectCitys2">
                                <option v-for="city in city2s" :value="getId(city)">{{city.name}}</option>
                        </select>
                        <select name="contr" id="contr" v-model="parent4Id">
                            <option v-for="city in city3s" :value="getId(city)">{{city.name}}</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-6 text-right">
                        车牌号码：
                        <input type="text" name="" id="" class="form-control">
                    </div>

                    <div class="checkbox col-sm-2">
                        <label>
                            <input type="checkbox" class="s-checkbox">新车未上牌
                        </label>
                    </div>

                    <div class="col-sm-4 indexes">
                        <input type="button" class="form-control s-input-btnbg" id="" value="信息检索" placeholder=""> 只支持上海车牌和续保使用信息检索
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 text-right">
                        投保城市：
                        <input type="text" name="" id="" class="form-control">
                    </div>
                </div>
            </div>
            <div class="s-lines-style"></div>
            <div class="row-s">
                <h5>车辆信息</h5>
                <div class="row">
                    <div class="col-sm-6 text-right">
                        车辆注册日期：
                        <input type="text" name="" id="" class="form-control form_datetime" placeholder="请输入开始时间">
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-6 text-right">
                        车架号/VIN码：
                        <input type="text" name="" id="" class="form-control">
                    </div>
                    <div class="checkbox col-sm-4 error">
                        2002年后车架号为17位哦
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 text-right">
                        发动机号：
                        <input type="text" name="" id="" class="form-control">
                    </div>
                    <div class="checkbox col-sm-4 error">
                        亲，您输入的发动机号不正确哦！
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 text-right">
                        品牌型号：
                        <input type="text" name="" id="" class="form-control">
                    </div>
                    <div class="checkbox col-sm-4 error">
                        亲，请参考行驶证品牌型号填写!
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 text-right">
                        配置型号：
                        <input type="text" name="" id="" class="form-control">
                    </div>

                </div>
                <div class="row">
                    <div class="col-sm-6 text-right">
                        购车发票日期：/初登日期：
                        <input type="text" name="" id="" class="form-control  form_datetime" placeholder="请输入开始时间">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 text-right">
                        是否过户车辆：
                        <input type="checkbox" name="my-checkbox" data-on-text="是" data-off-text="否" checked>
                        <!-- <input type="checkbox" class="btn-switch s_top"> -->
                        <span class="s-exmp-car s-tap-index" data-val ="example_2">如何区别过户车？</span>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-6 text-right">
                        过户日期：
                        <input type="text" name="" id="" class="form-control  form_datetime" placeholder="请输入开始时间">
                    </div>
                </div>
                <div class="row-example_1-image example_1">
                    <img src="../../static/images/example_1.png">
                </div>
                <div class="row-example_1-image example_2">
                    <img src="../../static/images/example_2.png">
                </div>

            </div>
            <div class="s-lines-style"></div>
            
            <div class="row-s">

                <h5>其它投保信息</h5>  
                <div style="position:absolute; margin-left:200px;margin-top:-40px">
                <el-switch
                           v-model="isShow"
                           active-text="是"
                           inactive-text="否">
                    </el-switch>
                <!-- <div style="position:absolute; margin-left:200px;margin-top:-40px"> 
                     <input type="checkbox" v-model="isShow" name="my-checkbox" data-on-text="是" data-off-text="否" checked > 
                    
                </div> -->
                </div>
                <div v-show="isShow">
                <div class="row">
                    <div class="col-sm-6 text-right">
                        起保日期：
                        <!-- <input type="text" name="" id="" class="form-control form_datetime" placeholder="请输入开始时间"> -->
                        <el-date-picker
                                style="width:308px"
                                v-model="value2"
                                align="right"
                                type="date"
                                placeholder="选择日期"
                                :picker-options="pickerOptions">
                    </el-date-picker>
                    </div>
                    <div class="checkbox col-sm-2 s-tap-index" data-val ="example_3">
                        <img src="../../static/images/icon-c.png" alt="">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 text-right">
                        车主姓名：
                        <input type="text" name="" id="" class="form-control">
                    </div>

                </div>
                <div class="row s-input-data-3">
                    <div class="col-sm-3 text-right">
                        证件号码：
                        <div class="btn-group" role="group">
                            <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
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
                        <!-- <input type="text" name="" id="" class="form-control"> -->
                        <el-input v-model="firstLetter"  placeholder="" ></el-input>
                    </div>
                    <div class="checkbox col-sm-4 error">
                        身份证号不正确，请重新输入 
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 text-right">
                        Email：
                        <input type="text" name="" id="" class="form-control">
                    </div>

                </div>
                <div class="row-example_1-image example_3 ">
                    <img src="../../static/images/example_3.png">
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
         pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
         },
         value2:'',
         isShow:true
    };
  },
  mounted() {
    this.init();
    this.queryCity(this.parentId);
    this.otherinfo();
  },
  methods: {
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
       $('.btn-group').click(function () {
				var mydropdown = new app.customdropdown($(this));
	    })
    },
     next: function(txt) {
        this.$router.push('selectingOffers')
  },
  queryCity(parentId){
      this.axios.get('api/insuranceCity/selectCity',{params:{id:`${parentId}`}}).then(data=>{
          this.citys=data.data.data;
      });
  },
  getId(city){
      return city.baseAreaid;
  },
  selectCitys(){
      console.log(this.parentId);
       this.axios.get('api/insuranceCity/selectCity',{params:{id:this.parent2Id}}).then(data=>{
          this.city2s=data.data.data;
      });
  },
  selectCitys2(){
      console.log(this.parentId);
       this.axios.get('api/insuranceCity/selectCity',{params:{id:this.parent3Id}}).then(data=>{
          this.city3s=data.data.data;
      });
  },
   otherinfo(){
       
       this.axios.get('api/otherInsur/info/selectTwo',{params:{id:3}}).then(data=>{
            // console.log("返回的数据",data.data);
            // for (let index = 0; index < data.length; index++) {
            //     console.log("遍历的数据",data.data[index]);
                
            // }
            
       });
   }
  }
};
</script>
<style>

</style>