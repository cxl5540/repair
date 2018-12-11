<template>
  <yd-layout >
    <yd-navbar  slot="navbar" title="编辑教育经历">       
            <yd-navbar-back-icon @click.native='back' slot="left"></yd-navbar-back-icon>       
    </yd-navbar>
   <div class="information">
        <yd-cell-group>
            <yd-cell-item>
                <yd-icon name="ucenter"  size=".3rem" color='rgb(42, 187, 79)'></yd-icon>
                <span slot="left">入学时间</span>
               <!--  <input slot="right" type="number" name="name" placeholder="" value="" v-model='join_shcool'> -->
                <yd-datetime type="date"  v-model="join_shcool" slot="right"></yd-datetime>
            </yd-cell-item>
            <yd-cell-item>
                <yd-icon name="ucenter"  size=".3rem" color='rgb(42, 187, 79)'></yd-icon>
                <span slot="left">毕业时间</span>
                <!-- <input slot="right" type="number" name="mobile" placeholder="" value="" v-model='out_shcool'> -->
                 <yd-datetime type="date"  v-model="out_shcool" slot="right"></yd-datetime>
            </yd-cell-item>  
            <yd-cell-item>
                <yd-icon name="ucenter"  size=".3rem" color='rgb(42, 187, 79)'></yd-icon>
                <span slot="left">学历</span>
                <input slot="right" type="number" name="card_no" placeholder="" value="" v-model='eduction_record'>
            </yd-cell-item>
            <yd-cell-item>
                <yd-icon name="ucenter"  size=".3rem" color='rgb(42, 187, 79)'></yd-icon>
                <span slot="left">学位</span>
                <input slot="right" type="text" name="email" placeholder="" value="" v-model='eduction_degree'>
            </yd-cell-item>
            <yd-cell-item>
                <yd-icon name="ucenter"  size=".3rem" color='rgb(42, 187, 79)'></yd-icon>
                <span slot="left">专业</span>
                <input slot="right" type="text" name="email" placeholder="" value="" v-model='profession'>
            </yd-cell-item>
            <yd-cell-item>
                <yd-icon name="ucenter"  size=".3rem" color='rgb(42, 187, 79)'></yd-icon>
                <span slot="left">学校名称</span>
                <input slot="right" type="text" name="email" placeholder="" value="" v-model='shcool_name'>
            </yd-cell-item>

            <yd-button style="width: 94%; margin: 0.2rem auto" size="large" type="primary" @click.native="submit()">确认</yd-button>
        </yd-cell-group>

    </div>
    </yd-layout> 
</template>

<script>

export default {
  data () {
      return {
        join_shcool:'',
        out_shcool:'',
        eduction_record:'',
        eduction_degree:'',
        education_id:'',
        profession:'',
        shcool_name:'',
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
      this.eduDtat=this.$route.params.eduTable;
      this.join_shcool=this.formatDate(this.eduDtat.join_shcool);
      this.out_shcool=this.formatDate(this.eduDtat.out_shcool);
      this.eduction_record=this.eduDtat.eduction_record;
      this.eduction_degree=this.eduDtat.eduction_degree;
      this.profession=this.eduDtat.profession;
      this.shcool_name=this.eduDtat.shcool_name;
      this.education_id=this.eduDtat.education_id;


    },
    submit:function(){
      var params = new URLSearchParams();
        params.append('education_id', this.education_id);
        params.append('join_shcool', this.join_shcool);
        params.append('out_shcool',this.out_shcool);
        params.append('eduction_record', this.eduction_record);
        params.append('profession', this.profession);
        params.append('shcool_name', this.shcool_name);
        params.append('eduction_degree', this.eduction_degree);
        this.$http.post(_const.requestUrl+'/v1/user/editEdcation',params).then(function ( res ){
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
