<template>
  <div class="home">
    <nav-bar></nav-bar>
    <div>
      <van-search
        v-model="value"
        shape="round"
        background="#fff"
        placeholder="请输入搜索关键词"
      />
    </div>
    <div class="swiper" v-if="images">
      <van-swipe class="my-swipe" :autoplay="3000" @change="swiperChange" indicator-color="black">
        <van-swipe-item v-for="item in images" :key="item.id">
          <img :src="item.url" style="width: 100%; height: 100%" />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/4</div>
        </template>
      </van-swipe>
    </div>
    <div class="grid">
      <van-grid :column-num="4" :border="borderBool">
        <van-grid-item
          v-for="item in grid"
          :key="item.id"
          :icon="item.url"
          :text="item.title"
        />
      </van-grid>
    </div>
    <List class="list"/>
   
  </div>
   <Tabbar class="tabbar"/>
</template>

<script>
import { onMounted, provide, reactive, ref, toRefs } from "vue";
import NavBar from "@components/NavBar.vue";
import request from "./../utils/axios";
import List from '@components/List.vue';
import Tabbar from '@components/Tabbar.vue'
export default {
  name: "Home",
  components: {
    NavBar,
    List,
    Tabbar
  },
  setup() {
    provide("title", "首页");
    const borderBool = ref(false);
    //轮播
    let swiper = reactive({
      current:0,
      images: [
        {
          id: 1,
          url: "",
        },
        {
          id: 2,
          url: "",
        },
        {
          id: 3,
          url: "",
        },
        {
          id: 4,
          url: "",
        },
      ],
    });
    let getSwiper = () => {
      request({
        url: "/home/swiper",
      }).then((res) => {
        if (res.code == 0) {
          const { images } = res;
          swiper.images = images;
        }
      });
    };
    getSwiper();
    let swiperChange = index =>{
      swiper.current = index;
    }
    //轮播结束
    //单元格
    let gridArray = reactive({
      grid: [
        {
          id: 1,
          title: "111",
          url: "111",
        },
        {
          id: 2,
          title: "222",
          url: "22",
        },
        {
          id: 3,
          title: "",
          url: "",
        },
        {
          id: 4,
          title: "",
          url: "",
        },
        {
          id: 5,
          title: "",
          url: "",
        },
        {
          id: 6,
          title: "",
          url: "",
        },
        {
          id: 7,
          title: "",
          url: "",
        },
        {
          id: 8,
          title: "",
          url: "",
        },
      ],
    });
    let getGrid = () => {
      request({
        url: "/home/grid",
      }).then((res) => {
        if (res.code == 0) {
          const { grid } = res;
          gridArray.grid = grid;
        }
      });
    };
    getGrid();
    //单元格结束
    return {
      getSwiper,
      swiperChange,
      ...toRefs(swiper),
      borderBool,
      ...toRefs(gridArray),
      getGrid,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  padding-bottom: 81px;
  .swiper {
    box-sizing: border-box;
    width: 100%;
    height: 200px;
    padding: 5px 10px;
    border-radius: 10px;
    overflow: hidden;
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
      color: #706868;
      background: rgba(199, 175, 175, 0.158);
    }
  }
  .grid {
    box-sizing: border-box;
    width: 100%;
    padding: 5px 10px;
    border-radius: 30px;
  }
  .list{
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
  }
}
</style>

