<!--
 * @Author: zhang_gen_yuan
 * @Date: 2020-10-29 16:42:28
 * @LastEditTime: 2020-10-29 16:45:14
 * @Description: 
-->
<template>
  <div class="navbar">
    <van-nav-bar
      :title="title"
      left-text="返回"
      left-arrow
      fixed
      placeholder
      z-index="999"
      @click-left="onClickLeft"
    >
      <slot name="right"></slot>
    </van-nav-bar>
  </div> 
</template>

<script>
import { inject, ref } from "vue";
import router from '@/router/index'
export default {
  name: "NavBar",
  setup() {
    let title = inject("title");
    let onClickLeft = () =>{
        router.go(-1)
    }
    return {
      title,
      onClickLeft,
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar{
  background-color: rgba(255,255,255,.7);
}
</style>