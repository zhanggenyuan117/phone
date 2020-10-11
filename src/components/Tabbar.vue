<template>
  <div class="tab">
    <ul v-for="item in tabData" :key="item.name" class="tabItem">
      <li class="tabTo" @click="tabClick(item.path)">
        <img
          class="tabImg"
          :src="item.path == $route.path ? item.activeImg : item.img"
        />
        <div :class="{ active: item.path == $route.path }" class="tabText">
          {{ item.name }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import router from "@/router/index";
export default {
  name: "Tabbar",
  setup() {
    const tabbar = reactive({
      tabData: [
        {
          path: "/",
          img: require("./../assets/tabbar/home.png"),
          activeImg: require("./../assets/tabbar/home2.png"),
          name: "首页",
        },
        {
          path: "/about",
          img: require("./../assets/tabbar/class.png"),
          activeImg: require("./../assets/tabbar/class2.png"),
          name: "分类",
        },
        {
          path: "/cart",
          img: require("./../assets/tabbar/cart.png"),
          activeImg: require("./../assets/tabbar/cart2.png"),
          name: "购物车",
        },
        {
          path: "/mine",
          img: require("./../assets/tabbar/mine.png"),
          activeImg: require("./../assets/tabbar/mine2.png"),
          name: "我的",
        },
      ],
    });
    let tabClick = (path) => {
      router.push(path);
    };
    return {
      ...toRefs(tabbar),
      tabClick,
    };
  },
};
</script>

<style lang="scss" scoped>
.tab {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #e5e5e5;
  padding: 10px 0;
  background: #fff;
  .tabItem {
    .tabTo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      .tabImg {
        width: 32px;
      }
      .tabText {
        font-size: 14px;
        color: #707070;
      }
      .active {
        color: crimson;
      }
    }
  }
}
</style>