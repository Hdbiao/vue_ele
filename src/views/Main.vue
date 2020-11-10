<template>
  <div class="main">
    <router-view></router-view>
    <nav-bar :fieldData="fieldData" class="nav-bar"></nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar/index";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      fieldData: [
        {
          field: "0",
          field_name: "外卖",
          icon: "icon-SSS",
          url: "/home",
        },
        {
          field: "1",
          field_name: "搜索",
          icon: "icon-zhinanzhen",
          url: "/search",
        },
        {
          field: "2",
          field_name: "订单",
          icon: "icon-wenzhang",
          url: "/order",
        },
        {
          field: "3",
          field_name: "我的",
          icon: "icon-wode",
          url: "/profile",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scope>
.nav-bar {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 44px;
  background-color: #efefef;
}
</style>