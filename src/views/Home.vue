<template>
  <div id="home">
  <yd-flexbox direction="vertical">
    <hometop></hometop>
    <homemiddle></homemiddle>
    <buttom></buttom>
  </yd-flexbox>
  </div>
</template>

<script>
import hometop from '../components/home/top.vue'
import homemiddle from '../components/home/homemiddle.vue'
import buttom from '../components/home/buttom.vue'
export default {
  name: 'home',
  data () {
          return {
            userId:'',
          }
        },
  beforeCreate () {
  },
  created () {
    
  },
  mounted () {

  },
   methods:{

    },
  components: {
    hometop,
    homemiddle,
    buttom
  }
}
</script>
