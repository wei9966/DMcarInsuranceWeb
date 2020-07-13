<!--  -->
<template>
<div>
    <h1>支付成功</h1>
    <!-- 订单号<input type="text" v-model="this.$route.query.out_trade_no" readonly="readonly"/></br> -->
 订单号:<b>{{this.$route.query.out_trade_no}}</b></br>
            <!-- 金额<input type="text" v-model="this.$route.query.total_amount" readonly="readonly"/></br> -->
 金额:  <b>{{this.$route.query.total_amount}}</b>
</div>
</template>

<script>
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props:{},
data() {
//这里存放数据
return {
        // id:"",
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    id(){
        this.id=this.$route.query.out_trade_no;
    },
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    // this.id();
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    
},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>

</style>