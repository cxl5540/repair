<template>
    <div class="schooldetailfooter">
       
            <div style="background:#5cb85c">
                <router-link :to="{name:'Resume',params:{type:'apply'}}" slot="left">
                    <yd-icon name="download" color="#fff" size=".35rem"></yd-icon>
                    <span style="color:#fff">立即申请</span>
                </router-link >
            </div>
        
        <div style="border:1px solid rgb(42, 187, 79)">
           <yd-icon name="download" color='#2abb4f' size=".35rem"  ></yd-icon>
            <span style='color: rgb(42, 187, 79) '>我要咨询</span> 
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
               
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


        }
    }
</script>
<style>
.schooldetailfooter{
    width: 100%;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;

}
.schooldetailfooter>div{
    width: 50%;
    text-align: center;
    padding: 0.26rem 0;
}
.schooldetailfooter span {
    font-size: 0.35rem;
}
</style>