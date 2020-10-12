<template>
  <div class="details">
    <div class="swiper">
      <van-swipe
        class="my-swipe"
        :autoplay="5000"
        @change="swiperChange"
        indicator-color="black"
      >
        <van-swipe-item v-for="(item,index) in bigImg" :key="index">
          <img :src="item" style="width: 100%; height: 100%" />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/{{ bigImg.length }}</div>
        </template>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRef, toRefs } from "vue";
import router from "@/router/index.js";
import request from "./../utils/axios";
export default {
  setup() {
    const uid = ref(router.currentRoute._value.params.id);
    const info = reactive({
      bigImg: ['','','','','','','','',''],
      current: 0,
    });
    let getInfo = () => {
      if (uid.value == "1") {
        request({
          type: "get",
          url: "/details/info",
        }).then((res) => {
          console.log(res);
          if (res.code == 0) {
            const { bigImg } = res;
            info.bigImg = bigImg;
          }
        });
      } else if (uid.value == "2") {
        request({
          type: "get",
          url: "/details/info",
        }).then((res) => {
          console.log(res);
        });
      }
    };
    getInfo();
    let swiperChange = (index) => {
      info.current = index;
    };
    return {
      uid,
      getInfo,
      ...toRefs(info),
      swiperChange,
    };
  },
};
</script>

<style lang="scss" scoped>
.details {
  .swiper {
    box-sizing: border-box;
    width: 100%;
    height: 300px;
    .my-swipe {
      width: 100%;
      height: 100%;
    }
    .custom-indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      color: #cccccc;
      background: rgba(0,0,0,0.5);
    }
  }
}
</style>
