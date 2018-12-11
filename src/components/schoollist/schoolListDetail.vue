<template>
    <yd-layout>
    <yd-navbar  slot="navbar" title="职位列表">       
            <yd-navbar-back-icon @click.native='back' slot="left"></yd-navbar-back-icon>       
    </yd-navbar>
        <section>
            <div class="jobDetail">
                <div>
                    <p style="font-size: 0.32rem;font-weight: bold;">{{jobDetailList.job_title}}（{{jobDetailList.need_num}}人）</p>
                    <div style="display: flex;justify-content: space-between; padding-top:0.3rem ">
                        <span style="font-size: 0.28rem;color: #777;">招聘单位：重庆医药集团股份有限公司</span>
                        <span style="color: #777">{{jobDetailList.start_time}}发布</span>
                    </div>
                </div>
            </div>
            <div class="jobDetail">
                <div>
                    <div style="display: flex;justify-content: space-between;font-size: 0.32rem;">
                        <span style="font-weight: bold;" >月薪：&nbsp;<span style="color: #ef8f52;font-weight: 100;">{{jobDetailList.job_money}}/面议</span></span>
                        <span ><yd-icon name="location" color="rgb(42, 187, 79)" size=".4rem" ></yd-icon>{{jobDetailList.job_address}}</span>
                    </div>
                    <p style="font-size: 0.28rem;color: #777;padding-top:0.3rem ">到岗时间：{{jobDetailList.expect_time}}</p>
                </div>
            </div>
            <div >
                <div style="background: #fff">
                    <p style="font-weight: bold;font-size: 0.32rem; padding: 0.3rem 5%;border-bottom:1px solid #eee; ">职位描述</p>
                  <ul style="padding:0.1rem 0 0.3rem 5%;">
                       <li>负责公司软件开发；</li>
                       <li>负责公司项目维护；</li>
                       <li>负责公司项目需求整理；</li>
                   </ul> 
                </div>
            </div>
            <div >
                <div style="background: #fff">
                    <p style="font-weight: bold;font-size: 0.32rem; padding: 0.3rem 5%;border-bottom:1px solid #eee; ">任职要求</p>
                  <ul style="padding:0.1rem 0 0.3rem 5%;">
                       <li>大学本科；</li>
                       <li>软件工程专业；</li>
                       <li>三年以上工作经验；</li>
                       <li>工程师职称；</li>
                   </ul> 
                </div>
            </div>
        </section>
        <schoolDetailFooter></schoolDetailFooter>
    </yd-layout>
</template>
<script>
    import schoolDetailFooter from "./schoolDetailFooter"
    export default {
        components:{    
            schoolDetailFooter 
           },
        data () {
            return {
               jobDetailList: []
            }
        },
        beforeCreate () {
            //this.$dialog.toast({mes: `1`});
        },
        created () {
            //this.$dialog.toast({mes: `1`});
        },
        mounted () {
             /*var reg=/\/shcoolListDetail\/(\d+)/;
             var id=this.$route.path.match(reg)[1];*/
           //var id= this.$route.query.id;
           this.getjobDetailList();

        },
        methods:{

            back:function(){
                 this.$router.go(-1);
            },
            getjobDetailList () {
                var id= this.$route.query.id;
                var params = new URLSearchParams();
                params.append('job_id', id);
                  let _this = this
                  this.$http.post("http://192.168.197.58:80/v1/jobs/jobdeatil",params).then(function ( res ) {
                 _this.jobDetailList = res.data.data.list
              });
            }

        }
    }
</script>
<style>
    .yd-navbar-center-title{
        font-size: 0.35rem !important;
        font-weight: bold;
        color: #000 !important;
    }
    section{
        background: #ebebeb;
    }
    .jobDetail{
        width:100%;
        background: #fff;
        margin: 0.3rem 0;
        padding: 0.3rem 0;

    }
    .jobDetail>div{
        width: 90%;
        margin: 0 auto;
    }
    li{
        list-style: decimal;
        list-style-position:inside;
        font-size: 0.28rem;
        color: #777;
        margin: 0.2rem 0;
    }
</style>