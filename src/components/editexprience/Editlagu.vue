<template>
  <yd-layout >
   <yd-navbar  slot="navbar" title="编辑语言技能">       
            <yd-navbar-back-icon @click.native='back' slot="left"></yd-navbar-back-icon>       
    </yd-navbar>
   <div class="information">
        <yd-cell-group>
            <yd-cell-item>
                <yd-icon name="ucenter"  size=".3rem" color='rgb(42, 187, 79)'></yd-icon>
                <span slot="left">语言</span>
                <input slot="right" type="text" name="name" placeholder="" value="" v-model='language'>
            </yd-cell-item>
            <yd-cell-item>
                <yd-icon name="ucenter"  size=".3rem" color='rgb(42, 187, 79)'></yd-icon>
                <span slot="left">水平</span>
                <!-- <input slot="right" type="text" name="mobile" placeholder="" value="" v-model='language_level'> -->
              <select slot="right" v-model="language_level">
                <option value="">请选择</option>
                <option value="1">一般</option>
                <option value="2">熟练</option>
                <option value="3">精通</option>
            </select>
            </yd-cell-item>  
            <yd-cell-item>
                <yd-icon name="ucenter"  size=".3rem" color='rgb(42, 187, 79)'></yd-icon>
                <span slot="left">听说</span>
                <!-- <input slot="right" type="text" name="card_no" placeholder="" value="" v-model='hearspeak'> -->
            <select slot="right" v-model="hearspeak">
                <option value="">请选择</option>
                <option value="1">一般</option>
                <option value="2">熟练</option>
                <option value="3">精通</option>
            </select>
            </yd-cell-item>
            <yd-cell-item>
                <yd-icon name="ucenter"  size=".3rem" color='rgb(42, 187, 79)'></yd-icon>
                <span slot="left">读写</span>
                <!-- <input slot="right" type="text" name="email" placeholder="" value="" v-model='readwrite'> -->
              <select slot="right" v-model="readwrite">
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
        hearspeak:'',
        language:'',
        language_id:'',
        language_level:'',
        readwrite:'',
      
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
      let laguDtat=this.$route.params.laguTable;
      this.hearspeak=laguDtat.hearspeak;
      this.language=laguDtat.language;
      this.language_id=laguDtat.language_id;
      this.language_level=laguDtat.language_level;
      this.readwrite=laguDtat.readwrite;  
    },
    submit:function(){
       var params = new URLSearchParams();
        params.append('hearspeak', this.hearspeak);
        params.append('language', this.language);
        params.append('language_id',this.language_id);
        params.append('language_level', this.language_level);
        params.append('readwrite', this.readwrite);
        this.$http.post(_const.requestUrl+'/v1/user/editLanguage',params).then(function ( res ){
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
