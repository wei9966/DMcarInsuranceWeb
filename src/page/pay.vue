<template>
  <div class="main index">
    <div class="h_10"></div>
    <div class="h_10"></div>
    <div class="s_main1080 s_warp">
      <img src="../../static/images/setp3.png" alt />
    </div>
    <div class="h_10"></div>
    <div class="s_main1080 main">
      <div class="row-s selectingoffer pay">
        <div class="row text-center">
          <!-- <img src="../../static/images/icon-no-pass.png" alt="">
          <span>核保未通过！</span>-->
          <img src="../../static/images/icon-pass.png" alt />
          <span>核保通过！</span>
        </div>
        <div class="row">
          <p @click="detial" class="s-cursor">
            <i>温馨提示：</i>请再次核对您本次的支付信息，如果确定无误请点击“立即支付”。查看投保信息
          </p>
        </div>
        <div class="row s-pay-title">
          <div class="col-sm-4">投保单号</div>
          <div class="col-sm-2 text-center">投保人姓名</div>
          <div class="col-sm-5 text-center">起保期间</div>
          <div class="col-sm-2 text-center">金额</div>
        </div>
        <div class="row s-pay-content">
          <div class="col-sm-4">{{order_number}}</div>
          <div class="col-sm-2 text-center">张三</div>
          <div class="col-sm-5 text-center">{{time}}</div>
          <div class="col-sm-2 text-center">{{totalMoney}}</div>
        </div>
      </div>
    </div>
    <div class="h_10"></div>
    <div class="s_main1080 s_next">
      <div class="next_btn">
        <button type="submit" class="s-default" @click="pay()">立即支付</button>
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
      m:"100",
      id:'',// 用户id
      totalMoney: "", // 保险总金额
      
      nowTimes: {
        yy: "0",
        mm: "0",
        dd: "00",
        hou: "00",
        min: "00",
        sec: "00"
      },
      order_number:"",
      payafter:{
        id :"",
        totalMoney: ""
      }
    };
  },
//   computed:{
//       time(){
//           return new Date()
//       },
 // },
  watch: {
    //监测路由变化
    $route: "getParams"
  },
  methods: {
    getParams() {
      // 取到路由带过来的参数
      var totalMoney = this.$route.params.totalMoney;
      this.totalMoney = totalMoney;
      console.log("总金额", this.totalMoney);
      var id=this.$route.params.id;
      this.id=id;
      this.payafter.id = this.id;
      this.payafter.totalMoney = this.totalMoney;
      console.log("订单编号=====",this.id);
      
    
      
    },
    detial: function() {
      this.$router.push("insuranceDetial");
    },
    pay() {
      this.axios.post(`/api/insurance/pay/payorder?outtradeno=${this.order_number}&totalamount=${this.totalMoney}`,

         this.payafter  
      ).then(data => {
        console.log(data);
        // 添加之前先删除一下，如果单页面，页面不刷新，添加进去的内容会一直保留在页面中，二次调用form表单会出错
        const divForm = document.getElementsByTagName("div");
        if (divForm.length) {
          document.body.removeChild(divForm[0]);
        }
        const div = document.createElement("div");
        div.innerHTML = data.data; // data就是接口返回的form 表单字符串
        document.body.appendChild(div);
        document.forms[0].setAttribute("target", "_self"); // 新开窗口跳转
        document.forms[0].submit();
       
      });
      // this.tz();
    },
  //   tz(){
  // this.$router.push({
  //       name: "paySuccess",
  //       path: "/paySuccess",
       
        
  //     });
  //   },

    //order_nums() {
    //       var that = this;
    //       var outTradeNo = ""; //订单号
    //       for (var i = 0; i < 6; i++) //6位随机数，用以加在时间戳后面。
    //         {
    //           outTradeNo += Math.floor(Math.random() * 10);
    //         }
                            
    //         outTradeNo = String(getDateNums(new Date())) + String(outTradeNo) 
    //         that.outTradeNo = outTradeNo;
    //         this.order_number= that.outTradeNo ; 
    //         console.log("订单号",this.order_number);
    // },
    S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(9).substring(1)
    },
    //自己定义的点击新增的方法
    handleCreate() {
      // 用于生成uuid
      this.order_number = (this.time1+this.S4()+this.id );
    },

      
    setNowTimes(){
            let myDate = new Date();
            this.nowTimes.yy=myDate.getFullYear();
            this.nowTimes.mm = myDate.getMonth()+1;
            this.nowTimes.dd = String(myDate.getDate()<10?'0'+ myDate.getDate(): myDate.getDate()) ;
            this.nowTimes.hou = String(myDate.getHours()<10?"0"+myDate.getHours():myDate.getHours());
            this.nowTimes.min = String(myDate.getMinutes()<10?'0'+myDate.getMinutes():myDate.getMinutes());
            this.nowTimes.sec = String(myDate.getSeconds()<10?'0'+myDate.getSeconds():myDate.getSeconds());
            this.time= this.nowTimes.yy +"-" + this.nowTimes.mm + "-" + this.nowTimes.dd;
            console.log(this.nowTimes.yy);
            
            console.log("当前日期======"+this.time);
            
            this.time1=this.nowTimes.yy +"0"+ this.nowTimes.mm + this.nowTimes.dd;
    }
  },
  created() {
    this.getParams();
    this.setNowTimes();
    // this.order_nums();
    this.handleCreate();
  }
};
</script>
<style>
</style>