<template>
  <div class="nav-bar d-flex jc-around ai-center">
    <nav-item
      v-for="(item, index) in fieldData"
      :key="index"
      :item="item"
      :index="index"
    >
    </nav-item>
  </div>
</template>

<script>
import NavItem from "./NavItem";
export default {
  name: "NavBar",
  props: {
    fieldData: Array,
  },
  components: {
    NavItem,
  },
};
</script>

<style lang="scss" scoped>
</style>