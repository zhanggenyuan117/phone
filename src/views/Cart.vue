<template>
  <div class="cart">
      <nav-bar></nav-bar>
  </div>
</template>

<script>
import NavBar from '@components/NavBar.vue'
import { provide } from 'vue'
export default {
  name:'Cart',
  components:{
    NavBar
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