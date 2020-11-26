<template>
  <div class="home">
    <header-top :title="address.name" class="header-top">
      <span slot="left" @click="$router.push('/search')">
        <svg
          t="1605171501118"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3887"
          width="32"
          height="32"
        >
          <path
            d="M888.703 847.158l-155.33-155.331c50.041-59.65 80.19-136.551 80.19-220.508 0-189.613-153.703-343.318-343.315-343.318-189.617 0-343.32 153.704-343.32 343.318s153.704 343.319 343.32 343.319c85.053 0 162.867-30.942 222.838-82.164l155.141 155.142c11.175 11.176 29.3 11.176 40.475 0 11.157-11.176 11.157-29.281 0.001-40.458zM470.25 757.416c-158.007 0-286.1-128.09-286.1-286.098 0-158.006 128.093-286.099 286.1-286.099s286.08 128.094 286.08 286.1c0 158.007-128.075 286.097-286.08 286.097z"
            p-id="3888"
            fill="#ffffff"
          ></path>
        </svg>
      </span>
      <span slot="right" @click="$router.push('/login')" v-if="!userInfo">
        登录|注册
      </span>
      <span slot="right" @click="$router.push('/profile')" v-if="userInfo">
        <svg
          t="1605171376498"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1975"
          width="32"
          height="32"
        >
          <path
            d="M512 409.6m-122.88 0a122.88 122.88 0 1 0 245.76 0 122.88 122.88 0 1 0-245.76 0Z"
            fill="#ffffff"
            p-id="1976"
          ></path>
          <path
            d="M512 81.92C274.432 81.92 81.92 274.432 81.92 512s192.512 430.08 430.08 430.08 430.08-192.512 430.08-430.08S749.568 81.92 512 81.92z m348.16 430.08c0 86.016-30.72 165.888-83.968 227.328-10.24 12.288-28.672 8.192-34.816-6.144C706.56 638.976 616.448 573.44 512 573.44s-194.56 65.536-229.376 159.744c-6.144 14.336-24.576 16.384-34.816 6.144C194.56 677.888 163.84 598.016 163.84 512c0-149.504 94.208-286.72 237.568-331.776C641.024 106.496 860.16 284.672 860.16 512z"
            fill="#ffffff"
            p-id="1977"
          ></path>
        </svg>
      </span>
    </header-top>

    <nav class="msite-nav mb-1 bg-white pt-4">
      <div class="swiper-container" v-if="footTypes.length">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide d-flex flex-wrap"
            v-for="(item, index) in footTypesArr"
            :key="index"
          >
            <router-link
              v-for="(footItem, i) in item"
              :key="i"
              :to="footItem.link"
              class="link-to-foot"
            >
              <div class="d-flex flex-column ai-center my-1">
                <img
                  :src="`https://fuss10.elemecdn.com/${footItem.image_url}`"
                  :alt="footItem.description"
                  class="mb-1"
                />
                <span class="text-grey-1">{{ footItem.title }}</span>
              </div>
            </router-link>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/fl.svg" alt="" v-else />
    </nav>

    <section class="shop">
      <shop-list
        class="bg-white"
        :shopData="shopList"
        v-if="shopList.length"
      ></shop-list>
      <ul class="p-0" v-else>
        <li v-for="i in 5" :key="i">
          <img src="./images/shopback.svg" alt="" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/index";
import ShopList from "../../components/ShopList/index";
import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);
import "swiper/swiper-bundle.css";

import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    HeaderTop,
    ShopList,
  },
  data() {
    return {
      isScroll: true, //是否可以滚动
      pageIndex: 1,
      shopScrollHeight: 0,
      // address: "",
      // footTypes: [],
      // shopData: [],
    };
  },
  created() {
    this.$store.dispatch("getFootTypes");
    this.$store.dispatch("getShopList");
  },
  mounted() {
    window.addEventListener("scroll", this.scrollMoreData);
    console.log(this._initShopListTop());
  },
  methods: {
    _initShopListTop() {
      //获取商铺列表的最后一个
      let shopList = document.querySelector(".shop");
      // console.log(shopList.offsetHeight);
      this.shopScrollHeight = shopList.offsetHeight;
    },
    scrollMoreData() {
      const scrollY =
        document.documentElement.scrollTop || document.body.scrollTop; //滑动的高度
      if (scrollY + 500 >= this.shopScrollHeight && this.isScroll) {
        this.isScroll = false;
        console.log("加载更多");
      }
    },
  },

  computed: {
    ...mapState(["address", "footTypes", "shopList", "userInfo"]),
    footTypesArr() {
      let { footTypes } = this;
      let newArr = [...footTypes];
      let length = footTypes.length;
      let arr = [];
      for (let i = 0; i < length; i += 8) {
        arr.push(newArr.splice(0, 8));
      }
      return arr;
    },
  },
  watch: {
    footTypes() {
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          loop: true, // 循环模式选项

          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination",
          },
          // autoHeight: true,
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
}
.header-top {
  position: fixed;
  top: 0;
  left: 0;
  height: 1.218667rem;
  z-index: 100;
}
.msite-nav {
  border-bottom: 0.026667rem solid #e4e4e4;
  height: 6.613333rem;
  .swiper-container {
    height: 100%;
  }
}
.link-to-foot {
  width: 25%;

  img {
    width: 1.12rem;
    height: 1.12rem;
  }
}
</style>
