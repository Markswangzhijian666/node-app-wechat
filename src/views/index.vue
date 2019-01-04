<template>
  <div class="index">
    <router-view></router-view>
    <tabBar :data="tabBarData" />
  </div>
</template>


<script>
import tabBar from "../components/tabBar.vue";
export default {
  name: "index",
  components: {
    tabBar
  },
  data() {
    return {
      tabBarData: [
        {
          title: "微信",
          icon: "comment",
          path: "/chats"
        },
        {
          title: "通讯录",
          icon: "address-book",
          path: "/contacts"
        },
        {
          title: "发现",
          icon: "compass",
          path: "/discover"
        },
        {
          title: "我的",
          icon: "user",
          path: "/me"
        }
      ]
    };
  }
};
</script>

<style>
</style>
