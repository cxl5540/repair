<template>
  <div class="showExp" style='width: 94%;margin: 0 auto'>
    <div v-for='(item,index) in jobListData' :key='item.index'  ref="jobListData">
      <p style='font-size: 0.32rem;font-weight: bold;' >工作经验</p>
      <div class="showJob"  v-for='(val,index) in item' :key='index' >       
        <p>时间:{{val.start_time | normalTime}}-{{val.end_time | normalTime}}</p>
        <p>职位:{{val.job_title}}</p>
        <p>公司:{{val.company}}</p>
        <p>工作描述:</p>
        <p>{{val.job_description}}</p>
      </div>
    </div>
    <div v-for='(item,index) in proListData' :key='item.index' ref="proListData"> 
      <p style='font-size: 0.32rem;font-weight: bold;' >项目经验</p>
      <div v-for='(val,index) in item' :key='index' >       
        <p>时间:{{val.start_time | normalTime}}-{{val.end_time | normalTime}}</p>
        <p>名称:{{val.project_name}}</p>
        <p>职责:{{val.main_duty}}</p>
        <p>项目描述:</p>
        <p>{{val.project_description}}</p>
      </div>
    </div>
    <div v-for='(item,index) in trianListData' :key='item.index' ref="trianListData">
      <p style='font-size: 0.32rem;font-weight: bold;' >培训经历</p>
      <div v-for='(val,index) in item' :key='index'>       
        <p>时间:{{val.start_time | normalTime}}-{{val.end_time | normalTime}}</p>
        <p>机构:{{val.train_company}}</p>
        <p>课程描述:</p>
        <p>{{val.class_description}}</p>
      </div>
    </div>
    <div v-for='(item,index) in eduListData' :key='item.index' ref="eduListData">
      <p style='font-size: 0.32rem;font-weight: bold;' >教育经历</p>
      <div  v-for='(val,index) in item' :key='index'>       
        <p>时间:{{val.join_shcool | normalTime}}-{{val.out_shcool | normalTime}}</p>
        <p>学历:{{val.eduction_record}}</p>
        <p>学位:{{val.eduction_degree}}</p>
        <p>学校:{{val.shcool_name}}</p>
        <p>专业:{{val.profession}}</p>
      </div>
    </div>
      <div v-for='(item,index) in certificateListData' :key='item.index' ref="certificateListData">
      <p style='font-size: 0.32rem;font-weight: bold;' >获得证书</p>
      <div  v-for='(val,index) in item' :key='index'>       
        <p>时间:{{val.get_award_time | normalTime}}</p>
        <p>名称:{{val.award_title}}</p>
        <p>机构:{{val.company}}</p>
      </div>
    </div>
      <div  v-for='(item,index) in laguListData' :key='item.index' ref="laguListData">
      <p style='font-size: 0.32rem;font-weight: bold;' >语言能力</p>
      <div  v-for='(val,index) in item' :key='index'>       
        <p>语言:{{val.language}}</p>
        <p>等级:{{val.language_level}}</p>
        <p>听说:{{val.hearspeak}}</p>
        <p>读写:{{val.readwrite}}</p>
      </div>
    </div>
    <div  v-for='(item,index) in skillListData' :key='item.index' ref="skillListData">
      <p style='font-size: 0.32rem;font-weight: bold;' >技能展示</p>
      <div  v-for='(val,index) in item' :key='index'>       
        <p>技能:{{val.professions_title}}</p>
        <p>熟练程度:{{val.proficiency}}</p>
      </div>
    </div>
    <div  v-for='(item,index) in awardListData' :key='item.index'  ref="awardListData">
      <p style='font-size: 0.32rem;font-weight: bold;' >获奖经历</p>
      <div  v-for='(val,index) in item' :key='index'>       
        <p>时间:{{val.award_name}}</p>
        <p>职位:</p>
        <p>名称:{{val.award_time}}</p>
        <p>补充:</p>
        <p>{{val.mark}}</p>
      </div>
    </div>        
  </div>
</template>
<script>
export default {
  data () {
      return {
        jobListData:[],
        proListData:[],
        trianListData:[],
        eduListData:[],
        certificateListData:[],
        laguListData:[],
        skillListData:[],
        awardListData:[],
      }
  },
  created () {
    this.jobList();
    this.proList();
    this.trianList();
    this.eduList();
    this.certificateList();
    this.laguList();
    this.skillList();
    this.awardList();
  },
  methods:{
    jobList:function(){   //工作列表
      var paramsList=new URLSearchParams(); 
           paramsList.append('base_id','11');
            let _this = this;
          this.$http.post(_const.requestUrl+'/v1/user/worklist',paramsList).then(function ( res ){
            _this.jobListData.push(res.data.data.list.data);

          });
      },
      proList:function(){    // 项目列表
      var paramsList=new URLSearchParams(); 
           paramsList.append('base_id','11');
            let _this = this;
          this.$http.post(_const.requestUrl+'/v1/user/projectlist',paramsList).then(function ( res ){
            _this.proListData.push(res.data.data.list.data);
   
          });
        },
      trianList:function(){    // 培训列表
            var paramsList=new URLSearchParams(); 
                 paramsList.append('base_id','11');
                  let _this = this;
                this.$http.post(_const.requestUrl+'/v1/user/trainlist',paramsList).then(function ( res ){
                  _this.trianListData.push(res.data.data.list.data);
                
                });
          },
      eduList:function(){    // 教育列表
            var paramsList=new URLSearchParams(); 
                 paramsList.append('base_id','11');
                  let _this = this;
                this.$http.post(_const.requestUrl+'/v1/user/edcationlist',paramsList).then(function ( res ){
                  _this.eduListData.push(res.data.data.list.data);
                 
                
                });
            },
      certificateList:function(){    // 证书列表
        var paramsList=new URLSearchParams(); 
             paramsList.append('base_id','11');
              let _this = this;
            this.$http.post(_const.requestUrl+'/v1/user/awardlist',paramsList).then(function ( res ){
              _this.certificateListData.push(res.data.data.list.data)
            
            });
      },
      laguList:function(){    // 语言能力列表
          var paramsList=new URLSearchParams(); 
               paramsList.append('base_id','11');
                let _this = this;
              this.$http.post(_const.requestUrl+'/v1/user/languagelist',paramsList).then(function ( res ){
                _this.laguListData.push(res.data.data.list.data);
              
              });
        },
     skillList:function(){    // 技能列表
        var paramsList=new URLSearchParams(); 
             paramsList.append('base_id','11');
              let _this = this;
            this.$http.post(_const.requestUrl+'/v1/user/professionslist',paramsList).then(function ( res ){
              _this.skillListData.push(res.data.data.list.data);                         
            });
      },
      awardList:function(){    // 获奖经历列表
        var paramsList=new URLSearchParams(); 
             paramsList.append('base_id','11');
              let _this = this;
            this.$http.post(_const.requestUrl+'/v1/user/award_proccesslist',paramsList).then(function ( res ){
              _this.awardListData.push(res.data.data.list.data);
              console.log(res.data.data.list.data);
                         
            });
      },    

    }
  }

</script>
<style>
.showExp>div{
  margin: 0.3rem 0;
}
</style>

