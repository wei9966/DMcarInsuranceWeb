<template>
   <div class="main login">
     <div class="s-form">  
            <h5>车险在线报价</h5>
            <form class="form-horizontal">
                    <div class="form-group">
                      <label for="" class="col-sm-4 control-label">车辆行驶城市：</label>
                      <div class="col-sm-6">
                        <input type="text" class="form-control" id="" placeholder="上海" value="上海">
                      </div>
                      <div class="col-sm-2">
                      <input type="button" class="form-control s-input-btnbg" id="" placeholder="">
                    </div>
                    </div>
                    <div class="form-group">
                      <label for="" class="col-sm-4 control-label">车辆牌号：</label>
                      <div class="col-sm-4">
                        <input type="text" class="form-control" id="" placeholder="沪A" value="沪A">
                      </div>
                      <div class="checkbox col-sm-4">
                            <label>
                              <input type="checkbox">新车未上牌
                            </label>
                          </div>
                    </div>
                    <div class="form-group">
                      <label for="" class="col-sm-4 control-label">手机号：</label>
                      <div class="col-sm-7">
                        <input type="number" class="form-control" id="inputPassword3" placeholder="请输入手机号">
                      </div>
                    </div>
                    <div class="form-group s-out-group">
                        <button type="submit" class="s-default" v-on:click="next">快速报价</button>
                    </div>
                  </form>
        </div>
        <footer class="foots">
            <p>车险出单平台  版权所有</p> 
            <p>Copyright@2017 Chexianchudanpingtai</p>
        </footer>
    </div> 
</template>

<script>
export default {
  data () {
    return {
    };
  },
  methods: {
     next: function(e) {
            this.$router.push('home');
            e.preventDefault()      
    }
  }
}
</script>

<style>

</style>