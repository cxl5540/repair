<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="社会招聘列表">
      <router-link to="/" slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div>
     <img src="../assets/0402.png" width="100%">
    </div>
    <div style="margin-top: -0.1rem">
      <yd-search v-model="searchValue" :on-submit="searchHandler"></yd-search>
    </div>
    <div>
      <yd-grids-group :rows="3">
        <yd-grids-item>
          <span slot="text">公司</span>
        </yd-grids-item>
        <yd-grids-item>
          <span slot="text">类型</span>
        </yd-grids-item>
        <yd-grids-item>
          <span slot="text">地点</span>
        </yd-grids-item>
      </yd-grids-group>
    </div>
    
    <div class="SociolyList" v-for="item, key in SociolyList" :key="key">
      <!-- <router-link :to="'/shcoolListDetail/'+item.id"> -->
        <router-link :to="{path:'shcoolListDetail/', query:{id:item.id,class:'socioly'}}">
             <div>
               <span style="font-weight: bold;">{{item.need_comany}}</span>
               <span style="padding-top: 0.15rem"><yd-icon name="location" color="rgb(42, 187, 79)" size=".4rem" ></yd-icon>{{item.job_address}}</span>
             </div>
             <div>
               <span style='color: rgb(42, 187, 79)'>{{item.job_type}}</span>
               <span style="padding-top: 0.15rem">{{item.expect_time}}</span>
             </div>
      </router-link>   
    </div>
  </yd-layout>
</template>
<script>
    export default {
        data () {
            return {
                searchValue:"",
                SociolyList: []
            }
        },
        beforeCreate () {
            //this.$dialog.toast({mes: `1`});
        },
        created () {
            //this.$dialog.toast({mes: `1`});
        },
        mounted () {
            this.getSchoolList()
        },
        methods:{

            searchHandler (value) {
                this.$dialog.toast({mes: `搜索：${value}`});
            },
            getSchoolList () {
              var params = new URLSearchParams();
              params.append('type', '2');
              let _this = this
              this.$http.post(_const.requestUrl+'/v1/jobs/jobslist',params).then(function ( res ) {
              _this.SociolyList = res.data.data.list.data;
              console.log(res.data.data.list.data);
              });
            }

        }
    }
</script>
<style>
  .SociolyList>a{
    display: inline-block;
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing:border-box;
    -moz-box-sizing:border-box; 
    -webkit-box-sizing:border-box;
    padding: 0.3rem 0.22rem;
    border-bottom: 1px solid #eee;  
  }
  .SociolyList div{
    display: flex;
    flex-direction:column;
    align-items:center;
  }
  .SociolyList span{
    font-size: 0.3rem
  }
  section{
    background: #fff;
  }
</style>