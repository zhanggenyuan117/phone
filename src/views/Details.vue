<template>
  <div class="details">
    <NavBar />
    <div class="swiper">
      <van-swipe
        class="my-swipe"
        :autoplay="4000"
        @change="swiperChange"
        indicator-color="black"
      >
        <van-swipe-item v-for="(item, index) in bigImg" :key="index">
          <img :src="item" style="width: 100%; height: 100%" />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">
            {{ current + 1 }}/{{ bigImg.length }}
          </div>
        </template>
      </van-swipe>
    </div>
    <div class="body">
      <div class="price">
        <span class="price_title">
          <span style="font-size: 18px">¥</span>
          {{ price }}</span
        >
        <span @click="collectionHandle" v-if="!collection"
          ><van-icon name="like-o"
        /></span>
        <span @click="collectionHandle" v-else
          ><van-icon name="like-o" color="#f00"
        /></span>
      </div>
      <div class="title">
        {{ title }}
      </div>
    </div>
    <div class="footer">
      <!-- badge="12" -->
      <van-action-bar>
        <van-action-bar-icon icon="chat-o" text="客服" @click="serviceHandle" />
        <van-action-bar-icon
          icon="cart-o"
          text="购物车"
          @click="cartHandle"
          :badge="cart_num"
        />
        <van-action-bar-icon icon="shop-o" text="店铺" @click="storeHandle" />
        <van-action-bar-button type="warning" text="加入购物车" @click="addCartNumHandle"/>
        <van-action-bar-button type="danger" text="立即购买" @click="buyNowHandle"/>
      </van-action-bar>
    </div>
  </div>
</template>

<script>
import {
  computed,
  onMounted,
  provide,
  reactive,
  ref,
  toRef,
  toRefs,
} from "vue";
import NavBar from "@/components/NavBar.vue";
import router from "@/router/index.js";
import request from "./../utils/axios";
import { createApp } from "vue";
import { Toast, ActionBar, ActionBarIcon, ActionBarButton } from "vant";
import { useStore } from "vuex";
// import store from './../store/index'
const app = createApp();
app.use(Toast);
app.use(ActionBar);
app.use(ActionBarIcon);
app.use(ActionBarButton);
export default {
  name: "Details",
  components: {
    NavBar,
  },
  setup() {
    const store = useStore();
    let cart_num = computed(()=> store.state.cart.cart_num)
    provide("title", "商品详情");
    const collection = ref(false);
    let collectionHandle = () => {
      collection.value = !collection.value;
      collection.value ? Toast.success("收藏成功") : Toast.fail("取消收藏");
    };
    const uid = ref(router.currentRoute._value.params.id);
    const info = reactive({
      bigImg: ["", "", "", "", "", "", ""],
      current: 0,
      title: "",
      price: "",
    });
    let getInfo = () => {
      if (uid.value == "1") {
        request({
          type: "get",
          url: "/details/info",
        }).then((res) => {
          console.log(res);
          if (res.code == 0) {
            const { bigImg, title, price } = res;
            info.bigImg = bigImg;
            info.title = title;
            info.price = price;
          }
        });
      } else if (uid.value == "2") {
        request({
          type: "get",
          url: "/details/info2",
        }).then((res) => {
          console.log(res);
          if (res.code == 0) {
            const { bigImg, title, price } = res;
            info.bigImg = bigImg;
            info.title = title;
            info.price = price;
          }
        });
      }
    };
    getInfo();
    let swiperChange = (index) => {
      info.current = index;
    };
    //客服按钮
    let serviceHandle = () => {
      Toast("此功能尚未开发");
    };
    //店铺按钮
    let storeHandle = () => {
      Toast("此功能尚未开发");
    };
    //购物车按钮
    let cartHandle = () => {
      router.push({
        name: "Cart",
      });
    }
    //加入购物车
    let addCartNumHandle = ()=>{
      store.commit('cart/setCartNum',1)
    } 
    //立即购买
    let buyNowHandle = ()=>{
      router.push({
        name:'Address'
      })
    }
    return {
      //购物车
      cart_num,
      uid,
      getInfo,
      ...toRefs(info),
      swiperChange,
      collection,
      collectionHandle,
      serviceHandle,
      storeHandle,
      cartHandle,
      addCartNumHandle,
      buyNowHandle
    };
  },
};
</script>

<style lang="scss" scoped>
.details {
  padding-bottom: 81px;
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
      background: rgba(0, 0, 0, 0.5);
    }
  }
  .body {
    padding: 0 15px;
    .price {
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .price_title {
        font-size: 22px;
        color: #f00;
        font-weight: 600;
      }
    }
    .title {
      font-weight: 600;
      display: flex;
      flex-wrap: wrap;
    }
  }
  .footer {
    width: 100%;
    height: 60px;
  }
}
</style>