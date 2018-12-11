<template>
  <yd-layout >
    <yd-navbar  slot="navbar" title="编辑工作经理">       
            <yd-navbar-back-icon @click.native='back' slot="left"></yd-navbar-back-icon>       
    </yd-navbar>
   <div class="information">
        <yd-cell-group>
            <yd-cell-item>
                <yd-icon name="ucenter"  size=".3rem" color='rgb(42, 187, 79)'></yd-icon>
                <span slot="left">开始时间</span>
                <!-- <input slot="right" type="text" name="name" placeholder="" value="" v-model='start_time'> -->
                <yd-datetime type="date"  v-model="start_time" slot="right"></yd-datetime>
            </yd-cell-item>
            <yd-cell-item>
                <yd-icon name="ucenter"  size=".3rem" color='rgb(42, 187, 79)'></yd-icon>
                <span slot="left">结束时间</span>
                <!-- <input slot="right" type="number" name="mobile" placeholder="" value="" v-model='end_time'> -->
                 <yd-datetime type="date"  v-model="end_time" slot="right"></yd-datetime>
            </yd-cell-item>  
            <yd-cell-item>
                <yd-icon name="ucenter"  size=".3rem" color='rgb(42, 187, 79)'></yd-icon>
                <span slot="left">公司名称</span>
                <input slot="right" type="text" name="card_no" placeholder="" value="" v-model='company'>
            </yd-cell-item>
            <yd-cell-item>
                <yd-icon name="ucenter"  size=".3rem" color='rgb(42, 187, 79)'></yd-icon>
                <span slot="left">职位</span>
                <input slot="right" type="text" name="email" placeholder="" value="" v-model='job_title'>
            </yd-cell-item>
            <div class="m-celltitle" style='width: 94%;margin: auto'>职位描述</div>
                  <div class="m-cell" >
                      <div class="cell-item" style='width: 94%;margin: auto'>
                          <div >
                              <textarea class="cell-textarea" placeholder="描述11" v-model='job_description'></textarea>
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
        start_time:'',
        end_time:'',
        company:'',
        job_title:'',
        job_description:'',

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
   /* formatDate:function(inputTime) {
      var date = new Date(inputTime);
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? ('0' + m) : m;
      var d = date.getDate();
      d = d < 10 ? ('0' + d) : d;

      return y + '-' + m + '-' + d ;
    },*/
    back:function(){     
    this.$router.go(-1);
      },
    show:function(){
      this.jobDtat=this.$route.params.jobTable;
      this.company=this.jobDtat.company;
      this.job_title=this.jobDtat.job_title;
      this.job_description=this.jobDtat.start_time;
      this.end_time=this.formatDate(this.jobDtat.end_time);
      this.start_time=this.formatDate(this.jobDtat.start_time);
      this.work_id=this.jobDtat.work_id;
      /*console.log(this.formatDate(this.jobDtat.end_time));
      console.log(this.end_time) */     
    },
    submit:function(){
      var params = new URLSearchParams();
        params.append('work_id', this.work_id);
        params.append('company', this.company);
        params.append('job_title',this.job_title);
        params.append('job_description', this.job_description);
        params.append('start_time', this.start_time);
        params.append('end_time', this.end_time);
        this.$http.post(_const.requestUrl+'/v1/user/editWork',params).then(function ( res ){
  
              console.log(res);
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
.yd-datetime-input{
  padding-left: 0.8rem;
}
</style>
