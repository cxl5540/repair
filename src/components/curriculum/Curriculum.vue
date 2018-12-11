<template >
<div>
<yd-layout style="background: #fff">
    <yd-navbar  slot="navbar" title="完善简历">       
            <yd-navbar-back-icon @click.native='back' slot="left"></yd-navbar-back-icon>       
    </yd-navbar>
    <div class="information">
        <yd-cell-group>
            <yd-cell-item>
                <span slot="left">姓名</span>
                <input slot="right" type="text" placeholder="请输入姓名" value="" v-model='uname' >
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">手机号</span>
                <input slot="right" type="number" placeholder="请输入手机号" v-model='mobile' >
            </yd-cell-item>        
            <yd-cell-item>
                <span slot="left">身份证</span>
                <input slot="right" type="number" placeholder="请输入身份证" v-model='card_no'>
            </yd-cell-item>   
            <yd-cell-item>
                <span slot="left">邮箱</span>
                <input slot="right" type="text" placeholder="请输入邮箱" v-model='email'>
            </yd-cell-item>
        </yd-cell-group>
    </div>
    <div style='width:94%;margin: 0.2rem auto; text-align: right;'><span style='color:#72ACE3;' value="toggle" v-on:click="toggle()">更多></span></div>
<div class="information" v-show="data.isShow" >
    <yd-cell-group>
        <yd-cell-item arrow type="label">
            <span style="line-height: 1rem" slot="left">性别</span>
            <select slot="right" v-model="sex">
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
            <input slot="right" type="text" readonly="readonly" placeholder="请输入籍贯" v-model="native_place">
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
        <yd-cell-item @click.native='aa'>
            <span style="line-height: 1rem" slot="left"  >民族</span>
            <select slot="right" id="nations" v-model="nation" readonly   >
                <option value="">请选择</option>
            </select>
        </yd-cell-item>
        <yd-cell-item>
                <span slot="left">户口所在地</span>
                <!-- <input slot="right" type="text" class="select-value" placeholder="请输入户籍所在地" > --> <input slot="right" type="text" @click.stop="show1 = true" v-model="model1" readonly placeholder="请选择户籍所在地">
        </yd-cell-item>
        <yd-cityselect v-model="show1" :callback="result1" :items="district"></yd-cityselect>
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
            <input slot="right"  type="text" placeholder="请输入现居住地" v-model="current_address" readonly>
        </yd-cell-item>
  
    </yd-cell-group>
    <yd-cell-group title="自我评价">
        <yd-cell-item>
            <textarea  style='width:100%;height: 2rem;padding: 0.2rem 0;border: none;resize: none;' slot="right" placeholder="请输入您的自我评价" maxlength="300" v-model="evaluation "></textarea>
        </yd-cell-item>
    </yd-cell-group>
</div>
    <yd-button style="width: 94%; margin: 0.2rem auto;height: 0.6rem" size="large" @click.native="saveResume()" type="primary">确认</yd-button>

<Experience v-on:jobData='getJobData' v-on:proData='getProData' v-on:eduData='getEduData' v-on:trianData='getTrianData'
v-on:skillData='getSkillData' v-on:laguData='getLaguData'  v-on:awardData='getAwardData' v-on:certData='getCertData'></Experience>
<yd-button style="width: 94%; margin: 0.2rem auto;height: 0.6rem" size="large" @click.native="creatCurruclum()" type="primary">保存</yd-button>
</yd-layout>

</div>
</template>

