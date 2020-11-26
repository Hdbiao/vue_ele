<template>
  <div class="shop">
    <shop-header
      :imagePath="`https://elm.cangdu.org/img/${shopInfo.image_path}`"
      :shopName="shopInfo.name"
      :time="shopInfo.order_lead_time"
      :notice="shopInfo.promotion_info"
      :floatDeliveryFee="shopInfo.float_delivery_fee"
      class="shop-header"
    ></shop-header>
    <div class="tab d-flex jc-around ai-center fs-xxl bg-white border-b">
      <div class="tab-item">
        <router-link
          :to="{ path: '/shop/goods', query: { id: $route.query.id } }"
          class="p-1"
          :class="$route.path === '/shop/goods' ? 'on' : 'off'"
          replace
          >商品</router-link
        >
      </div>
      <div class="tab-item">
        <router-link
          :to="{ path: '/shop/ratings', query: { id: $route.query.id } }"
          class="p-1"
          :class="$route.path === '/shop/ratings' ? 'on' : 'off'"
          replace
          >评价</router-link
        >
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import ShopHeader from "./ShopHeader/index";
import { mapState } from "vuex";
export default {
  name: "ShopGoods",
  components: {
    ShopHeader,
  },
  created() {
    this.shopId = this.$route.query.id;
  },
  mounted() {
    this.$store.dispatch("getShopInfo", this.shopId);
    this.$store.dispatch("getShopScores", this.shopId);
    this.$store.dispatch("getShopRateTags", this.shopId);
    this.$store.dispatch("getRatingList", { shopId: this.shopId, offset: 10 });
  },
  data() {
    return {
      shopId: "",
    };
  },
  computed: {
    ...mapState(["shopInfo"]),
  },
};
</script>

<style lang="scss" scoped>
.shop {
  height: 100vh;
  overflow: hidden;
}
.tab {
  height: 1.413333rem;
}
.on {
  color: #3190e8;
  border-bottom: 0.026667rem solid #3190e8;
}
.off {
  color: #666;
  border-bottom: 0.026667rem solid transparent;
}
</style>