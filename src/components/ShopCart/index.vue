<template>
  <div class="shop-cart">
    <div class="container d-flex">
      <div class="container-left flex-1" @click="toggleShow">
        <section class="cart-icon d-flex jc-center ai-center">
          <svg
            v-show="!totalCount"
            t="1605625907313"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="6357"
            width="32"
            height="32"
          >
            <path
              d="M347.136 783.36q19.456 0 36.864 7.168t30.72 19.968 20.48 30.208 7.168 36.864-7.168 36.864-20.48 30.208-30.72 20.48-36.864 7.68q-20.48 0-37.376-7.68t-30.208-20.48-20.48-30.208-7.168-36.864 7.168-36.864 20.48-30.208 30.208-19.968 37.376-7.168zM773.12 785.408q19.456 0 37.376 7.168t30.72 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.72 20.48-37.376 7.68-36.864-7.68-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 36.864-7.168zM945.152 203.776q28.672 0 44.544 7.68t22.528 18.944 6.144 24.064-3.584 22.016-12.8 37.888-22.016 62.976-24.064 68.096-17.92 53.248q-13.312 40.96-33.792 56.832t-50.176 15.872l-34.816 0-66.56 0-87.04 0-95.232 0-253.952 0 15.36 92.16 516.096 0q49.152 0 49.152 41.984 0 20.48-9.728 35.328t-38.4 14.848l-49.152 0-95.232 0-117.76 0-119.808 0-98.304 0-56.32 0q-20.48 0-34.304-9.216t-23.04-24.064-14.848-32.256-8.704-32.768q-1.024-6.144-5.632-29.696t-11.264-58.88-14.848-78.848-16.384-87.552q-19.456-103.424-44.032-230.4l-76.8 0q-15.36 0-25.6-7.68t-16.896-18.432-9.216-23.04-2.56-22.528q0-20.48 13.824-33.792t37.376-13.312l22.528 0 20.48 0 25.6 0 34.816 0q20.48 0 32.768 6.144t19.456 15.36 10.24 19.456 5.12 17.408q2.048 8.192 4.096 23.04t4.096 30.208q3.072 18.432 6.144 38.912l700.416 0z"
              fill="#ffffff"
              p-id="6358"
            ></path>
          </svg>
          <svg
            v-show="totalCount"
            t="1605625907313"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="6357"
            width="32"
            height="32"
          >
            <path
              d="M347.136 783.36q19.456 0 36.864 7.168t30.72 19.968 20.48 30.208 7.168 36.864-7.168 36.864-20.48 30.208-30.72 20.48-36.864 7.68q-20.48 0-37.376-7.68t-30.208-20.48-20.48-30.208-7.168-36.864 7.168-36.864 20.48-30.208 30.208-19.968 37.376-7.168zM773.12 785.408q19.456 0 37.376 7.168t30.72 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.72 20.48-37.376 7.68-36.864-7.68-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 36.864-7.168zM945.152 203.776q28.672 0 44.544 7.68t22.528 18.944 6.144 24.064-3.584 22.016-12.8 37.888-22.016 62.976-24.064 68.096-17.92 53.248q-13.312 40.96-33.792 56.832t-50.176 15.872l-34.816 0-66.56 0-87.04 0-95.232 0-253.952 0 15.36 92.16 516.096 0q49.152 0 49.152 41.984 0 20.48-9.728 35.328t-38.4 14.848l-49.152 0-95.232 0-117.76 0-119.808 0-98.304 0-56.32 0q-20.48 0-34.304-9.216t-23.04-24.064-14.848-32.256-8.704-32.768q-1.024-6.144-5.632-29.696t-11.264-58.88-14.848-78.848-16.384-87.552q-19.456-103.424-44.032-230.4l-76.8 0q-15.36 0-25.6-7.68t-16.896-18.432-9.216-23.04-2.56-22.528q0-20.48 13.824-33.792t37.376-13.312l22.528 0 20.48 0 25.6 0 34.816 0q20.48 0 32.768 6.144t19.456 15.36 10.24 19.456 5.12 17.408q2.048 8.192 4.096 23.04t4.096 30.208q3.072 18.432 6.144 38.912l700.416 0z"
              fill="#1296db"
              p-id="6358"
            ></path>
          </svg>
          <span class="cart-num" v-show="totalCount">{{ totalCount }}</span>
          <span class="cart-num" v-show="totalCount > 99">99+</span>
        </section>
        <section
          class="cart-price d-flex flex-column jc-between text-white fw-700"
        >
          <span class="fs-xxl">￥{{ totalPrice }}</span>
          <span>配送费￥{{ shopInfo.float_delivery_fee }}元</span>
        </section>
      </div>
      <section
        class="gotopay d-flex jc-center ai-center text-white fs-xxl fw-700"
        :class="payClass"
      >
        {{ payText }}
      </section>
    </div>

    <transition name="move">
      <div class="shop-list" v-show="listShow">
        <header class="shop-list-header">
          <span>购物车</span>
          <span @click="clear">
            <svg
              t="1605628649676"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="7360"
              width="16"
              height="16"
            >
              <path
                d="M852.072759 190.892294H660.390255l-0.112888-63.216845c0-35.220814-27.996031-63.329732-63.103957-63.329732H406.168228c-35.220814 0-62.99107 27.996031-62.99107 63.103958v63.216845H151.607541c-35.220814 0-63.668394-1.919083-63.668394 33.188843s28.560467 30.931099 63.668394 30.931099v572.902657c0 70.32874 58.024033 124.175945 128.352772 124.175945h448.049388c70.32874 0 123.837284-53.847205 123.837284-124.175945V255.012237c35.107926 0 68.183883 4.176827 68.29677-30.931099 0-35.220814-33.075956-33.188844-68.070996-33.188844z m-445.791643-31.382648c0-17.610407 14.22379-31.834197 31.834197-31.834197h127.336787c17.610407 0 31.834197 14.22379 31.834197 31.834197v31.382648H406.394003l-0.112887-31.382648zM789.081689 828.592217c0 35.107926-29.463565 62.99107-64.571492 62.99107H278.944328c-35.220814 0-63.442619-28.334693-63.442619-63.442619V256.366883c43.800243 0 537.79473-0.112887 573.57998-0.112887v572.338221z"
                p-id="7361"
                fill="#bfbfbf"
              ></path>
              <path
                d="M374.446919 350.40194c17.610407 0 31.834197 14.22379 31.834197 31.834197v413.731673c0 17.610407-14.22379 31.834197-31.834197 31.834196s-31.834197-14.22379-31.834197-31.834196V382.236137c0-17.49752 14.22379-31.834197 31.834197-31.834197zM629.007607 350.40194c17.610407 0 31.834197 14.22379 31.834197 31.834197v413.731673c0 17.610407-14.22379 31.834197-31.834197 31.834196S597.17341 813.578216 597.17341 795.96781V382.236137c0.112887-17.49752 14.336677-31.834197 31.834197-31.834197z"
                p-id="7362"
                fill="#bfbfbf"
              ></path>
            </svg>
            清空
          </span>
        </header>
        <section class="shop-list-container">
          <ul>
            <li
              v-for="(food, index) in cartList"
              :key="index"
              class="d-flex jc-between p-1"
            >
              <span class="food-name ellipsis fs-xxl fw-700 text-grey-1">{{
                food.name
              }}</span>
              <span class="text-orange fs-xl fw-700"
                >￥{{ food.specfoods[0].price }}</span
              >
              <car-control :food="food"></car-control>
            </li>
          </ul>
        </section>
      </div>
    </transition>
    <transition name="hide">
      <div class="list-mask" v-show="listShow" @click="toggleShow"></div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import CarControl from "../CarControl/index";
