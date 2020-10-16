<template>
  <div class="cart">
    <nav-bar></nav-bar>
    <div class="radio">
      <van-checkbox-group v-model="result" ref="checkboxGroup">
        <van-checkbox
          v-for="item in cartList"
          :key="item.id"
          :name="item.id"
          @click="clickHandle(item)"
        >
          <van-card num="1" :price="item.price" :thumb="item.url">
            <template #desc>
              <div class="desc">
                {{ item.title }}
              </div>
            </template>
            <template #price>
              <div class="price">¥{{ item.price }}</div>
            </template>
          </van-card>
        </van-checkbox>
      </van-checkbox-group>
    </div>
    <van-submit-bar :price="total" button-text="提交订单" @submit="onSubmit" />
  </div>
  <Tabbar class="tabbar" />
</template>

<script>
import NavBar from "@components/NavBar.vue";
import Tabbar from "@components/Tabbar.vue";
import { computed, provide, reactive, ref, toRefs, onMounted } from "vue";
import { useStore } from "vuex";
import { Toast } from "vant";
export default {
  name: "Cart",
  components: {
    NavBar,
    Tabbar,
  },
  setup(props,context) {
    const store = useStore();
    let result = ref([]);
    provide("title", "购物车");
    let cart = reactive({
      cartList: store.state.cart.cart_list,
    });
    let onSubmit = () => {
      Toast("省点钱吧!大兄弟");
    };
    let getTotalPrice = () => {};
    let total = ref(0);
    onMounted(() => {
      let a = cart.cartList.reduce((value, item) => {
        return value + Number(item.price);
      }, 0);
      total.value = a * 100;
    });
    let clickHandle = (item) => {
      console.log(result);
    };
    let checkAll = () => {
    };
    return {
      ...toRefs(cart),
      result,
      onSubmit,
      getTotalPrice,
      total,
      clickHandle,
      checkAll
    };
  },
};
</script>

<style lang="scss" scoped>
.cart {
  box-sizing: border-box;
  background: #ffffff;
  padding-bottom: 81px;
  .radio {
    padding: 10px;
    .desc {
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      color: #000;
    }
    .price {
      color: #f00;
      font-size: 14px;
      font-weight: 600;
      font-style: oblique;
    }
  }
}
</style>
<style lang="scss">
.cart {
  .van-submit-bar__bar {
    position: fixed;
    bottom: 81px;
    right: 0;
  }
}
</style>