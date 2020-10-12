<template>
  <div class="mine">
      <nav-bar></nav-bar>
      我的
  </div>
</template>

<script>
import NavBar from '@components/NavBar.vue'
import { provide } from 'vue'
export default {
  name:'Mine',
  components:{
    NavBar
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