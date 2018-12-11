<template>
<yd-flexbox-item>
  <div v-if="graed.rightModel" style=" position: absolute; z-index: 999;right: 0; height: 100%; width: 70%; background-color: #5CB85C;"  >
    <div  style="height:30% ">
      <div>
        <div style="position: absolute;right: .3rem;top: .5rem;" @click="close">
          <yd-icon name="error-outline" color="#FFF"></yd-icon>
        </div>
      </div>
      <div style="text-align: center">
        <div style="width: 20%; float: left">&nbsp;</div>
        <div style="width: 60%; float: left">
          <div class="circle">
            <div class="circleInsert">
              <img src="">
            </div>
          </div>
        </div>
        <div style="width: 20%; float: left">&nbsp;</div>
      </div>
      <div></div>
    </div>
    <div style="height:70% ; width: 100%; padding-top: 1.5rem; padding-left: .2rem;  padding-right: .2rem">
   
      <div style="border-bottom: #8DCD8D solid 1px;width: 100%;padding: .3rem"  @click='Judge'>
        <yd-icon name="type" color="#FFF" size=".4rem"></yd-icon>
        <span style="font-size: .4rem; color: #FFFFFF;padding-left: .2rem">我的简历</span>
      </div>
   
      <div style="border-bottom: #8DCD8D solid 1px;width: 100%;padding: .3rem">
        <yd-icon name="feedback" color="#FFF" size=".4rem"></yd-icon>
        <span style="font-size: .4rem; color: #FFFFFF;padding-left: .2rem">投递记录</span>
        <yd-icon name="back" color="#FFF" size=".4rem"></yd-icon>
      </div>
    </div>
  </div>
  <div style="padding-top: .5rem;position: absolute;right: 1rem;">
    <div style="width: 20%; float: left">&nbsp;</div>
    <div style="width: 20%; float: left">&nbsp;</div>
    <div style="width: 20%; float: left">&nbsp;</div>
    <div style="width: 20%; float: left">&nbsp;</div>
    <div style="width: 20%; float: left"  @click="ucenter">
      <yd-icon name="ucenter" color="#2ABB4F" size=".8rem"></yd-icon>
    </div>
  </div>
  <div style="position: absolute; left: .5rem;top:1.2rem">
    <img src="../../assets/0106.png">
  </div>

</yd-flexbox-item>
</template>

<script>
export default {
    data () {
      return{
        graed:{
            rightModel:false
        }
      }
    },
    created () {},
    methods: {
      Judge:function (){
        var params = new URLSearchParams();
        params.append('wx_openid', '8');
        let _this=this;
        this.$http.post(_const.requestUrl+'/v1/user/findResume',params).then(function ( res ){
          if(res.data.data.status==false){
            _this.$router.push({path: '/baseInformation'})
          }else if(res.data.data.status==true){
            _this.$router.push({path: '/Resume/view'})
          }
                       
          });

      },
        ucenter () {
            this.graed.rightModel = true
        },
        close () {
            this.graed.rightModel = false
        }
    }
}
</script>
<style>
  .circle{
       width:3rem;
       height:3rem;
       background-color:#8DCD8D;
       border-radius:50%;
       -moz-border-radius:50%;
       -webkit-border-radius:50%;
       position: absolute;
       top:1.5rem;
     }
  .circleInsert{
    width:2.8rem;
    height:2.8rem;
    background-color:#FFF;
    border-radius:50%;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
    position: absolute;
    padding: .2rem;
    top:.1rem;
    left:.1rem;
  }
  .line::after {
    height: 1px;
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    content: "";
    width: 100%;
    background-image: -webkit-linear-gradient(bottom,#e4e4e4 50%,transparent 0);
    background-image: linear-gradient(0deg,#e4e4e4 50%,transparent 0);
  }
</style>

