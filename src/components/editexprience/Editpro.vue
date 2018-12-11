<template>
  <yd-layout >
    <yd-navbar  slot="navbar" title="编辑项目">       
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
                <!-- <input slot="right" type="number" name="mobile"  value="" v-model='end_time'> -->
                 <yd-datetime type="date"  v-model="end_time" slot="right"></yd-datetime>
            </yd-cell-item>  
            <yd-cell-item>
                <yd-icon name="ucenter"  size=".3rem" color='rgb(42, 187, 79)'></yd-icon>
                <span slot="left">项目名称</span>
                <input slot="right" type="text" name="card_no"  value="" v-model='project_name'>
            </yd-cell-item>
            <yd-cell-item>
                <yd-icon name="ucenter"  size=".3rem" color='rgb(42, 187, 79)'></yd-icon>
                <span slot="left">职责</span>
                <input slot="right" type="text" name="" placeholder="请输入邮箱" value="" v-model='job_title'>
            </yd-cell-item>
            <yd-cell-item>
                <yd-icon name="ucenter"  size=".3rem" color='rgb(42, 187, 79)'></yd-icon>
                <span slot="left">角色</span>
                <input slot="right" type="text" name="" value="" v-model='main_duty'>
            </yd-cell-item>
            <div class="m-celltitle" style='width: 94%;margin: auto'>职责描述</div>
                  <div class="m-cell" style='width: 94%;margin: auto'>
                      <div class="cell-item">
                          <div >
                              <textarea class="cell-textarea" placeholder="描述" v-model='project_description'></textarea>
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
        editDtat:'',
        project_name:'',
        job_title:'',
        start_time:'',
        end_time:'',
        project_description:'',
        main_duty:'',
        project_id:''
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
      this.editDtat=this.$route.params.editTable;
      this.project_name=this.editDtat.project_name;
      this.job_title=this.editDtat.job_title;
      this.start_time=this.formatDate(this.editDtat.start_time);
      this.end_time=this.formatDate(this.editDtat.end_time);
      this.project_description=this.editDtat.project_description;
      this.main_duty=this.editDtat.main_duty;
      this.project_id=this.editDtat.project_id;      
    },
    submit:function(){
        var params = new URLSearchParams();
        params.append('project_id', this.project_id);
        params.append('project_name', this.project_name);
        params.append('job_title',this.job_title);
        params.append('main_duty', this.main_duty);
        params.append('project_description',this.project_description);
        params.append('start_time', this.start_time);
        params.append('end_time', this.end_time);
        this.$http.post(_const.requestUrl+'/v1/user/editProject',params).then(function ( res ){
          // 重新列表
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
</style>