<script>
     import Experience from "./Experience";
     /*import  "../../../static/js/jquery.min.js";*/
     import District from 'ydui-district/dist/jd_province_city_id.js';
    export default {
        components:{    
            Experience 
           },
        data () {
            return {
               show1: false,
                model1: '',
                district: District,
               data:{
                    isShow:false,
                    value:'',
                    base_id: this.$route.params.base_id,                                                                                                          
                },
                jobData:'',
                 attrJob:'',
                 proData:'',
                 attrPro:'',
                 eduData:'',
                 attrEdu:'',
                 trianData:'',
                 attrTrian:'',
                 skillData:'',
                 attrSkill:'',
                 laguData:'',
                 attrLagu:'',
                 awardData:'',
                 attrAward:'',
                 certData:'',
                 attrCert:'', 
                  age:'',
                  uname:'',
                  mobile:'',
                  card_no:'',
                  email:'',
                  sex:'',
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
        //this.getJobData();
        this.bb();           
        },
        methods:{
          result1(ret) {
                this.model1 = ret.itemName1 + ' ' + ' ' + ret.itemName2;
            },
          bb:function(){
            this.uname=this.$route.query.name;
            this.mobile=this.$route.query.mobile;
             this.card_no=this.$route.query.card_no;
            this.email=this.$route.query.email;
          },
      aa:function(){
      let nations = [
      "汉族", "壮族", "满族", "回族", "苗族", "维吾尔族", "土家族", "彝族", "蒙古族", "藏族", "布依族", "侗族", "瑶族", "朝鲜族", "白族", "哈尼族",
      "哈萨克族", "黎族", "傣族", "畲族", "傈僳族", "仡佬族", "东乡族", "高山族", "拉祜族", "水族", "佤族", "纳西族", "羌族", "土族", "仫佬族", "锡伯族",
      "柯尔克孜族", "达斡尔族", "景颇族", "毛南族", "撒拉族", "布朗族", "塔吉克族", "阿昌族", "普米族", "鄂温克族", "怒族", "京族", "基诺族", "德昂族", "保安族",
      "俄罗斯族", "裕固族", "乌孜别克族", "门巴族", "鄂伦春族", "独龙族", "塔塔尔族", "赫哲族", "珞巴族"
    ];
     var nation = $("#nations");
       for ( var i=0;i<nations.length;i++) {
        var a=nations[i];       
        nation.append("<option value='nations[i]'>"+a+"</option>");
    }
    },
    getJobData:function(data){   //获取工作经验
        this.jobData=data[0];
        var a=this.jobData;     
        var _aCopy = [].concat(JSON.parse(JSON.stringify(a)));
        var attr=[];
        for(var i =0;i<_aCopy.length;i++){
          let obj=_aCopy[i];        
          attr.push(obj);                
        }        
        for (var i = 0; i < attr.length; i++) {
          delete attr[i].w_create_time;
          delete attr[i].w_update_time;
          delete attr[i].work_id;
        }
        this.attrJob=attr;
    },
    getProData:function(data){  //获取项目经验
      this.proData=data[0];
        var a=this.proData;
        var _aCopy = [].concat(JSON.parse(JSON.stringify(a))); 
        var attr=[];
        for(var i =0;i<_aCopy.length;i++){
          let obj=_aCopy[i];
          attr.push(obj);                   
        }      
        for (var i = 0; i < attr.length; i++) {
          delete attr[i].pro_create_time;
          delete attr[i].pro_update_time;
         delete attr[i].project_id;
        }
       
        this.attrPro=attr;
    },
    getEduData:function(data){  //获取教育经历
      this.eduData=data[0];
        var a=this.eduData;
        var _aCopy = [].concat(JSON.parse(JSON.stringify(a))); 
        var attr=[];
        for(var i =0;i<_aCopy.length;i++){
          let obj=_aCopy[i];
          attr.push(obj);                   
        }
        for (var i = 0; i < attr.length; i++) {
          delete attr[i].edu_create_time;
          delete attr[i].edu_update_time;
          delete attr[i].education_id;
        }
        
        this.attrEdu=attr;
    },
    getTrianData:function(data){  //获取培训经历
      this.trianData=data[0];
        var a=this.trianData;
        var _aCopy = [].concat(JSON.parse(JSON.stringify(a))); 
        var attr=[];
        for(var i =0;i<_aCopy.length;i++){
          let obj=_aCopy[i];
          attr.push(obj);                   
        }
        for (var i = 0; i < attr.length; i++) {
          delete attr[i].train_id;
          delete attr[i].train_create_time;
          delete attr[i].train_update_time;
        }
         
        this.attrTrian=attr;
    },
    getSkillData:function(data){  //获取技能展示
      this.skillData=data[0];
        var a=this.skillData;
        var _aCopy = [].concat(JSON.parse(JSON.stringify(a)));
        var attr=[];
        for(var i =0;i<_aCopy.length;i++){
          let obj=_aCopy[i];
          attr.push(obj);                   
        }
        for (var i = 0; i < attr.length; i++) {
          delete attr[i].professions_id;
          delete attr[i].professions_update_time;
          delete attr[i].professions_create_time;
        }
      
        this.attrSkill=attr;
    },
    getLaguData:function(data){  //获取语言技能
      this.laguData=data[0];
        var a=this.laguData;
        var _aCopy = [].concat(JSON.parse(JSON.stringify(a))); 
        var attr=[];
        for(var i =0;i<_aCopy.length;i++){
          let obj=_aCopy[i];
          attr.push(obj);                   
        }
        for (var i = 0; i < attr.length; i++) {
          delete attr[i].language_id;
          delete attr[i].language_update_time;
          delete attr[i].language_create_time;
        }
        
        this.attrLagu=attr;
    },
    getAwardData:function(data){  //获取获奖经历
      this.awardData=data[0];
        var a=this.awardData;
        var _aCopy = [].concat(JSON.parse(JSON.stringify(a))); 
        var attr=[];
        for(var i =0;i<_aCopy.length;i++){
          let obj=_aCopy[i];
          attr.push(obj);                   
        }
        for (var i = 0; i < attr.length; i++) {
          delete attr[i].award_proccess_id;
          delete attr[i].award_proccess_create_time;
          delete attr[i].award_proccess_update_time;
        }

        this.attrAward=attr;
    },
    getCertData:function(data){  //获取证书
      this.certData=data[0];
        var a=this.certData;
        var _aCopy = [].concat(JSON.parse(JSON.stringify(a))); 
        var attr=[];
        for(var i =0;i<_aCopy.length;i++){
          let obj=_aCopy[i];
          attr.push(obj);                   
        }
        for (var i = 0; i < attr.length; i++) {
          delete attr[i].award_create_time;
          delete attr[i].award_update_time;
          delete attr[i].award_id;
        }
         console.log(attr);
        this.attrCert=attr;
      },



    back:function(){     
    this.$router.go(-1);
  }, 
creatCurruclum: function () {

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
      "resume_work": this.attrJob,
      "resume_education": this.attrEdu,
      "resume_project": this.attrPro,
      "resume_train": this.attrTrian,
      "resume_award": this.attrAward,
      "resume_language": this.laguData,
      "resume_professions": this.attrSkill,
      "resume_award_proccess": this.attrCert
    }
  ]
};   
    
    let url =_const.requestUrl+ '/v1/resume/submitResume';
    let _this=this;
    $.post(url,data,function(res){      
      if(_this.$route.params.type=='edit'){
        //alert('保存成功');
        _this.$dialog.toast({
              mes: '保存成功',
              timeout: 1000,
              icon: 'success'
            });
        _this.$router.go(-1);
      }
      setTimeout(function(){
      _this.$router.push({name: 'Resume',params:{type:'view'}})
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
        params.append('sex', this.sex);
        params.append('native_place', this.native_place);
        params.append('nation', this.nation);
        params.append('politics', this.politics);
        params.append('reg_address', this.reg_address);
        params.append('current_address', this.current_address);
        params.append('top_education', this.top_education);
        params.append('current_work_status', this.current_work_status);
        params.append('hope_salary', this.hope_salary);
        params.append('marriage', this.marriage);
        params.append('evaluation', this.evaluation);
        params.append('age', this.age);
          let _this = this
          this.$http.post(_const.requestUrl+'/v1/user/saveResume',params).then(function ( res ){
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