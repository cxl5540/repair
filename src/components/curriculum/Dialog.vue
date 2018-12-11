<template>
<div>
 <div class="dialog" v-show='values' >
    <div class="job-modal"  v-show='values==1'>
          <el-dialog
              title="提示"
              :visible.sync="dialogVisible"
              width="30%"
              :before-close="handleClose">
              <span>这是一段信息</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
            </el-dialog> 
        </div>
  

    <div class="pro-modal" v-show='values==2'>
          <yd-cell-group title="添加项目经历" style='text-align: center;'>
                    <yd-cell-item>
                        <span slot="left">项目名称</span>
                        <input slot="right" type="text" placeholder="">
                    </yd-cell-item>
                    <yd-cell-item>
                        <span slot="left">担任角色</span>
                        <input slot="right" type="text" placeholder="">
                    </yd-cell-item>
                    <yd-cell-item>
                        <span slot="left">项目描述</span>
                        <input slot="right" type="text" placeholder="">
                    </yd-cell-item>
                    <yd-cell-item>
                        <span slot="left">开始时间</span>
                        <input slot="right" type="text" placeholder="">
                    </yd-cell-item>
                    <yd-cell-item>
                        <span slot="left">结束时间</span>
                        <input slot="right" type="text" placeholder="">
                    </yd-cell-item>
                    <yd-cell-group title="工作职责">
                        <yd-cell-item>
                            <textarea  style='width:100%;height: 2rem;padding: 0.2rem 0;border: none;resize: none;' slot="right" placeholder="请输入工作职责" maxlength="300"></textarea>
                        </yd-cell-item>
                    </yd-cell-group>                                                          
            <div style="width: 70%;margin: 0 auto;display: flex;justify-content: space-between; padding: 0.2rem 0;">
                <yd-button type="primary" @click.native="save($event)">保存</yd-button>
                <yd-button type="hollow" @click.native="cansel()">取消</yd-button>
            </div>    
         </yd-cell-group>  
        </div>
   

    <div class="train-modal"  v-show='values==3'>
          <yd-cell-group title="培训经历" style='text-align: center;'>
                    <yd-cell-item>
                        <span slot="left">培训机构</span>
                        <input slot="right" type="text" placeholder="">
                    </yd-cell-item>
                    <yd-cell-item>
                        <span slot="left">开始时间</span>
                        <input slot="right" type="text" placeholder="">
                    </yd-cell-item>
                    <yd-cell-item>
                        <span slot="left">结束时间</span>
                        <input slot="right" type="text" placeholder="">
                    </yd-cell-item>
                    <yd-cell-group title="课程描述">
                        <yd-cell-item>
                            <textarea  style='width:100%;height: 2rem;padding: 0.2rem 0;border: none;resize: none;' slot="right" placeholder="课程描述" maxlength="300"></textarea>
                        </yd-cell-item>
                    </yd-cell-group>                                                          
                <div style="width: 70%;margin: 0 auto;display: flex;justify-content: space-between; padding: 0.2rem 0;">
                    <yd-button type="primary" @click.native="save($event)">保存</yd-button>
                    <yd-button type="hollow" @click.native="cansel()">取消</yd-button>
                </div>    
         </yd-cell-group>  
        </div>
 

    <div class="edu-modal"  v-show='values==4'>
          <yd-cell-group title="教育经历" style='text-align: center;'>
                <yd-cell-item>
                    <span style="line-height: 1rem" slot="left">学历</span>
                    <select slot="right">
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
                    <span style="line-height: 1rem" slot="left">学位</span>
                    <select slot="right">
                        <option value="">请选择</option>
                        <option value="1">学士</option>
                        <option value="2">硕士</option>
                        <option value="3">博士</option>
                        <option value="4">无</option>                   
                    </select>
                </yd-cell-item>
                <yd-cell-item>
                    <span slot="left">入学时间</span>
                    <input slot="right" type="text" placeholder="">
                </yd-cell-item>
                <yd-cell-item>
                    <span slot="left">毕业时间</span>
                    <input slot="right" type="text" placeholder="">
                </yd-cell-item>
                <yd-cell-item>
                    <span slot="left">毕业学校</span>
                    <input slot="right" type="text" placeholder="">
                </yd-cell-item>                                                          
                <div style="width: 70%;margin: 0 auto;display: flex;justify-content: space-between; padding: 0.2rem 0;">
                    <yd-button type="primary" @click.native="save($event)">保存</yd-button>
                    <yd-button type="hollow" @click.native="cansel()">取消</yd-button>
                </div>    
         </yd-cell-group>  
        </div>


    <div class="certificate-modal" v-show='values==5'>
          <yd-cell-group title="获得证书" style='text-align: center;'>
                <yd-cell-item>
                    <span slot="left">证书取得时间</span>
                    <input slot="right" type="text" placeholder="">
                </yd-cell-item>
                <yd-cell-item>
                    <span slot="left">证书名称</span>
                    <input slot="right" type="text" placeholder="">
                </yd-cell-item>
                <yd-cell-item>
                    <span slot="left">证书发布机构</span>
                    <input slot="right" type="text" placeholder="">
                </yd-cell-item>                                                          
                <div style="width: 70%;margin: 0 auto;display: flex;justify-content: space-between; padding: 0.2rem 0;">
                    <yd-button type="primary" @click.native="save($event)">保存</yd-button>
                    <yd-button type="hollow" @click.native="cansel()">取消</yd-button>
                </div>    
         </yd-cell-group>  
        </div>


    <div class="lagu-modal" style='display: none;' v-show='values==6'>
          <yd-cell-group title="语言能力" style='text-align: center;'>
                <yd-cell-item>
                    <span slot="left">语言</span>
                    <input slot="right" type="text" placeholder="">
                </yd-cell-item>
                <yd-cell-item>
                    <span slot="left">语言等级</span>
                    <input slot="right" type="text" placeholder="">
                </yd-cell-item>
                 <yd-cell-item>
                    <span style="line-height: 1rem" slot="left">听说</span>
                    <select slot="right">
                        <option value="">请选择</option>
                        <option value="1">一般</option>
                        <option value="2">熟练</option>
                        <option value="3">精通</option>                  
                    </select>
                </yd-cell-item>
                <yd-cell-item>
                    <span style="line-height: 1rem" slot="left">读写</span>
                    <select slot="right">
                        <option value="">请选择</option>
                        <option value="1">一般</option>
                        <option value="2">熟练</option>
                        <option value="3">精通</option>                  
                    </select>
                </yd-cell-item>                                                          
                <div style="width: 70%;margin: 0 auto;display: flex;justify-content: space-between; padding: 0.2rem 0;">
                    <yd-button type="primary" @click.native="save($event)">保存</yd-button>
                    <yd-button type="hollow" @click.native="cansel()">取消</yd-button>
                </div>    
         </yd-cell-group>  
        </div>
 

    <div class="skillShow-modal"  v-show='values==7'>
          <yd-cell-group title="技能暂时" style='text-align: center;'>
                <yd-cell-item>
                    <span slot="left">技能展示</span>
                    <input slot="right" type="text" placeholder="">
                </yd-cell-item>
                 <yd-cell-item>
                    <span style="line-height: 1rem" slot="left">熟练程度</span>
                    <select slot="right">
                        <option value="">请选择</option>
                        <option value="1">一般</option>
                        <option value="2">熟练</option>
                        <option value="3">精通</option>                  
                    </select>
                </yd-cell-item>                                                        
                <div style="width: 70%;margin: 0 auto;display: flex;justify-content: space-between; padding: 0.2rem 0;">
                    <yd-button type="primary" @click.native="save($event)">保存</yd-button>
                    <yd-button type="hollow" @click.native="cansel()">取消</yd-button>
                </div>    
         </yd-cell-group>  
        </div>
 
   
    <div class="awordExp-modal" v-show='values==8'>
          <yd-cell-group title="获奖经历" style='text-align: center;' >
                <yd-cell-item>
                    <span slot="left">获奖名称</span>
                    <input slot="right" type="text" placeholder="">
                </yd-cell-item>
                <yd-cell-item>
                    <span slot="left">获奖时间</span>
                    <input slot="right" type="text" placeholder="">
                </yd-cell-item>
                 <yd-cell-group title="补充说明">
                    <yd-cell-item>
                        <textarea  style='width:100%;height: 2rem;padding: 0.2rem 0;border: none;resize: none;' slot="right" placeholder="课程描述" maxlength="300"></textarea>
                    </yd-cell-item>
                    </yd-cell-group>                                                        
                <div style="width: 70%;margin: 0 auto;display: flex;justify-content: space-between; padding: 0.2rem 0;">
                    <yd-button type="primary"  @click.native="save($event)">保存</yd-button>
                    <yd-button type="hollow" @click.native="cansel()">取消</yd-button>
                </div>    
         </yd-cell-group>  
        </div>
 </div>
