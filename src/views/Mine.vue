<template>
  <div class="mine">
      <nav-bar></nav-bar>
  </div>
  <Tabbar class="tabbar"/>
</template>

<script>
import NavBar from '@components/NavBar.vue'
import Tabbar from '@components/Tabbar.vue'
import { provide } from 'vue'
export default {
  name:'Mine',
  components:{
    NavBar,
    Tabbar,
  },
  setup(){
    provide('title','我的')
    return{

    }
  }
}
</script>

<style>

</style>