<template>
  <div class="list">
    <div class="box">
      <div v-for="item in list" :key="item.id" class="item" @click="jumpDetails(item.id)">
        <img :src="item.url" />
        <div class="item_title">
          {{ item.title }}
        </div>
        <div class="item_rem">
            <van-icon name="good-job-o" style="margin-right:5px;"/>
            <span>{{ item.rem }}</span>
        </div>
        <div class="item_price">
          <span class="price_style">¥{{ item.price }}</span>
        </div>
        <div class="item_bottom">
            <img :src="item.bottom_url">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import request from "./../utils/axios";
import router from '@/router/index.js';
export default {
  name: "List",
  setup() {
    let shopping = reactive({
      list: [
        {
          id: 1,
          title: "",
          url: "",
          price: "",
        },
      ],
    });
    let getList = () => {
      request({
        url: "/home/list",
      }).then((res) => {
        if (res.code == 0) {
          shopping.list = res.list;
        }
      });
    };
    getList();

    let jumpDetails = id => {
        router.push(`/details/${id}`)
    }
    return {
      getList,
      ...toRefs(shopping),
      jumpDetails,
    };
  },
};
</script>

<style lang="scss" scoped>
.list {
  .box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
      box-sizing: border-box;
      padding: 10px;
      width: 48%;
      background: #ffffff;
      margin-bottom: 10px;
      border-radius: 10px;
      .item_title {
        color: rgba(51, 51, 51, 0.7);
        font-size: 14px;
        text-align: center;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        margin: 5px 0;
      }
      .item_rem{
          font-size: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #ff911b;
          padding: 3px 0;
      }
      .item_price {
        color: #f00;
        padding: 5px;
        .price_style{
            font-style: oblique;
            font-size: 16px;
            font-weight: 500;
        }
      }
      .item_bottom{
          width: 50px;
          height: 20px;
          padding: 3px 0;
      }
      img {
        width: 90%;
        margin-left: 5%;
      }
    }
  }
}
</style>