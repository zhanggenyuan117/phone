<template>
  <div class="about_box">
    <nav-bar></nav-bar>
    <div class="about">
      <div class="sidebar">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item
            v-for="item in side"
            :key="item.id"
            :title="item.title"
          />
        </van-sidebar>
      </div>
      <div class="main">
        <div v-if="activeKey == 0" class="list_box">
          <div class="list" v-for="item in main.hoots" :key="item.id" @click="jumpDetails(item.id)">
            <img :src="item.url" alt="" mode="widthFixed" />
            <span>{{ item.title }}</span>
          </div>
        </div>
        <div v-if="activeKey == 1">
          手机数码
        </div>
        <div v-if="activeKey == 2">
          电脑办公
        </div>
        <div v-if="activeKey == 3">
          家用电器
        </div>
        <div v-if="activeKey == 4">
          计生情趣
        </div>
      </div>
    </div>
    <Tabbar class="tabbar" />
  </div>
</template>

<script>
import NavBar from "@components/NavBar.vue";
import Tabbar from "@components/Tabbar.vue";
import { provide, reactive, ref, toRefs } from "vue";
import request from "../utils/axios";
import router from '@/router/index.js'
export default {
  name: "About",
  components: {
    NavBar,
    Tabbar,
  },
  setup() {
    provide("title", "分类");
    let activeKey = ref(0);
    let abouts = reactive({
      side: [
        {
          id: 1,
          title: "热门推荐",
        },
        {
          id: 2,
          title: "手机数码",
        },
        {
          id: 3,
          title: "电脑办公",
        },
        {
          id: 4,
          title: "家用电器",
        },
        {
          id: 5,
          title: "计生情趣",
        },
        {
          id: 6,
          title: "美妆护肤",
        },
        {
          id: 7,
          title: "个护清洁",
        },
        {
          id: 8,
          title: "汽车生活",
        },
        {
          id: 9,
          title: "男装",
        },
        {
          id: 10,
          title: "男鞋",
        },
        {
          id: 11,
          title: "女装",
        },
        {
          id: 12,
          title: "女鞋",
        },
      ],
      main: {
        hoots: [
          {
            id:1,
            url:
              "//img10.360buyimg.com/mobilecms/s345x345_jfs/t1/87347/24/11553/87003/5e37c3dfef431eb82/baf5d8551f6b1161.jpg!q70.dpg.webp",
            title: "毛毯",
          },
          {
            id:2,
            url:
              "//img10.360buyimg.com/mobilecms/s345x345_jfs/t1/131530/9/8177/145078/5f467929e4ecb8d63/893f6601d0ee2ba4.jpg!q70.dpg.webp",
            title: "拖鞋",
          },
           {
            id:1,
            url:
              "//img10.360buyimg.com/mobilecms/s345x345_jfs/t1/87347/24/11553/87003/5e37c3dfef431eb82/baf5d8551f6b1161.jpg!q70.dpg.webp",
            title: "毛毯",
          },
          {
            id:2,
            url:
              "//img10.360buyimg.com/mobilecms/s345x345_jfs/t1/131530/9/8177/145078/5f467929e4ecb8d63/893f6601d0ee2ba4.jpg!q70.dpg.webp",
            title: "拖鞋",
          },
           {
            id:1,
            url:
              "//img10.360buyimg.com/mobilecms/s345x345_jfs/t1/87347/24/11553/87003/5e37c3dfef431eb82/baf5d8551f6b1161.jpg!q70.dpg.webp",
            title: "毛毯",
          },
          {
            id:2,
            url:
              "//img10.360buyimg.com/mobilecms/s345x345_jfs/t1/131530/9/8177/145078/5f467929e4ecb8d63/893f6601d0ee2ba4.jpg!q70.dpg.webp",
            title: "拖鞋",
          },
           {
            id:1,
            url:
              "//img10.360buyimg.com/mobilecms/s345x345_jfs/t1/87347/24/11553/87003/5e37c3dfef431eb82/baf5d8551f6b1161.jpg!q70.dpg.webp",
            title: "毛毯",
          },
          {
            id:2,
            url:
              "//img10.360buyimg.com/mobilecms/s345x345_jfs/t1/131530/9/8177/145078/5f467929e4ecb8d63/893f6601d0ee2ba4.jpg!q70.dpg.webp",
            title: "拖鞋",
          },
           {
            id:1,
            url:
              "//img10.360buyimg.com/mobilecms/s345x345_jfs/t1/87347/24/11553/87003/5e37c3dfef431eb82/baf5d8551f6b1161.jpg!q70.dpg.webp",
            title: "毛毯",
          },
          {
            id:2,
            url:
              "//img10.360buyimg.com/mobilecms/s345x345_jfs/t1/131530/9/8177/145078/5f467929e4ecb8d63/893f6601d0ee2ba4.jpg!q70.dpg.webp",
            title: "拖鞋",
          },
           {
            id:1,
            url:
              "//img10.360buyimg.com/mobilecms/s345x345_jfs/t1/87347/24/11553/87003/5e37c3dfef431eb82/baf5d8551f6b1161.jpg!q70.dpg.webp",
            title: "毛毯",
          },
          {
            id:2,
            url:
              "//img10.360buyimg.com/mobilecms/s345x345_jfs/t1/131530/9/8177/145078/5f467929e4ecb8d63/893f6601d0ee2ba4.jpg!q70.dpg.webp",
            title: "拖鞋",
          },
           {
            id:1,
            url:
              "//img10.360buyimg.com/mobilecms/s345x345_jfs/t1/87347/24/11553/87003/5e37c3dfef431eb82/baf5d8551f6b1161.jpg!q70.dpg.webp",
            title: "毛毯",
          },
          {
            id:2,
            url:
              "//img10.360buyimg.com/mobilecms/s345x345_jfs/t1/131530/9/8177/145078/5f467929e4ecb8d63/893f6601d0ee2ba4.jpg!q70.dpg.webp",
            title: "拖鞋",
          },
           {
            id:1,
            url:
              "//img10.360buyimg.com/mobilecms/s345x345_jfs/t1/87347/24/11553/87003/5e37c3dfef431eb82/baf5d8551f6b1161.jpg!q70.dpg.webp",
            title: "毛毯",
          },
          {
            id:2,
            url:
              "//img10.360buyimg.com/mobilecms/s345x345_jfs/t1/131530/9/8177/145078/5f467929e4ecb8d63/893f6601d0ee2ba4.jpg!q70.dpg.webp",
            title: "拖鞋",
          },
        ],
      },
    })
    let jumpDetails = (id)=>{
      router.push({
        name:'Details',
        params:{
          id
        }
      })
    }
    return {
      activeKey,
      ...toRefs(abouts),
      jumpDetails
    };
  },
};
</script>

<style lang="scss" scoped>
.about_box {
  .about {
    padding: 10px;
    display: flex;
    padding-bottom: 81px;
    .sidebar {
      flex: 1;
    }
    .main {
      flex: 10;
      .list_box {
        display: flex;
        flex-wrap: wrap;
        font-size: 12px;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 3px;
        .list {
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          padding: 5px;
          width: 30%;
          img {
            width: 100%;
          }
          span{
            padding: 3px 0;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>