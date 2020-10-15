<template>
  <div class="address">
    <NavBar />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { provide, reactive, toRefs } from "vue";
import { Toast } from "vant";
import request from "./../utils/axios";
import router from "@/router/index.js";
export default {
  components: {
    NavBar,
  },
  setup(props, context) {
    provide("title", "收货地址");
    let address = reactive({
      chosenAddressId: "1",
      list: [],
      disabledList: [],
    });
    //获取地址列表
    let requestList = () => {
      request({
        type: "get",
        url: "/address",
      }).then((res) => {
        if (res.code == 0) {
          const { disabledList, list } = res;
          address.list = list;
          address.disabledList = disabledList;
        } else {
          Toast(res.message);
        }
      });
    };
    requestList();
    let onAdd = () => {
      router.push({
        name: "AddressEdit",
      });
    };
    let onEdit = (item, index) => {
      router.push({
        name: "AddressEdit",
      });
    };
    return {
      ...toRefs(address),
      onAdd,
      onEdit,
      requestList,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>