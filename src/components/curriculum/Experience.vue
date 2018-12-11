<template>
  <div class="experience"> 
    <div class="job_exp" style="width: 94%;margin:0.2rem auto; display: flex;justify-content:space-between;">    
      <span>工作经历</span>
      <i class="el-icon-circle-plus"  @click="job_exp = true"></i>
      <el-dialog title="工作经验" :visible.sync="job_exp" width="90%" :modal-append-to-body="false">  
      <el-form ref="form" label-width="70px" >
          <el-form-item label="开始日期" >
          <el-col :span="24">      
              <el-date-picker type="date" :editable="false" value-format="yyyy-MM-dd"  placeholder="选择日期"  v-model="job_expForm.start_time" style="width: 100%;"></el-date-picker>              
          </el-col>
          </el-form-item>
          <el-form-item label="结束日期">
          <el-col :span="24">
              <el-date-picker type="date" value-format="yyyy-MM-dd" :editable="false" placeholder="选择日期" v-model="job_expForm.end_time" style="width: 100%;"></el-date-picker>
          </el-col>
          </el-form-item>
          <el-form-item label="企业名称">
          <el-input v-model="job_expForm.company"></el-input>
          </el-form-item>
          <el-form-item label="任职职位">
          <el-input v-model="job_expForm.job_title"></el-input>
          </el-form-item>
          <el-form-item label="工作描述">
          <el-input type="textarea" v-model="job_expForm.job_description"></el-input>
          </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="job_exp = false">取 消</el-button>
        <el-button type="primary" @click="job_expSave">保存</el-button>
      </span>
      </el-dialog>   
    </div>
    <table  style="width: 100%;font-size: 0.3rem;" :data="job_expForm.job_expTableData" v-for="(item, index) in this.job_expForm.job_expTableData">
      <tr >
        <th>序号</th>
        <th>标题</th>
        <th>操作</th>
       
      </tr>
      <tr align="center" v-for="(val,index) in item" :key="index" >
         <td>{{index+1}}</td>
        <td >{{val.company}}</td>      
        <td ><i  @click="jobEdit(index)" class="el-icon-view" style='color:#04be02'></i>&nbsp;&nbsp;&nbsp;<i @click="job_del(index)"  class="el-icon-remove" style='color:#F56C6C'><span ref='workId' >{{val.work_id}}</span></i></td>     
      </tr>
    </table>

  <div class="pro_exp" style="width: 94%;margin:0.2rem auto; display: flex;justify-content:space-between;">    
      <span>项目经验</span>
      <i class="el-icon-circle-plus" @click="pro_exp = true"></i>
      <el-dialog title="项目经验" :visible.sync="pro_exp" width="90%" :modal-append-to-body="false">  
      <el-form ref="form" label-width="70px">
           <el-form-item label="项目名称">
              <el-input  v-model="pro_expForm.pro_name" ></el-input>
          </el-form-item>
          <el-form-item label="项目标题">
              <el-input  v-model="pro_expForm.project_name" ></el-input>
          </el-form-item>
          <el-form-item label="担任角色">
              <el-input  v-model="pro_expForm.pro_role"></el-input>
          </el-form-item>
          <el-form-item label="主要职责">
              <el-input type="textarea" v-model="pro_expForm.main_duty"></el-input>
          </el-form-item>
          <el-form-item label="项目描述">
              <el-input type="textarea" v-model="pro_expForm.pro_description"></el-input>
          </el-form-item>
          <el-form-item label="开始日期">
          <el-col :span="24">
              <el-date-picker value-format="yyyy-MM-dd" :editable="false" type="date" v-model="pro_expForm.start_time" placeholder="选择日期" style="width: 100%;"></el-date-picker>
          </el-col>
          </el-form-item>
          <el-form-item label="结束日期">
          <el-col :span="24">
              <el-date-picker value-format="yyyy-MM-dd" type="date" :editable="false" placeholder="选择日期"  v-model="pro_expForm.end_time" style="width: 100%;"></el-date-picker>
          </el-col>
          </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="pro_exp = false">取 消</el-button>
        <el-button type="primary" @click="pro_expSave">保存</el-button>
      </span>
      </el-dialog>   
    </div>
    <table  style="width: 100%;font-size: 0.3rem;" :data="pro_expForm.pro_expTableData" v-for="(item, index) in this.pro_expForm.pro_expTableData" :key="item.index">
      <tr >
        <th>序号</th>
        <th>标题</th>
        <th>操作</th>        
      </tr>
      <tr align="center" v-for="(val,index) in item" :key="index">
         <td>{{index+1}}</td>
        <td >{{val.job_title}}</td>
        <td><i  @click="proEdit(index)" class="el-icon-view" style='color:#04be02'></i>&nbsp;&nbsp;&nbsp;<i @click="pro_del(index)"  class="el-icon-remove" style='color:#F56C6C'><span ref='proId' style='opacity: 0' >{{val.project_id}}</span></i></td>      
      </tr>
    </table>
  <div class="trian_exp" style="width: 94%;margin:0.2rem auto; display: flex;justify-content:space-between;">    
      <span>培训经历</span>
      <i class="el-icon-circle-plus" @click="trian_exp = true"></i>
      <el-dialog title="培训经历" :visible.sync="trian_exp" width="90%" :modal-append-to-body="false">  
      <el-form ref="form" label-width="70px">
           <el-form-item label="培训机构">
              <el-input v-model="trian_expForm.trian_name" ></el-input>
            </el-form-item>
          <el-form-item label="开始日期">
          <el-col :span="24">
              <el-date-picker value-format="yyyy-MM-dd" :editable="false" type="date" v-model="trian_expForm.start_time" placeholder="选择日期" style="width: 100%;"></el-date-picker>
          </el-col>
          </el-form-item>
          <el-form-item label="结束日期">
          <el-col :span="24">
              <el-date-picker value-format="yyyy-MM-dd" :editable="false" type="date" v-model="trian_expForm.end_time" placeholder="选择日期" style="width: 100%;"></el-date-picker>
          </el-col>
          </el-form-item>
          <el-form-item label="课程描述">
              <el-input type="textarea" v-model="trian_expForm.trian_description"></el-input>
          </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="trian_exp = false">取 消</el-button>
        <el-button type="primary"  @click="trian_expSave">确 定</el-button>
      </span>
      </el-dialog>   
    </div>
  <table  style="width: 100%;font-size: 0.3rem;" :data="trian_expForm.trian_expTableData" v-for="(item, index) in this.trian_expForm.trian_expTableData" :key="item.index">
      <tr >
        <th>序号</th>
        <th>标题</th>
        <th>操作</th>        
      </tr>
      <tr align="center" v-for="(val,index) in item" :key="index">
         <td>{{index+1}}</td>
        <td >{{val.train_company}}</td>
        <td><i  @click="trianEdit(index)" class="el-icon-view" style='color:#04be02'></i>&nbsp;&nbsp;&nbsp;<i @click="trian_del(index)"  class="el-icon-remove" style='color:#F56C6C'><span ref='trianId' style='opacity: 0' >{{val.train_id}}</span></i></td>      
      </tr>
    </table>
  <div class="edu_exp" style="width: 94%;margin:0.2rem auto; display: flex;justify-content:space-between;">    
      <span>教育经历</span>
      <i class="el-icon-circle-plus" @click="edu_exp = true"></i>
      <el-dialog title="教育经历" :visible.sync="edu_exp" width="90%" :modal-append-to-body="false">  
      <el-form ref="form" label-width="70px">
           <el-form-item label="学历">
              <el-select placeholder="请选择学历" v-model="edu_expForm.edu_record">
                  <el-option label="初中及以下" value='1'></el-option>
                  <el-option label="高中" value='2' ></el-option>
                  <el-option label="职高"  value='3'></el-option>
                  <el-option label="中技"  value='4'></el-option>
                  <el-option label="中专"  value='5'></el-option>
                  <el-option label="专科"  value='6'></el-option>
                  <el-option label="高职"  value='7'></el-option>
                  <el-option label="大学本科"  value='8'></el-option>
                  <el-option label="硕士研究生" value='9'></el-option>
                  <el-option label="博士研究生"  value='10'></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="学位">
              <el-select placeholder="请选择学历" v-model="edu_expForm.edu_degree">
                  <el-option label="无"  value='1'></el-option>
                  <el-option label="学士"  value='2'></el-option>
                  <el-option label="硕士" value='3'></el-option>
                  <el-option label="硕士"  value='4'></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="入学时间">
          <el-col :span="24">
              <el-date-picker value-format="yyyy-MM-dd" :editable="false" type="date" v-model="edu_expForm.start_time" placeholder="选择日期" style="width: 100%;"></el-date-picker>
          </el-col>
          </el-form-item>
          <el-form-item label="毕业时间">
          <el-col :span="24">
              <el-date-picker value-format="yyyy-MM-dd" type="date" :editable="false"  v-model="edu_expForm.end_time" placeholder="选择日期" style="width: 100%;"></el-date-picker>
          </el-col>
          </el-form-item>
          <el-form-item label="专业">
              <el-input  v-model="edu_expForm.profession" ></el-input>
          </el-form-item>
          <el-form-item label="毕业学校">
              <el-input  v-model="edu_expForm.edu_school" ></el-input>
          </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="edu_exp = false">取 消</el-button>
        <el-button type="primary"  @click="edu_expSave">确 定</el-button>
      </span>
      </el-dialog>   
    </div>
     <table  style="width: 100%;font-size: 0.3rem;" :data="edu_expForm.edu_expTableData" v-for="(item, index) in this.edu_expForm.edu_expTableData" :key="item.index">
        <tr >
          <th>序号</th>
          <th>标题</th>
          <th>操作</th>
        </tr>
        <tr align="center" v-for="(val,index) in item" :key="index">
           <td>{{index+1}}</td>
          <td >{{val.shcool_name}}</td>
          <td><i  @click="eduEdit(index)" class="el-icon-view" style='color:#04be02'></i>&nbsp;&nbsp;&nbsp;<i @click="edu_del(index)"  class="el-icon-remove" style='color:#F56C6C'><span ref='eduId' style='opacity: 0' >{{val.education_id}}</span></i></td>
        </tr>
    </table>
  <div class="certificate_exp" style="width: 94%;margin:0.2rem auto; display: flex;justify-content:space-between;">    
      <span>获得证书</span>
      <i class="el-icon-circle-plus" @click="certificate_exp = true"></i>
      <el-dialog title="获得证书" :visible.sync="certificate_exp" width="90%" :modal-append-to-body="false">  
      <el-form ref="form" label-width="70px">
          <el-form-item label="获得时间">
          <el-col :span="24">
              <el-date-picker value-format="yyyy-MM-dd" :editable="false" type="date"  v-model='certificateForm.getTime' placeholder="选择日期" style="width: 100%;"></el-date-picker>
          </el-col>
          </el-form-item>
          <el-form-item label="证书名称">
          <el-col :span="24">
              <el-input  v-model='certificateForm.certificateName'></el-input>
          </el-col>
          </el-form-item>
          <el-form-item label="发布机构">
              <el-input  v-model='certificateForm.getOrg' ></el-input>
          </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="certificate_exp = false">取 消</el-button>
        <el-button type="primary" @click="certificate_expSave">确 定</el-button>
      </span>
      </el-dialog>   
    </div>
     <table  style="width: 100%;font-size: 0.3rem;" :data="certificateForm.certificateTableData"  v-for="(item, index) in this.certificateForm.certificateTableData" :key="item.index">
        <tr >
          <th>序号</th>
          <th>标题</th>
          <th>操作</th>
        </tr>
        <tr align="center" v-for="(val,index) in item" :key="index">
          <td>{{index+1}}</td>
          <td >{{val.award_title}}</td>
          <td><i  @click="certEdit(index)" class="el-icon-view" style='color:#04be02'></i>&nbsp;&nbsp;&nbsp;<i @click="certificate_del(index)"  class="el-icon-remove" style='color:#F56C6C'><span ref='awardId' style='opacity: 0' >{{val.award_id}}</span></i></td>
        </tr>
    </table>
  <div class="lagu_skill" style="width: 94%;margin:0.2rem auto; display: flex;justify-content:space-between;">    
      <span>语言能力</span>
      <i class="el-icon-circle-plus" @click="lagu_skill = true"></i>
      <el-dialog title="获得证书" :visible.sync="lagu_skill" width="90%" :modal-append-to-body="false">  
      <el-form ref="form" label-width="70px">
          <el-form-item label="语言">
              <el-input v-model='laguForm.lagu' ></el-input>
          </el-form-item>
          <el-form-item label="语言等级">
              <el-input v-model='laguForm.lagu_level' ></el-input>
          </el-form-item>
          <el-form-item label="听说">
              <el-select placeholder="请选择" v-model='laguForm.hear'>
                  <el-option label="一般" value='1'></el-option>
                  <el-option label="熟练" value='2'></el-option>
                  <el-option label="精通" value='3'></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="读写">
              <el-select placeholder="请选择" v-model='laguForm.write'>
                  <el-option label="一般" value='1'></el-option>
                  <el-option label="熟练" value='2'></el-option>
                  <el-option label="精通" value='3'></el-option>
              </el-select>
          </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="lagu_skill = false">取 消</el-button>
        <el-button type="primary" @click="laguSkill_expSave" >确 定</el-button>
      </span>
      </el-dialog>   
    </div>
     <table  style="width: 100%;font-size: 0.3rem;" :data="laguForm.laguTableData"  v-for="(item, index) in this.laguForm.laguTableData" :key="item.index">
        <tr >
          <th>序号</th>
          <th>标题</th>
          <th>操作</th>
        </tr>
        <tr align="center" v-for="(val,index) in item" :key="index">
           <td>{{index+1}}</td>
          <td >{{val.language}}</td>
          <td><i  @click="laguEdit(index)" class="el-icon-view" style='color:#04be02'></i>&nbsp;&nbsp;&nbsp;<i @click="lagu_del(index)"  class="el-icon-remove" style='color:#F56C6C'><span ref='laguId' style='opacity: 0' >{{val.language_id}}</span></i></td>
        </tr>
    </table>
    <div class="skill_show" style="width: 94%;margin:0.2rem auto; display: flex;justify-content:space-between;">    
      <span>技能展示</span>
      <i class="el-icon-circle-plus" @click="skill_show = true"></i>
      <el-dialog title="技能展示" :visible.sync="skill_show" width="90%" :modal-append-to-body="false">  
      <el-form ref="form" label-width="70px">
          <el-form-item label="技能">
              <el-input v-model='skillForm.skill'></el-input>
          </el-form-item>
          <el-form-item label="熟练程度">
              <el-select placeholder="请选择" v-model='skillForm.proficiency'>
                  <el-option label="一般" value='1'></el-option>
                  <el-option label="熟练" value='2'></el-option>
                  <el-option label="精通" value='3'></el-option>
              </el-select>
          </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="skill_show = false">取 消</el-button>
        <el-button type="primary" @click="skillShow_expSave">确 定</el-button>
      </span>
      </el-dialog>   
    </div>
    <table  style="width: 100%;font-size: 0.3rem;" :data="skillForm.skillTableData" v-for="(item, index) in this.skillForm.skillTableData">
        <tr >
          <th>序号</th>
          <th>标题</th>
          <th>操作</th>
        </tr>
        <tr align="center" v-for='(val,index) in item' :key='index'>
           <td>{{index+1}}</td>
          <td >{{val.professions_title}}</td>
          <td><i  @click="skillEdit(index)" class="el-icon-view" style='color:#04be02'></i>&nbsp;&nbsp;&nbsp;<i @click="skill_del(index)"  class="el-icon-remove" style='color:#F56C6C'><span ref='professionsId' style='opacity: 0' >{{val.professions_id}}</span></i></td>
        </tr>
    </table>
    <div class="aword_Exp" style="width: 94%;margin:0.2rem auto; display: flex;justify-content:space-between;">    
      <span>获奖经历</span>
      <i class="el-icon-circle-plus" @click="aword_Exp = true"></i>
      <el-dialog title="获奖经历" :visible.sync="aword_Exp" width="90%" :modal-append-to-body="false">  
      <el-form ref="form" label-width="70px">
          <el-form-item label="获奖名称">
              <el-input v-model='awordExpForm.awordName'></el-input>
          </el-form-item>
          <el-form-item label="获奖时间">
          <el-col :span="24">
              <el-date-picker value-format="yyyy-MM-dd" :editable="false" type="date" v-model='awordExpForm.awordTime' placeholder="选择日期" style="width: 100%;"></el-date-picker>
          </el-col>
          </el-form-item>
        <el-form-item label="补充说明">
              <el-input type="textarea" v-model='awordExpForm.awordDetail'></el-input>
          </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="aword_Exp = false">取 消</el-button>
        <el-button type="primary"  @click="aword_expSave">确 定</el-button>
      </span>
      </el-dialog>   
    </div>
    <table  style="width: 100%;font-size: 0.3rem;" :data="awordExpForm.awordTableData" v-for="(item, index) in this.awordExpForm.awordTableData">
        <tr >
          <th>序号</th>
          <th>标题</th>
          <th>操作</th>
        </tr>
        <tr align="center" v-for='(val,index) in item' :key='index'>
           <td>{{index+1}}</td>
          <td >{{val.award_name}}</td>
          <td><i  @click="awardEdit(index)" class="el-icon-view" style='color:#04be02'></i>&nbsp;&nbsp;&nbsp;<i @click="award_del(index)"  class="el-icon-remove" style='color:#F56C6C'><span ref='awardExpId' style='opacity: 0' >{{val.award_proccess_id}}</span></i></td>
        </tr>
    </table>
   
  </div>

