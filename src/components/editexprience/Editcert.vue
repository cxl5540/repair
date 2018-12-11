<template>
  <yd-layout >
    <yd-navbar  slot="navbar" title="编辑证书">       
            <yd-navbar-back-icon @click.native='back' slot="left"></yd-navbar-back-icon>       
    </yd-navbar>
   <div class="information">
        <yd-cell-group>
          <yd-cell-item>
                <yd-icon name="ucenter"  size=".3rem" color='rgb(42, 187, 79)'></yd-icon>
                <span slot="left">获得时间</span>
                <!-- <input slot="right" type="text" name="name" placeholder="" value="" v-model='get_award_time'> -->
                <yd-datetime type="date"  v-model="get_award_time" slot="right"></yd-datetime>
            </yd-cell-item>
            <yd-cell-item>
                <yd-icon name="ucenter"  size=".3rem" color='rgb(42, 187, 79)'></yd-icon>
                <span slot="left">证书名称</span>
                <input slot="right" type="text" name="name" placeholder="" value="" v-model='award_title'>
            </yd-cell-item>
            <yd-cell-item>
                <yd-icon name="ucenter"  size=".3rem" color='rgb(42, 187, 79)'></yd-icon>
                <span slot="left">颁发机构</span>
                <input slot="right" type="text" name="mobile" placeholder="" value="" v-model='company'>
            </yd-cell-item>  
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
        get_award_time:'',
        award_title:'',
        company:'',
        award_id:''
     
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
      let certDtat=this.$route.params.certTable;
      this.get_award_time=this.formatDate(certDtat.get_award_time);
      this.award_title=certDtat.award_title;
      this.company=certDtat.company;
      this.award_id=certDtat.award_id;
  
    },
    submit:function(){
       var params = new URLSearchParams();
        params.append('get_award_time', this.get_award_time);
        params.append('award_title', this.award_title);
        params.append('company',this.company);
        params.append('language_level', this.language_level);
        params.append('award_id', this.award_id);
        this.$http.post(_const.requestUrl+'/v1/user/editAward',params).then(function ( res ){
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
</style>
