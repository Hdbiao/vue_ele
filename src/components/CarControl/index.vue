<template>
  <div class="car-control d-flex ai-center">
    <transition name="showReduce">
      <span class="" v-if="food.count" @click.stop="updataFoodCount(false)">
        <svg
          t="1605510380784"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4729"
          width="16"
          height="16"
        >
          <path
            d="M512 62.6688C262.9632 62.6688 62.6688 262.9632 62.6688 512c0 249.0368 200.2944 449.3312 449.3312 449.3312 249.0368 0 449.3312-200.2944 449.3312-449.3312 0-249.0368-200.2944-449.3312-449.3312-449.3312z m0 861.184c-226.5088 0-411.8528-185.344-411.8528-411.8528S285.4912 100.1472 512 100.1472 923.8528 285.4912 923.8528 512 738.5088 923.8528 512 923.8528z"
            fill="#1296db"
            p-id="4730"
          ></path>
          <path
            d="M736.6656 493.3632H287.3344c-11.264 0-18.6368 7.5776-18.6368 18.6368 0 11.264 7.5776 18.6368 18.6368 18.6368H736.6656c11.264 0 18.6368-7.5776 18.6368-18.6368 0-11.264-7.3728-18.6368-18.6368-18.6368z"
            fill="#1296db"
            p-id="4731"
          ></path>
        </svg>
      </span>
    </transition>

    <transition name="fade">
      <span class="mx-1" v-if="food.count">{{ food.count }}</span>
    </transition>

    <span @click.stop="updataFoodCount(true)">
      <svg
        t="1605510348479"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3831"
        width="16"
        height="16"
      >
        <path
          d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
          fill="#348BF4"
          p-id="3832"
        ></path>
        <path
          d="M798.117647 557.176471h-572.235294c-24.094118 0-45.176471-21.082353-45.176471-45.176471s21.082353-45.176471 45.176471-45.176471h572.235294c24.094118 0 45.176471 21.082353 45.176471 45.176471s-21.082353 45.176471-45.176471 45.176471z"
          fill="#FFFFFF"
          p-id="3833"
        ></path>
        <path
          d="M557.176471 225.882353v572.235294c0 24.094118-21.082353 45.176471-45.176471 45.176471s-45.176471-21.082353-45.176471-45.176471v-572.235294c0-24.094118 21.082353-45.176471 45.176471-45.176471s45.176471 21.082353 45.176471 45.176471z"
          fill="#FFFFFF"
          p-id="3834"
        ></path>
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  name: "CarControl",
  props: {
    food: Object,
  },
  data() {
    return {};
  },
  methods: {
    updataFoodCount(isAdd) {
      this.$store.dispatch("updataFoodCount", { isAdd, food: this.food });
    },
  },
  watch: {},
  computed: {},
  created() {
    // console.log(this.food);
  },
};
</script>

<style lang="scss" scoped>
.showReduce-enter-active,
.showReduce-leave-active {
  transition: all 0.3s linear;
}
.showReduce-enter,
.showReduce-leave-to {
  opacity: 0;
  transform: translateX(15px) rotate(180deg);
}
.fate-enter-active,
.fate-leave-active {
  transition: all 0.3s;
}
.fate-enter,
.fate-leave-to {
  opacity: 0;
}
</style>