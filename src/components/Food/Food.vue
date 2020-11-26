<template>
  <div class="food d-flex jc-center ai-center flex-column" v-if="isShow">
    <div class="container">
      <section class="food-dre">
        <img v-lazy="`https://elm.cangdu.org/img/${food.image_path}`" alt="" />
        <p class="fs-md">{{ food.description }}</p>
      </section>
      <section class="px-2 pb-2">
        <h3>{{ food.name }}</h3>
        <p>{{ `月售${food.month_sales}份 好评率${food.satisfy_rate}%` }}</p>
        <footer class="d-flex jc-between">
          <span class="text-orange">{{ `￥${food.specfoods[0].price}` }}</span>
          <car-control :food="food"></car-control>
        </footer>
      </section>
    </div>

    <span class="mt-2" @click="toggleShow">
      <svg
        t="1605519010758"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="5927"
        width="32"
        height="32"
      >
        <path
          d="M512 1024C229.376 1024 0 794.624 0 512S229.376 0 512 0s512 229.376 512 512-229.376 512-512 512z m0-975.36C257.024 48.64 48.64 257.024 48.64 512s207.872 463.36 463.36 463.36 463.36-207.872 463.36-463.36S766.976 48.64 512 48.64z"
          fill="#D5D1CF"
          p-id="5928"
        ></path>
        <path
          d="M548.864 512l195.072-195.072c9.728-9.728 9.728-25.6 0-36.864l-1.536-1.536c-9.728-9.728-25.6-9.728-35.328 0L512 475.136 316.928 280.064c-9.728-9.728-25.6-9.728-35.328 0l-1.536 1.536c-9.728 9.728-9.728 25.6 0 36.864L475.136 512l-195.072 195.072c-9.728 9.728-9.728 25.6 0 36.864l1.536 1.536c9.728 9.728 25.6 9.728 35.328 0l195.072-196.608 195.072 195.072c9.728 9.728 25.6 9.728 35.328 0l1.536-1.536c9.728-9.728 9.728-25.6 0-36.864L548.864 512z"
          fill="#D5D1CF"
          p-id="5929"
        ></path>
      </svg>
    </span>
  </div>
</template>

<script>
import CarControl from "../CarControl/index";
export default {
  name: "Food",
  props: {
    food: Object,
  },
  components: {
    CarControl,
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    toggleShow() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style lang="scss" scoped>
.food {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 200;
  .container {
    background-color: white;
    width: 70%;

    .food-dre {
      position: relative;
      img {
        width: 100%;
      }
      p {
        position: absolute;
        left: 0.133333rem;
        bottom: 0.133333rem;
      }
    }
  }
}
</style>