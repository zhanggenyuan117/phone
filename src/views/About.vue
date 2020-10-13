<template>
  <div class="about">
      <nav-bar></nav-bar>
  </div>
  <Tabbar class="tabbar"/>
</template>

<script>
import NavBar from '@components/NavBar.vue';
import Tabbar from '@components/Tabbar.vue'
import { provide } from 'vue'
export default {
  name:'About',
  components:{
    NavBar,
    Tabbar
  },
  setup(){
    provide('title','分类')
    return{

    }
  }
}
</script>

<style>

</style>