</template>

<script>
    
export default {
  data () {
        return {
           job_exp: false,
           pro_exp: false,
           trian_exp: false,
           certificate_exp: false,
           lagu_skill: false,
           skill_show: false,
           edu_exp: false,
           aword_Exp: false,
         job_expForm:{       //工作经验
          start_time:'',
          end_time:'',
          job_description:'',
          company:'',
          job_title:'',

        job_expTableData: [],
         },
         
         pro_expForm:{      //项目经验
          pro_name:'',
          pro_role:'',
          pro_description:'',
          start_time:'',
          end_time:'',
          main_duty:'',
          project_name:'',
        pro_expTableData: [],
         },
         trian_expForm:{      //培训经历
          trian_name:'',
          start_time:'',
          end_time:'',
          trian_description:'',
        trian_expTableData: [],
         },
         edu_expForm:{      //教育经历
          edu_record:'',
          edu_degree:'',
          start_time:'',
          end_time:'',
          edu_school:'',
          profession:'',
        edu_expTableData: [],
         },
         certificateForm:{      //获得证书
          certificateName:'',
          getOrg:'',
          getTime:'',
        certificateTableData: [],
         },
         laguForm:{      //语言能力
          lagu:'',
          lagu_level:'',
          hear:'',
          write:'',
        laguTableData: [],
         },
          skillForm:{      //技能展示
          skill:'',
          proficiency:'',
        skillTableData: [],
         },
         awordExpForm:{      //获奖经历
          awordName:'',
          awordTime:'',
          awordDetail:'',
        awordTableData: [],
         },
        }
      },
 created(){

 },
  mounted () {
   this.workList();
  this.proList();
  this.trianList();
  this.eduList();
  this.certificateList();
  this.skillList();
  this.awardList();
  this.laguList();


  },

   methods:{
    jobEdit:function(index){  // 编辑工作经验
           let jobTable= this.job_expForm.job_expTableData[0][index];
            this.$router.push({name:'Editjob',params: { jobTable} });
  
      },
      proEdit:function(index){  // 编辑项目经验
        let editTable= this.pro_expForm.pro_expTableData[0][index];
           
            this.$router.push({name:'Editpro',params: { editTable} });
 
      },
      trianEdit:function(index){  // 编辑培训经验
       let editTable= this.trian_expForm.trian_expTableData[0][index];
           
            this.$router.push({name:'Edittrian',params: { editTable}});  
      },
      eduEdit:function(index){  // 编辑教育
        let eduTable= this.edu_expForm.edu_expTableData[0][index];
            this.$router.push({name:'Editedu',params: { eduTable}});  
      },
      laguEdit:function(index){  // 编辑语言
            let laguTable= this.laguForm.laguTableData[0][index]; 
            this.$router.push({name:'Editlagu',params:{ laguTable}});  
      },
      skillEdit:function(index){  // 编辑技能
      let skillTable= this.skillForm.skillTableData[0][index];         
            this.$router.push({name:'Editskill',params:{ skillTable}});  
      },
      certEdit:function(index){  // 编辑证书
      let certTable= this.certificateForm.certificateTableData[0][index];                 
            this.$router.push({name:'Editcert',params:{ certTable}});  
      },
      awardEdit:function(index){  // 编辑获奖经历
       let awordTable= this.awordExpForm.awordTableData[0][index];
            this.$router.push({name:'Editaward',params:{ awordTable}});  
      },

   job_expSave:function(){  //增加工作经验
      this.job_exp=false;
      var params = new URLSearchParams();                
           params.append('base_id','11');
            params.append('start_time',this.job_expForm.start_time);
            params.append('end_time', this.job_expForm.end_time);
            params.append('company', this.job_expForm.company);
            params.append('job_title', this.job_expForm.job_title);
            params.append('job_description',this.job_expForm.job_description);
              let _this = this;
              this.$http.post(_const.requestUrl+'v1/user/addWork',params).then(function ( res ){
                console.log(res);
            });
             
          },   
      workList:function(){    // 工作列表
        var paramsList=new URLSearchParams(); 
             paramsList.append('base_id','11');
              let _this = this;
            this.$http.post(_const.requestUrl+'/v1/user/worklist',paramsList).then(function ( res ){
              _this.job_expForm.job_expTableData.push(res.data.data.list.data);
              _this.$emit('jobData',_this.job_expForm.job_expTableData);
                      
            });
      },             
      job_del:function(index){  //删除工作列表
          let work_id = this.$refs.workId[index].innerText;
          var delparms=new URLSearchParams(); 
          delparms.append('work_id',work_id)    
         let _this = this;

          this.$http.post(_const.requestUrl+'/v1/user/delWork',delparms).then(function ( res ){
            for (var i = 0; i < _this.job_expForm.job_expTableData.length; i++) {
              
              _this.job_expForm.job_expTableData[i].splice(index, 1);

            }
           
          });
      }, 
       

     pro_expSave:function(){ //增加项目经验
        this.pro_exp=false;
        var params = new URLSearchParams();
        params.append('base_id', '11');
        params.append('project_name',this.pro_expForm.project_name);
        params.append('job_title', this.pro_expForm.pro_role);
        params.append('start_time',this.pro_expForm.start_time);
        params.append('end_time', this.pro_expForm.end_time);
        params.append('project_description', this.pro_expForm.pro_description);
        params.append('main_duty', this.pro_expForm.main_duty);
        let _this = this;
            this.$http.post(_const.requestUrl+'/v1/user/addProject',params).then(function ( res ){
          
          });
      },
      proList:function(){    // 项目列表
        var paramsList=new URLSearchParams(); 
             paramsList.append('base_id','11');
              let _this = this;
            this.$http.post(_const.requestUrl+'/v1/user/projectlist',paramsList).then(function ( res ){

              _this.pro_expForm.pro_expTableData.push(res.data.data.list.data);
               _this.$emit('proData',_this.pro_expForm.pro_expTableData);


            });
      },             
      pro_del:function(index){  //删除项目列表
          let project_id = this.$refs.proId[index].innerText;
          var delparms=new URLSearchParams(); 
          delparms.append('project_id',project_id)    
         let _this = this;
          this.$http.post(_const.requestUrl+'/v1/user/delProject',delparms).then(function ( res ){
            for (var i = 0; i < _this.job_expForm.job_expTableData.length; i++) {
              _this.pro_expForm.pro_expTableData[i].splice(index, 1);
            }           
          });
      },

      trian_expSave:function(){  //增加培训经历
        this.trian_exp=false;
        var params = new URLSearchParams();
        params.append('base_id', '11');
        params.append('train_company',this.trian_expForm.trian_name);
        params.append('class_description', this.trian_expForm.trian_description);
        params.append('start_time',this.trian_expForm.start_time);
        params.append('end_time', this.trian_expForm.end_time);
        
            this.$http.post(_const.requestUrl+'/v1/user/addTrain',params).then(function ( res ){
              console.log(res);
          });
      },

      trianList:function(){    // 培训列表
          var paramsList=new URLSearchParams(); 
               paramsList.append('base_id','11');
                let _this = this;
              this.$http.post(_const.requestUrl+'/v1/user/trainlist',paramsList).then(function ( res ){
                _this.trian_expForm.trian_expTableData.push(res.data.data.list.data);
                _this.$emit('trianData',_this.trian_expForm.trian_expTableData);
              });
            },             
            trian_del:function(index){  //删除培训列表
                let train_id = this.$refs.trianId[index].innerText;
                var delparms=new URLSearchParams(); 
                delparms.append('train_id',train_id)    
               let _this = this;
                this.$http.post(_const.requestUrl+'/v1/user/delTrain',delparms).then(function ( res ){
                  for (var i = 0; i < _this.trian_expForm.trian_expTableData.length; i++) {
                    _this.trian_expForm.trian_expTableData[i].splice(index, 1);

                  }
                 
                });
            },

      edu_expSave:function(){  //增加教育经历
        this.edu_exp=false;
        var params = new URLSearchParams();
        params.append('base_id', '11');
        params.append('eduction_record',this.edu_expForm.edu_record);
        params.append('eduction_degree', this.edu_expForm.edu_degree);
        params.append('profession',this.trian_expForm.profession);
        params.append('join_shcool', this.edu_expForm.end_time);
        params.append('out_shcool',this.edu_expForm.start_time);
        params.append('shcool_name', this.edu_expForm.edu_school);
       
        this.$http.post(_const.requestUrl+'/v1/user/addEdcation',params).then(function ( res ){
          console.log(res);
          });
      },
      eduList:function(){    // 教育列表
        var paramsList=new URLSearchParams(); 
             paramsList.append('base_id','11');
              let _this = this;
            this.$http.post(_const.requestUrl+'/v1/user/edcationlist',paramsList).then(function ( res ){
              _this.edu_expForm.edu_expTableData.push(res.data.data.list.data);
               _this.$emit('eduData',_this.edu_expForm.edu_expTableData);
            
            });
          },             
            edu_del:function(index){  //删除教育列表
                let edu_id = this.$refs.eduId[index].innerText;
                var delparms=new URLSearchParams(); 
                delparms.append('education_id',edu_id);    
               let _this = this;
                this.$http.post(_const.requestUrl+'/v1/user/delEdcation',delparms).then(function ( res ){
                  for (var i = 0; i < _this.edu_expForm.edu_expTableData.length; i++) {
                    _this.edu_expForm.edu_expTableData[i].splice(index, 1);

                  }
                 
                });
            },
            certificateList:function(){    // 证书列表
              var paramsList=new URLSearchParams(); 
                   paramsList.append('base_id','11');
                    let _this = this;
                  this.$http.post(_const.requestUrl+'/v1/user/awardlist',paramsList).then(function ( res ){
                    _this.certificateForm.certificateTableData.push(res.data.data.list.data);
                    _this.$emit('certData',_this.certificateForm.certificateTableData);
                  
                  });
            },             
            certificate_del:function(index){  //删除证书列表
                let award_id = this.$refs.awardId[index].innerText;              
                var delparms=new URLSearchParams(); 
                delparms.append('award_id',award_id);    
               let _this = this;
                this.$http.post(_const.requestUrl+'/v1/user/delAward',delparms).then(function ( res ){
                  for (var i = 0; i < _this.certificateForm.certificateTableData.length; i++) {
                    _this.certificateForm.certificateTableData[i].splice(index, 1);

                  }
                 
                });
            },
      certificate_expSave:function(){  //添加证书
        this.certificate_exp=false;
        var params = new URLSearchParams();
        params.append('base_id', '11');
        params.append('award_title',this.certificateForm.certificateName);
        params.append('company', this.certificateForm.getOrg);
        params.append('get_award_time',this.certificateForm.getTime); 
   
        this.$http.post(_const.requestUrl+'/v1/user/addAward',params).then(function ( res ){
          console.log(res);
          });
      },

      laguSkill_expSave:function(){  //语言能力
        this.lagu_skill=false;
        var params = new URLSearchParams();
        params.append('base_id', '11');
        params.append('language',this.laguForm.lagu);
        params.append('language_level', this.laguForm.lagu_level);
        params.append('hearspeak',this.laguForm.hear);
        params.append('readwrite',this.laguForm.write); 
       
        this.$http.post(_const.requestUrl+'/v1/user/addLanguage',params).then(function ( res ){
          console.log(res);
          });
      },

      laguList:function(){    // 语言能力列表
          var paramsList=new URLSearchParams(); 
               paramsList.append('base_id','11');
                let _this = this;
              this.$http.post(_const.requestUrl+'/v1/user/languagelist',paramsList).then(function ( res ){
                _this.laguForm.laguTableData.push(res.data.data.list.data);
                _this.$emit('laguData',_this.laguForm.laguTableData);
              
              });
            },             
      lagu_del:function(index){  //删除语言能力列表
          let language_id = this.$refs.laguId[index].innerText;              
          var delparms=new URLSearchParams();
          delparms.append('language_id',language_id);    
         let _this = this;
          this.$http.post(_const.requestUrl+'/v1/user/delLanguage',delparms).then(function ( res ){
            for (var i = 0; i < _this.laguForm.laguTableData.length; i++) {
              _this.laguForm.laguTableData[i].splice(index, 1);

            }
           
          });
      },

      skillShow_expSave:function(){  //技能展示
        this.skill_show=false;
        var params = new URLSearchParams();
        params.append('base_id', '11');
        params.append('professions_title',this.skillForm.skill);
        params.append('proficiency', this.skillForm.proficiency);
        
          this.$http.post(_const.requestUrl+'/v1/user/addProfessions',params).then(function ( res ){
            console.log(res);
        });
      },
      skillList:function(){    // 技能列表
      var paramsList=new URLSearchParams(); 
           paramsList.append('base_id','11');
            let _this = this;
          this.$http.post(_const.requestUrl+'/v1/user/professionslist',paramsList).then(function ( res ){
            _this.skillForm.skillTableData.push(res.data.data.list.data);
             _this.$emit('skillData',_this.skillForm.skillTableData);
         
          });
      },             
      skill_del:function(index){  //删除技能列表
          let skill_id = this.$refs.professionsId[index].innerText;              
          var delparms=new URLSearchParams(); 
          delparms.append('professions_id',skill_id);    
          let _this = this;
          this.$http.post(_const.requestUrl+'/v1/user/delProfessions',delparms).then(function ( res ){
            for (var i = 0; i < _this.skillForm.skillTableData.length; i++) {
              _this.skillForm.skillTableData[i].splice(index, 1);

            }
           
          });
      },
      aword_expSave:function(){  //添加获奖经历
        this.aword_Exp=false;
        var params = new URLSearchParams();
        params.append('base_id', '11');
        params.append('award_name',this.awordExpForm.awordName);
        params.append('award_time', this.awordExpForm.awordTime);
        params.append('mark', this.awordExpForm.awordDetail);       
        this.$http.post(_const.requestUrl+'/v1/user/addAward_proccess',params).then(function ( res ){
          console.log(res);
          });
      },
      awardList:function(){    // 获奖经历列表
        var paramsList=new URLSearchParams(); 
             paramsList.append('base_id','11');
              let _this = this;
            this.$http.post(_const.requestUrl+'/v1/user/award_proccesslist',paramsList).then(function ( res ){
              _this.awordExpForm.awordTableData.push(res.data.data.list.data);
              _this.$emit('awardData',_this.awordExpForm.awordTableData);
                         
            });
      },             
      award_del:function(index){  //删除获奖列表
          let award_proccess_id = this.$refs.awardExpId[index].innerText;              
          var delparms=new URLSearchParams(); 
          delparms.append('award_proccess_id',award_proccess_id);    
          let _this = this;
          this.$http.post(_const.requestUrl+'/v1/user/delAward_proccess',delparms).then(function ( res ){
            for (var i = 0; i < _this.awordExpForm.awordTableData.length; i++) {
              _this.awordExpForm.awordTableData[i].splice(index, 1);

            }
           
          });
      },       
    },
  components: {
  
  }
}

</script>
<style>
  .experience>div>span{
    font-size: 0.35rem;
  }
   .experience>div>i{
    font-size: 0.35rem;
    color: #04be02;
   }
   table th{
    padding: 0 !important;
   }
      table td{
    padding: 0 !important;
   }
   .el-dialog{
    z-index: 99999;
   }
</style>
