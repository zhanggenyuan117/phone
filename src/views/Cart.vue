<template>
  <div class="cart">
      <nav-bar></nav-bar>
  </div>
  <Tabbar class="tabbar"/>
</template>

<script>
import NavBar from '@components/NavBar.vue';
import Tabbar from '@components/Tabbar.vue'
import { provide } from 'vue'
export default {
  name:'Cart',
  components:{
    NavBar,
    Tabbar,
  },
  setup(){
    provide('title','购物车')
    return{

    }
  }
}
</script>

<style>

</style>