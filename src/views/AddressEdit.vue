<template>
  <div class="addressEdit">
      <NavBar />
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import areaList from "./../utils/area.js";
import { Toast } from "vant";
import NavBar from "@components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  setup(props, context) {
    const result = reactive({
      searchResult: [],
      areaList,
    });
    let onSave = () => {
      Toast("点击了保存,但是没用,我还没开发呢");
    };
    let onDelete = () => {
      Toast("点击了删除,但是没用,我还没开发呢");
    };
    let onChangeDetail = (val) => {
      if (val) {
        result.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        result.searchResult = [];
      }
    };
    return {
      ...toRefs(result),
      onSave,
      onDelete,
    };
  },
};
</script>

<style lang="scss" scoped>
.addressEdit {
  
}
</style>