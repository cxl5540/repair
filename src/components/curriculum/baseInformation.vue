<template>
  <yd-layout >
    <yd-navbar style="background: #ebebeb" slot="navbar" title="创建简历">
        <router-link to="/" slot="left">
            <yd-navbar-back-icon></yd-navbar-back-icon>
        </router-link>
    </yd-navbar>
   <div class="information">
        <yd-cell-group>
            <yd-cell-item>
                <yd-icon name="ucenter"  size=".3rem" color='rgb(42, 187, 79)'></yd-icon>
                <span slot="left">姓名</span>
                <yd-input slot="right" required v-model="uname" max="20" placeholder="请输入姓名"></yd-input>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">手机号</span>
                <yd-input slot="right" v-model="mobile" required regex="mobile" placeholder="请输入手机号"></yd-input>
            </yd-cell-item>  
            <yd-cell-item>
                <yd-icon name="ucenter"  size=".3rem" color='rgb(42, 187, 79)'></yd-icon>
                <span slot="left">身份证</span>
                <yd-input slot="right"  placeholder="请输入身份证" regex="^[1-9]\d{5}(18|19|2([0-9]))\d{2}(0[0-9]|10|11|12)([0-2][1-9]|30|31)\d{3}[0-9Xx]$"  v-model='card_no'></yd-input>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">邮箱</span>
                <yd-input slot="right" type="text" placeholder="请输入邮箱" regex="email"  v-model='email'></yd-input>
            </yd-cell-item>
              </yd-cell-group>
            <yd-button style="width: 94%; margin: 15px auto" size="large" type="primary" @click.native="submit()">保存</yd-button>
      
    </div>
    </yd-layout> 
</template>

<script>

export default {
  name: 'baseInformation',
  data () {
    return{
      uname:'',
      mobile:'',
      card_no:'',
      email:''
    }
         
        },
  beforeCreate () {
  },
  created () {
    
  },
  mounted () {

  },
   methods:{
     submit () { 
          var params = new URLSearchParams();

          params.append('user_id', '13');
          params.append('name', this.uname);
          params.append('mobile', this.mobile);
          params.append('card_no', this.card_no);
          params.append('email', this.email);
            let _this = this
            this.$http.post(_const.requestUrl+'v1/user/addResume',params).then(function ( res ) {
              var base_id = res.data.data.base_id;
           setTimeout(function(){
           _this.$router.push({path:'Curriculum/edit',
            query:{
                    base_id:base_id,
                    name:_this.uname,
                    mobile:_this.mobile,
                    card_no:_this.card_no,
                    email:_this.email            
                  }
                });
           },1000)
        });
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
.yd-scrollview:after{
  display: none !important;
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
    margin: 1rem 0;
}
</style>