</div>
</template>
<script>
    export default {
        props: {
            values:String,
            },

        data () {
            return {
               change:{
                    isShow:true,
                    flag:true
                },

                 jobExp:{
                    base_id:'',
                    start_time:'',
                    end_time:'',
                    company:'',
                    job_title:'',
                    job_description:'', 
                 },
                  dialogVisible: false                                             
            }
        },
        beforeCreate () {
            //this.$dialog.toast({mes: `1`});
        },
        created () {
            //this.$dialog.toast({mes: `1`});
        },
        mounted () {
         
        },
        methods:{
            handleClose(done) {
            this.$confirm('确认关闭？')
              .then(_ => {
                done();
              })
              .catch(_ => {});
          },
    
            cansel: function (){                 
               
            },
            savejobExp: function (){
                console.log(1)
                var params = new URLSearchParams();                
                 params.append('base_id', '25');
                  params.append('start_time','2010');
                  params.append('end_time', '200');
                  params.append('company', this.jobExp.company);
                  params.append('job_title', this.jobExp.job_title);
                  params.append('job_description', this.jobExp.job_description);
                    let _this = this
                    this.$http.post("http://192.168.197.58:80/v1/user/addWork",params).then(function ( res ){
                    var job_id = res.data.data.list;
                    _this.$emit('listenToChild',_this.jobExp)
                    setTimeout(function(){
                        
                    },2000)
                   console.log(res)
                });
            },

        }
    }