import BScroll from "better-scroll";
export default {
  name: "ShopCart",
  components: {
    CarControl,
  },
  computed: {
    ...mapState(["cartList", "shopInfo"]),
    ...mapGetters(["totalCount", "totalPrice"]),
    payClass() {
      const { totalPrice } = this;
      const minPrice = this.shopInfo.float_minimum_order_amount;
      return totalPrice >= minPrice ? "enough" : "not-enough";
    },
    payText() {
      const { totalPrice } = this;
      const minPrice = this.shopInfo.float_minimum_order_amount;
      if (totalPrice === 0) {
        return `￥${minPrice}元起送`;
      } else if (totalPrice > 0 && totalPrice < minPrice) {
        return `还差${(minPrice - totalPrice).toFixed(2)}元起送`;
      } else {
        return "结算";
      }
    },
    listShow() {
      if (this.totalCount === 0) {
        this.updatedIsShow();
        return false;
      }
      if (this.isShow) {
        this.$nextTick(() => {
          // 实现BScroll的实例是一个单例
          if (!this.scroll) {
            this.scroll = new BScroll(".shop-list-container", {
              click: true,
            });
          } else {
            this.scroll.refresh(); //存在bscrol实例时，刷新滚动条   重新统计内容高度
          }
        });
      }
      return this.isShow;
    },
  },
  methods: {
    toggleShow() {
      if (this.totalCount > 0) {
        this.isShow = !this.isShow;
      }
    },
    updatedIsShow() {
      this.isShow = false;
    },
    clear() {
      this.$dialog
        .confirm({
          title: "清空",
          message: "确定清空购物车吗？",
        })
        .then(() => {
          // on confirm
          this.$store.dispatch("clear");
        })
        .catch(() => {
          // on cancel
        });
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
};
</script>

<style lang='scss' scoped>
.container {
  background-color: #3d3d3f;
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 13;
  .container-left {
    height: 100%;
    width: 68%;
  }
  .cart-icon {
    position: absolute;
    left: 0.266667rem;
    bottom: 0.266667rem;
    width: 1.466667rem;
    height: 1.466667rem;
    border-radius: 50%;
    background-color: #3d3d3f;
    border: 0.112rem solid rgb(68, 68, 68);
    .cart-num {
      position: absolute;
      top: -0.2rem;
      right: -0.2rem;
      color: white;
      background-color: red;
      padding: 0.026667rem 0.133333rem;
      border-radius: 50%;
    }
  }
  .cart-price {
    position: absolute;
    left: 2rem;
    top: 0;
    height: 100%;
    padding: 0.106667rem 0 0.053333rem 0;
  }
  .gotopay {
    position: absolute;
    right: 0;
    top: 0;
    width: 32%;
    height: 100%;
    background-color: #535356;
    &.enough {
      background-color: #4cd964;
    }
  }
}

.shop-cart {
  position: relative;
}

.shop-list {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: translateY(-100%);
  &.move-enter-active,
  &.move-leave-active {
    transition: transform 0.5s;
  }
  &.move-enter,
  &.move-leave-to {
    transform: translateY(0);
  }
  // padding-bottom: 2rem;
  background-color: white;
  z-index: 12;
  .shop-list-header {
    background-color: #eceff1;
    width: 100%;
    padding: 0.266667rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .shop-list-container {
    max-height: 30vh;
    overflow: hidden;
    ul {
      padding-bottom: 0.5rem;
    }
  }
  .shop-list-container::-webkit-scrollbar {
    width: 0 !important;
  }
  .food-name {
    width: 50%;
  }
}

.list-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  &.hide-enter-active,
  &.hide-leave-active {
    transition: background-color 0.5s;
  }
  &.hide-enter,
  &.hide-leave-to {
    opacity: 0;
  }
}
</style>