<template >
<div>
<yd-layout  >
    <yd-navbar  slot="navbar" title="预览简历">       
            <yd-navbar-back-icon @click.native='back' slot="left"></yd-navbar-back-icon>       
    </yd-navbar>
    <div class="information">
        <yd-cell-group>
            <yd-cell-item>
                <span slot="left">姓名</span>
                <input slot="right"  type="text" placeholder="请输入姓名" value="" v-model='uname' >
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">手机号</span>
                <input slot="right" name='phone' type="number" placeholder="请输入手机号" v-model='mobile' >
            </yd-cell-item>        
            <yd-cell-item>
                <span slot="left">身份证</span>
                <input slot="right"  type="text" placeholder="请输入身份证" v-model='card_no'>
            </yd-cell-item>   
            <yd-cell-item>
                <span slot="left">邮箱</span>
                <input slot="right"  type="text" placeholder="请输入邮箱" v-model='email'>
            </yd-cell-item>
        </yd-cell-group>
    </div>
    <div style='width:94%;margin: 0.2rem auto; text-align: right;'><span style='color:#72ACE3;' value="toggle" v-on:click="toggle()">更多></span></div>
<div class="information" v-show="data.isShow" >
    <yd-cell-group>
        <yd-cell-item arrow type="label">
            <span style="line-height: 1rem" slot="left">性别</span>
            <select slot="right" v-model="selectedsex">
                <option value="">请选择性别</option>
                <option value="1">男</option>
                <option value="2">女</option>
                <option value="3">未知</option>
            </select>
        </yd-cell-item>
        <yd-cell-item>
            <span slot="left">年龄</span>
            <input slot="right" type="number" placeholder="请输入年龄" v-model="age">
        </yd-cell-item>
        <yd-cell-item>
            <span slot="left">籍贯</span>
            <input slot="right" type="text" placeholder="请输入籍贯" v-model="native_place">
        </yd-cell-item>
        <yd-cell-item>
            <span style="line-height: 1rem" slot="left">政治面貌</span>
            <select slot="right"  v-model="politics ">
                <option value="">请选择性别</option>
                <option value="1">党员</option>
                <option value="2">群众</option>
            </select>
        </yd-cell-item>
        <yd-cell-item>
            <span style="line-height: 1rem" slot="left">婚姻状况</span>
            <select slot="right" v-model="marriage ">
                <option value="">请选择</option>
                <option value="1">已婚</option>
                <option value="2">未婚</option>
                <option value="3">离异</option>
            </select>
        </yd-cell-item>
        <yd-cell-item>
            <span style="line-height: 1rem" slot="left">民族</span>
            <select slot="right" id="nations" v-model="nation  ">
                <option value="">请选择</option>
            </select>
        </yd-cell-item>
        <yd-cell-item>
                <span slot="left">户口所在地</span>
                <input slot="right" type="text" placeholder="请输入地址" > 
        </yd-cell-item>
        <yd-cell-item>
            <span style="line-height: 1rem" slot="left">最高学历</span>
            <select slot="right" v-model="top_education ">
                <option value="">请选择</option>
                <option value="1">初中及以下</option>
                <option value="2">高中</option>
                <option value="3">职高</option>
                <option value="4">中技</option>
                <option value="5">中专</option>
                <option value="6">专科</option>
                <option value="7">高职</option>
                <option value="8">大学本科</option>
                <option value="9">硕士研究生</option>
                <option value="10">博士研究生</option>
            </select>
        </yd-cell-item>
        <yd-cell-item>
            <span style="line-height: 1rem" slot="left">目前工作状况</span>
            <select slot="right" v-model="current_work_status">
                <option value="">请选择</option>
                <option value="1">在岗</option>
                <option value="2">待岗</option>
            </select>
        </yd-cell-item>
        <yd-cell-item>
            <span slot="left">期望月薪</span>
            <input slot="right" type="text" placeholder="请输入期望月薪" v-model="hope_salary">
        </yd-cell-item>
        <yd-cell-item>
            <span slot="left">现居住地</span>
            <input slot="right" type="text" placeholder="请输入现居住地" v-model="current_address">
        </yd-cell-item>
  
    </yd-cell-group>
    <yd-cell-group title="自我评价">
        <yd-cell-item>
            <textarea  style='width:100%;height: 2rem;padding: 0.2rem 0;border: none;resize: none;' slot="right" placeholder="请输入您的自我评价" maxlength="300" v-model="evaluation "></textarea>
        </yd-cell-item>
    </yd-cell-group>
