<template>
  <yd-layout >
     <yd-navbar  slot="navbar" title="编辑获奖经历">       
            <yd-navbar-back-icon @click.native='back' slot="left"></yd-navbar-back-icon>       
    </yd-navbar>
   <div class="information">
        <yd-cell-group>
            <yd-cell-item>
                <yd-icon name="ucenter"  size=".3rem" color='rgb(42, 187, 79)'></yd-icon>
                <span slot="left">获得时间</span>
<!--                 <input slot="right" type="number" name="name" placeholder="" value="" v-model='award_time'> -->
                <yd-datetime type="date"  v-model="award_time" slot="right"></yd-datetime>
            </yd-cell-item>
            <yd-cell-item>
                <yd-icon name="ucenter"  size=".3rem" color='rgb(42, 187, 79)'></yd-icon>
                <span slot="left">名称</span>
                <input slot="right" type="text" name="mobile" placeholder="" value="" v-model='award_name'>
            </yd-cell-item>  
            <div class="m-celltitle" style='width: 94%;margin: auto'>补充说明</div>
                  <div class="m-cell" >
                      <div class="cell-item" style='width: 94%;margin: auto'>
                          <div >
                              <textarea class="cell-textarea" placeholder="描述11" v-model='mark'></textarea>
                          </div>
                      </div>
                  </div>
            <yd-button style="width: 94%; margin: 0.2rem auto" size="large" type="primary" @click.native="submit()">确认</yd-button>
        </yd-cell-group>

    </div>
    </yd-layout> 
</template>

<script>

export default {
  name: 'Editjob',
  data () {
      return {
        award_time:'',
        award_name:'',
        mark:'',
        award_proccess_id:'',      
            }
        },
  beforeCreate () {
  },
  created () {
    
  },
  mounted () {
this.show();
  },
   methods:{
     back:function(){     
    this.$router.go(-1);
      },
    show:function(){
      let awordDtat=this.$route.params.awordTable;
      this.award_time=this.formatDate(awordDtat.award_time);
      this.award_name=awordDtat.award_name;
      this.mark=awordDtat.mark;
      this.award_proccess_id=awordDtat.award_proccess_id;

    },
    submit:function(){
       var params = new URLSearchParams();
        params.append('award_time', this.award_time);
        params.append('award_name', this.award_name);
        params.append('mark',this.mark);
        params.append('award_proccess_id', this.award_proccess_id);
        this.$http.post(_const.requestUrl+'/v1/user/editAward_proccess',params).then(function ( res ){
          // 重新列表
             /* console.log(res);*/
          });
      this.$router.go(-1);
    }
    },
  components: {

  }
}
</script>
<style>
.information input,select{
    padding-left: 0.8rem;

}
.information span{
    display: inline-block;
    font-weight: bold;
    width: 1rem;
    text-align-last:justify;
}
textarea{
  width: 100%;
  margin: 0.2rem auto;
  height: 1.8rem;
}
</style>
