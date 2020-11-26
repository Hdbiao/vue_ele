<template>
  <div id="app" style="height: 100vh">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  mounted() {
    // this.$store.dispatch("getAddress");
    this.getAddress();
    this.getUserInfo();
  },
  methods: {
    ...mapActions(["getAddress", "getUserInfo"]),
  },
};
</script>


