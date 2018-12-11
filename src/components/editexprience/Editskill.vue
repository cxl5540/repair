<template>
  <yd-layout >
    <yd-navbar  slot="navbar" title="编辑语言技能">       
            <yd-navbar-back-icon @click.native='back' slot="left"></yd-navbar-back-icon>       
    </yd-navbar>
   <div class="information">
        <yd-cell-group>
          <yd-cell-item>
                <yd-icon name="ucenter"  size=".3rem" color='rgb(42, 187, 79)'></yd-icon>
                <span slot="left">技能</span>
                <input slot="right" type="text" name="name" placeholder="" value="" v-model='professions_title'>
            </yd-cell-item>
            <yd-cell-item>
                <yd-icon name="ucenter"  size=".3rem" color='rgb(42, 187, 79)'></yd-icon>
                <span slot="left">熟练程度</span>
                <!-- <input slot="right" type="text" name="name" placeholder="" value="" v-model='proficiency'> -->
            <select slot="right" v-model="proficiency">
                <option value="">请选择</option>
                <option value="1">一般</option>
                <option value="2">熟练</option>
                <option value="3">精通</option>
            </select>
            </yd-cell-item> 
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
        proficiency:'',
        professions_title:'',
        professions_id:'',
     
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
      let skillDtat=this.$route.params.skillTable;
      this.professions_title=skillDtat.professions_title;
      this.proficiency=skillDtat.proficiency;
      this.professions_id=skillDtat.professions_id;
    },
    submit:function(){
       var params = new URLSearchParams();
        params.append('professions_id', this.professions_id);
        params.append('proficiency', this.proficiency);
        params.append('professions_title',this.professions_title);
  
        this.$http.post(_const.requestUrl+'/v1/user/editProfessions',params).then(function ( res ){
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
</style>
