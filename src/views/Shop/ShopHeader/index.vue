<template>
  <div
    class="shop-header d-flex p-1 jc-between ai-center"
    @click="$router.replace('/')"
  >
    <img :src="imagePath" alt="" class="header-left" />
    <div class="flex-1 text-white ml-1 pt-1">
      <strong class="fs-xxl">{{ shopName }}</strong>
      <p>
        {{ `商家配色 / ${time || "50分钟"}送达 / 配送费￥${floatDeliveryFee}` }}
      </p>
      <p class="ellipsis">公告：{{ notice }}</p>
    </div>
    <span>
      <svg
        t="1605423876799"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2876"
        width="16"
        height="16"
      >
        <path
          d="M760.49066666 562.176c-12.8 0-25.6-5.12-35.84000001-14.848l-415.74399999-411.648c-19.968-19.968-19.968-51.712-0.512-71.68s51.712-19.968 71.68-0.51199999l415.744 411.64799999a50.8416 50.8416 0 0 1 0.51199999 71.68c-9.216 10.75200001-22.528 15.36-35.83999999 15.36z"
          fill="#ffffff"
          p-id="2877"
        ></path>
        <path
          d="M349.35466666 977.92c-12.8 0-25.6-5.12-35.84-14.848-19.968-19.968-19.968-51.712-0.512-71.68l411.648-415.744a50.8416 50.8416 0 0 1 71.68-0.512 50.8416 50.8416 0 0 1 0.512 71.67999999L385.19466666 962.56000001c-9.728 10.24-23.04 15.36-35.84 15.35999999z"
          fill="#ffffff"
          p-id="2878"
        ></path>
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  name: "ShopHeader",
  props: {
    imagePath: String,
    shopName: String,
    time: String,
    notice: String,
    floatDeliveryFee: Number,
  },
};
</script>

<style lang="scss" scoped>
.shop-header {
  background-color: #999 !important;
  .header-left {
    width: 1.786667rem;
    // background: url() no-repeat 100%;
  }
}
</style>