</script>
<style>
.dialog{
    width: 100%;
    height: 100vh;
    position: fixed;
     top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 111;
    background: rgba(0,0,0,0.1);

}
.job-modal{
position: absolute;
width: 84%;
top: 19%;
left: 25%;
margin-left: -61.5px;
z-index:999; 
}
.job-modal input{
    padding-left: 0.3rem;
}
.yd-cell-box:nth-child(1){
    background: #fff;
    color: #000;
}
.pro-modal{
position: absolute;
width: 84%;
top: 19%;
left: 25%;
margin-left: -61.5px;
}
.pro-modal input{
    padding-left: 0.3rem;
}
.train-modal{
position: absolute;
width: 84%;
top: 19%;
left: 25%;
margin-left: -61.5px;
}
.train-modal input{
    padding-left: 0.3rem;
}
.edu-modal{
position: absolute;
width: 84%;
top: 19%;
left: 25%;
margin-left: -61.5px;
}
.edu-modal input{
    padding-left: 0.3rem;
}
.certificate-modal{
position: absolute;
width: 84%;
top: 19%;
left: 25%;
margin-left: -61.5px;
}
.certificate-modal input{
    padding-left: 0.3rem;
}
.lagu-modal{
position: absolute;
width: 84%;
top: 19%;
left: 25%;
margin-left: -61.5px;
}
.lagu-modal input{
    padding-left: 0.3rem;
}
.skillShow-modal{
position: absolute;
width: 84%;
top: 19%;
left: 25%;
margin-left: -61.5px;
}
.skillShow-modal input{
    padding-left: 0.3rem;
}
.awordExp-modal{
position: absolute;
width: 84%;
top: 19%;
left: 25%;
margin-left: -61.5px;
}
.awordExp-modal input{
    padding-left: 0.3rem;
}
</style>