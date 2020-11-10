<template>
  <div class="shop-list">
    <header class="shop-header text-grey">
      <span class="iconfont icon-dian mx-1"></span>
      <span>附近商家</span>
    </header>

    <shop-item
      v-for="(item, index) in shopData"
      :key="index"
      :shopItem="item"
    ></shop-item>
  </div>
</template>

<script>
import ShopItem from "../ShopList/ShopItem";
export default {
  name: "ShopList",
  props: {
    shopData: Array,
  },
  components: {
    ShopItem,
  },
  created() {
    console.log(this.shopData);
  },
};
</script>

<style lang="scss" scoped>
.shop-list {
  border-top: 0.026667rem solid #e4e4e4;
  .shop-header {
    height: 1.013333rem;
    line-height: 1.013333rem;
  }
}
</style>