</div>
    
<ReumenShowExp ref="whateverChild"></ReumenShowExp>
 <yd-button style="width: 94%; margin: 0.2rem auto;height: 0.6rem" size="large" @click.native="updateResume()" type="primary" v-show=isShowView >回到首页</yd-button>
 <yd-button style="width: 94%; margin: 0.2rem auto;height: 0.6rem" size="large" @click.native="submitResume()" type="primary" v-show=isShowAplly>提交申请</yd-button>
 <yd-button style="width: 94%; margin: 0.2rem auto;height: 0.6rem" size="large" @click.native="editResume()" type="primary" v-show=isShowAplly>修改简历</yd-button>

</yd-layout>

</div>
</template>
<script src="//static.ydcss.com/uploads/ydui/ydui.citys.js"></script>
<script>
    import ReumenShowExp from "./ReumenShowExp";
    import Curriculum from "./Curriculum";
    var content=Curriculum ;
    export default {
        components:{    
            ReumenShowExp,
            Curriculum 
           },
        data () {
            return {
               resumeList:[],
               isShowAplly: false,
               isShowView: false,
               data:{
                    isShow:false,
                    value:'',
                    base_id: this.$route.params.base_id                                    
                },
                jobData:[],                
                  age:'',
                  uname:'',
                  mobile:'',
                  card_no:'',
                  email:'',
                  selectedsex:'',
                  native_place:'',
                  nation:'',
                  politics: '',
                  reg_address:'',
                  current_address:'',
                  top_education:'',
                  marriage:'',
                  current_work_status:'',
                  hope_salary :'',
                  evaluation :''                                     
            }
        },
        beforeCreate () {
            //this.$dialog.toast({mes: `1`});
        },
        created () {
            //this.$dialog.toast({mes: `1`});
        },
        mounted () {          
             this.findeResume();
            this.hideBtn();
    
        },
        methods:{
  
      back:function(){ 
        this.$router.go(-1);
      },     
      editResume:function(){ //修改简历
         this.$router.push({name:'Curriculum',params:{type:'edit'}}) 
      },    
      hideBtn: function (){
        if(this.$route.params.type=='view'){
          this.isShowView=true;         
        }else if(this.$route.params.type=='apply'){
          this.isShowAplly=true;
        }
      },    
      updateResume:function(){
        this.$router.push({name:'home'})
      },    
     findeResume:function (){

      let params = new URLSearchParams();
        params.append('wx_openid', '1');
        let _this = this; 
        this.$http.post(_const.requestUrl+'/v1/user/findResume',params).then(function ( res ){
          _this.resumeList=res.data.data.list;
          _this.uname=_this.resumeList.name;
          _this.age=_this.resumeList.age;
          _this.mobile=_this.resumeList.mobile;
          _this.card_no=_this.resumeList.card_no;
          _this.uname=_this.resumeList.name;
          _this.email=_this.resumeList.email;
          _this.selectedsex=_this.resumeList.selectedsex;
          _this.native_place=_this.resumeList.native_place;
          _this.nation=_this.resumeList.nation;
          _this.politics=_this.resumeList.politics;
          _this.reg_address=_this.resumeList.reg_address;
          _this.current_address=_this.resumeList.current_address;
          _this.top_education=_this.resumeList.top_education;
          _this.marriage=_this.resumeList.marriage;
          _this.current_work_status=_this.resumeList.current_work_status;
          _this.hope_salary=_this.resumeList.hope_salary;
          _this.evaluation=_this.resumeList.evaluation;
          });

     },

submitResume:function(){ //提交申请
 let jobExp = this.$refs.whateverChild.jobListData[0] ; //工作经验
     for (var i = 0; i < jobExp.length; i++) {
          delete jobExp[i].w_create_time;
          delete jobExp[i].w_update_time;
          delete jobExp[i].work_id;
        }
  let proExp = this.$refs.whateverChild.proListData[0] ; //项目
    for (var i = 0; i < proExp.length; i++) {
        delete proExp[i].pro_create_time;
        delete proExp[i].pro_update_time;
        delete proExp[i].project_id;
      } 

 let trianExp = this.$refs.whateverChild.trianListData[0] ; //培训
  for (var i = 0; i < trianExp.length; i++) {
      delete trianExp[i].train_create_time;
      delete trianExp[i].train_update_time;
      delete trianExp[i].train_id;
    } 
  let eduExp = this.$refs.whateverChild.eduListData[0] ; //教育
  for (var i = 0; i < eduExp.length; i++) {
      delete eduExp[i].edu_create_time;
      delete eduExp[i].edu_update_time;
      delete eduExp[i].education_id;
    } 
   let certExp = this.$refs.whateverChild.certificateListData[0] ; //获得证书
  for (var i = 0; i < certExp.length; i++) {
      delete certExp[i].award_create_time;
      delete certExp[i].award_update_time;
      delete certExp[i].award_id;
    }
 let laguExp = this.$refs.whateverChild.laguListData[0] ; //语言技能
  for (var i = 0; i < laguExp.length; i++) {
      delete laguExp[i].language_id;
      delete laguExp[i].language_update_time;
      delete laguExp[i].language_create_time;
    }
  let skillExp = this.$refs.whateverChild.skillListData[0] ; //技能展示
  for (var i = 0; i < skillExp.length; i++) {
      delete skillExp[i].professions_id;
      delete skillExp[i].professions_update_time;
      delete skillExp[i].professions_create_time;
    }
  let awardExp = this.$refs.whateverChild.awardListData[0] ; //获奖经历
  for (var i = 0; i < awardExp.length; i++) {
      delete awardExp[i].award_proccess_id;
      delete awardExp[i].award_proccess_create_time;
      delete awardExp[i].award_proccess_update_time;
    }   
/*   content.methods.getCertData(data);*/

  let data = {
    "data": [
    {
      "user_id": this.user_id,
      "name": this.name,
      "card_no": this.card_no,
      "sex": this.sex,
      "age": this.age,
      "native_place": this.native_place,
      "nation":  this.nation,
      "politics":this.politics,
      "reg_address":this.reg_address,
      "current_address": this.current_address,
      "top_education": this.top_education,
      "mobile": this.mobile,
      "email":  this.email,
      "marriage": this.marriage,
      "current_work_status":  this.current_work_status,
      "hope_salary":this.hope_salary,
      "evaluation":this.evaluation,
      "resume_work": jobExp,
      "resume_education": eduExp,
      "resume_project": proExp,
      "resume_train": trianExp,
      "resume_award": certExp,
      "resume_language": laguExp,
      "resume_professions": skillExp,
      "resume_award_proccess": awardExp
    }
  ]
};   
    let url =_const.requestUrl+ '/v1/resume/submitResume';
    let _this=this;
    $.post(url,data,function(res){
      //alert('申请成功');
      _this.$dialog.toast({
              mes: '申请成功',
              timeout: 1000,
              icon: 'success'
            });
      setTimeout(function(){
        _this.$router.push({path:'/ShcoolList'});
      },1000);
    });

  },


  toggle: function(){
      this.data.isShow = !this.data.isShow;
  },
  saveResume: function(){
      var params = new URLSearchParams();
        params.append('user_id', '13');
        params.append('name', this.uname);
        params.append('mobile', this.mobile);
        params.append('card_no', this.card_no);
        params.append('email', this.email);
        params.append('name', this.selectedsex);
        params.append('mobile', this.native_place);
        params.append('card_no', this.nation);
        params.append('email', this.politics);
        params.append('name', this.reg_address);
        params.append('mobile', this.current_address);
        params.append('card_no', this.top_education);
        params.append('email', this.current_work_status);
        params.append('email', this.hope_salary);
        params.append('email', this.marriage);
        params.append('email', this.evaluation);
        params.append('email', this.age);
          let _this = this
          this.$http.post("http://192.168.197.58:80/v1/user/saveResume",params).then(function ( res ){
            console.log(res);
         
      });
  }                 
}
    }
</script>
<style>

.information input,select{
    padding-left: 0.8rem;

}
section{
  background: #fff !important;
}
.information span{
    display: inline-block;
    font-weight: bold;
    width: 1rem;
    text-align-last:justify;
}

::-webkit-input-placeholder { /* WebKit browsers */
    color:    #999;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:    #999;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:    #999;
}
:-ms-input-placeholder { /* Internet Explorer 10+ */
    color:    #999;
}
.projectExperience{
    margin: 0.5rem 0;
}
</style>