<template>
  <div
    class="shop-item px-1 py-2 d-flex"
    @click="
      $router.push({
        path: '/shop',
        query: {
          id: shopItem.id,
        },
      })
    "
  >
    <img
      :src="`https://elm.cangdu.org/img/${shopItem.image_path}`"
      alt=""
      class="mr-1"
    />
    <div class="flex-1">
      <header class="d-flex jc-between">
        <span>
          <span class="bg-yellow mr-1">品牌</span>
          <span class="fs-xl text-grey-2 fw-700">{{ shopItem.name }}</span>
        </span>
        <ul class="d-flex p-0 m-0">
          <li
            v-for="(item, index) in shopItem.supports"
            :key="index"
            class="text-grey supports fs-sm"
          >
            {{ item.icon_name }}
          </li>
        </ul>
      </header>
      <div class="mt-1 d-flex jc-between">
        <section class="d-flex">
          <rate :score="shopItem.rating" :size="1"></rate>
          <span class="ml-1 fs-sm text-grey-1">{{
            "月售" + shopItem.recent_order_num
          }}</span>
        </section>
        <section class="d-flex">
          <span
            :style="{ background: `#${shopItem.delivery_mode.color}` }"
            class="text-white fs-sm fengniao"
            >{{ shopItem.delivery_mode.text }}</span
          >
          <span class="text-primary zhunshida fs-sm">准时达</span>
        </section>
      </div>
      <div class="d-flex jc-between">
        <section>
          <p class="text-grey-1">
            {{
              `￥${shopItem.float_minimum_order_amount}起送/配送费约${shopItem.float_delivery_fee}元`
            }}
          </p>
        </section>
        <section>
          <p>
            <span>{{ shopItem.distance }}</span>
            <span style="margin: 0 3px">/</span>
            <span class="text-primary">{{ shopItem.order_lead_time }}</span>
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Rate from "../../components/Rate/index";
export default {
  name: "ShopItem",
  props: {
    shopItem: Object,
  },
  components: {
    Rate,
  },
};
</script>

<style lang="scss" scoped>
.shop-item {
  border-bottom: 0.026667rem solid #f1f1f1;
  img {
    width: 1.68rem;
    height: 1.68rem;
  }
  .supports {
    border: 0.026667rem solid #f1f1f1;
    margin-left: 0.026667rem;
  }
  .fengniao {
    padding: 0.053333rem 0.053333rem 0;
  }
  .zhunshida {
    border: 0.026667rem solid #3190e8;
    margin-left: 0.026667rem;
    padding: 0 0.053333rem;
  }
}
</style>