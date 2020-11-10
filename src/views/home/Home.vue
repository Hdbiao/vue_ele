<template>
  <div class="home">
    <header-top :title="address" class="header-top">
      <span
        class="iconfont icon-sousuo"
        slot="left"
        @click="$router.push('/search')"
      ></span>
      <span slot="right" @click="$router.push('/login')"> 登录|注册 </span>
    </header-top>

    <nav class="msite-nav mt-4 mb-1 bg-white">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide d-flex flex-wrap"
            v-for="(item, index) in footTypes"
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
    </nav>

    <shop-list
      class="bg-white"
      :shopData="shopData"
      v-if="shopData.length > 1"
    ></shop-list>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/index";
import ShopList from "../../components/ShopList/index";
import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);
import "swiper/swiper-bundle.css";
import arrTrans from "../../utils/arrTrans";
import { getAddress, getFootTypes, getShopList } from "../../api/index";
export default {
  name: "Home",
  components: {
    HeaderTop,
    ShopList,
  },
  data() {
    return {
      address: "",
      footTypes: [],
      shopData: [],
    };
  },
  created() {
    this.fetch();
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
  methods: {
    async fetch() {
      const addressData = await getAddress();
      this.address = addressData.name;
      // const { data: res } = await this.$http.get("/v2/index_entry");
      const res = await getFootTypes({
        geohash: "22.688104,113.8109",
        group_type: 1,
        "flags[]": "F",
      });
      this.footTypes = arrTrans(res, 8);
      // const data = await this.$http.get(
      //   "/shopping/restaurants?latitude=22.688104&longitude=113.8109&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]="
      // );
      const data = await getShopList({
        latitude: 22.688104,
        longitude: 113.8109,
        offset: 0,
        limit: 20,
        "extras[]": "activities",
        keyword: "",
        restaurant_category_id: "",
        "restaurant_category_ids[]": "",
        order_by: "",
        "delivery_mode[]": "",
      });
      this.shopData = data;
    },
  },
};
</script>

<style lang="scss" scoped>
.header-top {
  position: fixed;
  top: 0;
  left: 0;
  height: 1.218667rem;
  z-index: 100;
}
.msite-nav {
  border-bottom: 0.026667rem solid #e4e4e4;
}
.link-to-foot {
  width: 25%;

  img {
    width: 1.12rem;
    height: 1.12rem;
  }
}
</style>
