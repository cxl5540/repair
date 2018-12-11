<template>
  <yd-layout >
    <yd-navbar style="background: #ebebeb" slot="navbar" title="编辑培训经历">
        <router-link to="/" slot="left">
            <yd-navbar-back-icon></yd-navbar-back-icon>
        </router-link>
    </yd-navbar>
   <div class="information">
        <yd-cell-group>
            <yd-cell-item>
                <yd-icon name="ucenter"  size=".3rem" color='rgb(42, 187, 79)'></yd-icon>
                <span slot="left">开始时间</span>
                <input slot="right" type="number" name="name" placeholder="" value="" v-model='start_time'>
            </yd-cell-item>
            <yd-cell-item>
                <yd-icon name="ucenter"  size=".3rem" color='rgb(42, 187, 79)'></yd-icon>
                <span slot="left">结束时间</span>
                <input slot="right" type="number" name="mobile" placeholder="" value="" v-model='end_time'>
            </yd-cell-item>  
            <yd-cell-item>
                <yd-icon name="ucenter"  size=".3rem" color='rgb(42, 187, 79)'></yd-icon>
                <span slot="left">培训机构</span>
                <input slot="right" type="text" name="email" placeholder="" value="" v-model='train_company'>
            </yd-cell-item>
            <div class="m-celltitle" style='width: 94%;margin: auto'>课程描述</div>
                  <div class="m-cell" style='width: 94%;margin: auto'>
                      <div class="cell-item">
                          <div >
                              <textarea class="cell-textarea" placeholder="" v-model='class_description'></textarea>
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
        train_company:'',
        class_description:'',
        train_id:'',
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
     show:function(){
      this.trianDtat=this.$route.params.editTable;
      this.train_company=this.trianDtat.train_company;
      this.class_description=this.trianDtat.class_description;
      this.end_time=this.trianDtat.end_time;
      this.start_time=this.trianDtat.start_time;
      this.train_id=this.trianDtat.train_id;      
    },
    submit:function(){
      var params = new URLSearchParams();
        params.append('train_id', this.train_id);
        params.append('class_description', this.class_description);
        params.append('train_company',this.train_company);
        params.append('start_time', this.start_time);
        params.append('end_time', this.end_time);
        this.$http.post(_const.requestUrl+'/v1/user/editTrain',params).then(function ( res ){
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
