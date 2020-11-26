<template>
  <div class="shop-ratings">
    <header class="d-flex jc-around ai-center px-2 py-2 bg-white mb-2">
      <section class="d-flex flex-column ai-center">
        <p class="fs-xxxl text-orange m-0">
          {{ shopScores.overall_score | rateFormat(1) }}
        </p>
        <p class="fs-xl text-grey-1 m-0">综合评价</p>
        <p class="text-grey">
          高于周边商家{{ (shopScores.compare_rating * 100) | rateFormat(1) }}%
        </p>
      </section>
      <section>
        <p class="d-flex fs-xl text-grey-1 m-0">
          服务态度
          <rate
            class="ml-1"
            :score="shopScores.service_score | rateFormat(1)"
            :size="2"
          ></rate>
        </p>
        <p class="d-flex fs-xl text-grey-1 m-0">
          菜品评价
          <rate
            class="ml-1"
            :score="shopScores.food_score | rateFormat(1)"
            :size="2"
          ></rate>
        </p>
        <p class="d-flex fs-xl text-grey-1 m-0">
          送达时间
          <span class="ml-1">{{ shopScores.deliver_time }}分钟</span>
        </p>
      </section>
    </header>
    <ul class="bg-white d-flex flex-wrap p-1">
      <li
        v-for="(tag, index) in shopRateTags"
        :key="index"
        class="p-1 tag mr-1 mt-1 fs-xl"
        :class="[
          `${tag.unsatisfied ? 'down' : 'up'}`,
          currentIndex === index ? 'active' : '',
        ]"
        @click="checkTag(tag.name, index)"
      >
        {{ `${tag.name}(${tag.count})` }}
      </li>
    </ul>
    <ul class="rating-centent bg-white px-2">
      <li
        v-for="(rating, index) in ratingList"
        :key="index"
        class="rating-li d-flex py-1 text-grey-1"
      >
        <img class="avatar mr-2" :src="getImgPath(rating.avatar)" alt="" />
        <section>
          <section class="d-flex flex-1 jc-between">
            <span>{{ rating.username }}</span>
            <span>{{ rating.rated_at }}</span>
          </section>
          <section class="d-flex">
            <rate :score="rating.rating_star" class="mr-1"></rate>
            <span v-if="rating.time_spent_desc">{{
              rating.time_spent_desc
            }}</span>
          </section>
          <section v-if="rating.item_ratings" class="my-1">
            <span v-for="(item, index) in rating.item_ratings" :key="index">
              <img
                class="food-img mr-1"
                :src="getImgPath(item.image_hash)"
                alt=""
                v-if="item.image_hash"
                @click="showFood(item.image_hash)"
              />
            </span>
          </section>
          <section v-if="rating.item_ratings">
            <span
              v-for="(item, index) in rating.item_ratings"
              :key="index"
              class="food-name ellipsis mr-1"
              >{{ item.food_name }}</span
            >
          </section>
        </section>
      </li>
    </ul>
    <div class="food" v-show="isShow" @click="isShow = false">
      <img :src="imgPath" alt="" class="food-img" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Rate from "../../../components/Rate/index";
import getImgPath from "../../../components/mixin/getImgPath";
export default {
  name: "ShopRatings",
  components: {
    Rate,
  },
  computed: {
    ...mapState(["shopScores", "shopRateTags", "ratingList"]),
  },
  mixins: [getImgPath],
  methods: {
    checkTag(tagName, index) {
      this.$store.dispatch("getRatingList", {
        shopId: this.shopId,
        offset: 10,
        tagName: tagName,
      });
      this.currentIndex = index;
    },
    showFood(path) {
      this.imgPath = this.getImgPath(path);
      this.isShow = true;
    },
  },
  data() {
    return {
      currentIndex: 0,
      shopId: null,
      isShow: false,
      imgPath: "",
    };
  },

  mounted() {
    this.shopId = this.$route.query.id;
  },
  filters: {
    rateFormat(value, num) {
      return Number(value.toFixed(num));
    },
  },
};
</script>

<style lang="scss" scoped>
.shop-ratings {
  overflow: scroll;
  height: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
}
.tag {
  border: 0.026667rem;
  border-radius: 0.122667rem;
  &.up {
    background-color: #ebf5ff;
    color: #6d7885;
  }
  &.down {
    background-color: #f5f5f5;
    color: #aaa;
  }
  &.active {
    background-color: #3190e8;
    color: #fff;
  }
}
.rating-centent {
  .avatar {
    width: 0.96rem;
    height: 0.96rem;
  }
  .food-img {
    width: 1.866667rem;
    height: 1.866667rem;
  }
  .food-name {
    display: inline-block;
    padding: 0.16rem;
    width: 2.2rem;
    border: 0.026667rem solid #ebebeb;
    border-radius: 0.15rem;
  }
}
.food {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6.64rem;
    height: 6.64rem;
  }
}
</style>