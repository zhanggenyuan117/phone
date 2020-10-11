<template>
  <div id="app">
    <router-view/>
    <Tabbar class="tabbar"/>
  </div>
</template>
<script>
import Tabbar from '@components/Tabbar.vue'
export default{
  components:{
    Tabbar
  }
}
</script>
<style lang="scss" scoped>
#app{
  position: relative;
  background-color: #f9f9f9;
  .tabbar{
    width: 100%;
    position: fixed;
    bottom: 0;
  }
}
</style>
