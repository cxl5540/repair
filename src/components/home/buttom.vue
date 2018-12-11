<template>
  <div>
    <div style="padding-top: .4rem">
      <div style="float: left; width: 50%"  @click="shcoolIntro">
        <img slot="icon" style="height:1.125rem" src="../../assets/010402.png">
      </div>
      <div style="float: left; width: 50%"  @click="SociologyIntro">
        <img slot="icon" style="height: 1.125rem" src="../../assets/010404.png">
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    created () {},
      mounted () {
  
      },
    methods:{
        

        shcoolIntro () {
            //alert('1')
            this.$router.push("ShcoolList")
        },
        SociologyIntro () {
            this.$router.push("SociologyIntro")
        }
    }
}
</script>

