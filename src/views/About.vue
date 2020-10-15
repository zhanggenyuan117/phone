<template>
  <div class="about_box">
    <nav-bar></nav-bar>
    <div class="about">
      <div class="sidebar">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item
            v-for="item in abouts"
            :key="item.id"
            :title="item.title"
          />
        </van-sidebar>
      </div>
      <div class="main">
        <div v-if="activeKey == 0">11</div>
        <div v-if="activeKey == 1">22</div>
        <div v-if="activeKey == 2">33</div>
        <div v-if="activeKey == 3">44</div>
        <div v-if="activeKey == 4">55</div>
        <div v-if="activeKey == 5">66</div>
        <div v-if="activeKey == 6">77</div>
        <div v-if="activeKey == 7">88</div>
      </div>
    </div>
    <Tabbar class="tabbar" />
  </div>
</template>

<script>
import NavBar from "@components/NavBar.vue";
import Tabbar from "@components/Tabbar.vue";
import { provide, reactive, ref, toRefs } from "vue";
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
      abouts: [
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
      mian:{
        hoots:[
          {
            url:'',
            title:'毛毯'
          }
        ]
      }
    
    });
    return {
      activeKey,
      ...toRefs(abouts),
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
      padding: 10px;
    }
  }
}
</style>