<template>
  <div class="shop-goods d-flex">
    <section class="menu-wrapper pb-5" ref="menuWrapper">
      <ul class="content">
        <li
          :class="index === currentIndex ? 'on' : ''"
          class="d-flex ai-center jc-center"
          v-for="(category, index) in goods"
          :key="index"
          @click="clickMenuItem(index)"
        >
          {{ category.name }}
        </li>
      </ul>
    </section>

    <section class="foods-wrapper">
      <ul ref="foodUl" class="content">
        <li
          v-for="(category, index) in goods"
          :key="index"
          class="food-list-hook"
        >
          <header class="p-1 d-flex jc-between ai-center">
            <div>
              <strong class="fs-xl text-grey-1">{{ category.name }}</strong>
              <span class="flex-1 fs-sm text-grey ml-1">{{
                category.description
              }}</span>
            </div>
            <span>
              <svg
                t="1605450711752"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3851"
                width="16"
                height="16"
              >
                <path
                  d="M186.181818 487.656727m-93.090909 0a93.090909 93.090909 0 1 0 186.181818 0 93.090909 93.090909 0 1 0-186.181818 0Z"
                  fill="#BBBBBB"
                  p-id="3852"
                ></path>
                <path
                  d="M558.545455 487.656727m-93.09091 0a93.090909 93.090909 0 1 0 186.181819 0 93.090909 93.090909 0 1 0-186.181819 0Z"
                  fill="#BBBBBB"
                  p-id="3853"
                ></path>
                <path
                  d="M930.909091 487.656727m-93.090909 0a93.090909 93.090909 0 1 0 186.181818 0 93.090909 93.090909 0 1 0-186.181818 0Z"
                  fill="#BBBBBB"
                  p-id="3854"
                ></path>
              </svg>
            </span>
          </header>
          <section
            class="bg-white p-1"
            v-for="(food, i) in category.foods"
            :key="i"
            @click="showFood(food)"
          >
            <div class="d-flex">
              <section class="mr-1">
                <img :src="`https://elm.cangdu.org/img/${food.image_path}`" />
              </section>
              <section>
                <h3 class="mt-0">
                  <strong>{{ food.name }}</strong>
                </h3>
                <p class="text-grey">{{ food.description }}</p>
                <p>
                  {{
                    `月售${food.month_sales}份 / 好评率${food.satisfy_rate}%`
                  }}
                </p>
                <span
                  class="food-tag px-1"
                  v-if="food.activity"
                  :style="{
                    borderColor: `#${food.activity.icon_color}`,
                    color: `#${food.activity.image_text_color}`,
                  }"
                  >{{ food.activity.image_text }}</span
                >
              </section>
            </div>
            <footer class="pl-4 pr-1 d-flex ai-center jc-between mt-1">
              <span>
                <span class="text-orange">￥</span>
                <span class="fs-xxl text-orange fw-700">{{
                  food.specfoods[0].price
                }}</span>
                <span class="ml-1" v-if="food.specfoods.length >= 2">起</span>
              </span>
              <car-control :food="food"></car-control>
            </footer>
          </section>
        </li>
      </ul>
    </section>

    <transition name="food">
      <food :food="food" ref="food"></food>
    </transition>
    <shop-cart class="shop-cart"></shop-cart>
  </div>
</template>

<script>
import CarControl from "../../../components/CarControl/index";
import Food from "../../../components/Food/Food";
import ShopCart from "../../../components/ShopCart/index";
import { getShopMenu } from "../../../api/index";
import BScroll from "better-scroll";
export default {
  name: "ShopGoods",
  components: {
    CarControl,
    Food,
    ShopCart,
  },
  data() {
    return {
      goods: [],
      foodScroll: null,
      scrollY: 0, //右侧滑动的Y轴坐标（滑动过程中实时改变）
      tops: [], //所有右侧分类li的top组成的数组(列表首次显示后不再改变)
      food: {}, // 需要显示的food
      menuMaxIndex: 0, //左侧分类的最大下标
      isEnd: false,
    };
  },
  methods: {
    async fetch(id) {
      const data = await getShopMenu(id);
      this.goods = data;
    },
    // 初始化滚动
    _initScroll() {
      new BScroll(this.$refs.menuWrapper, {
        movable: true,
        zoom: true,
        click: true,
      });
      this.foodScroll = new BScroll(".foods-wrapper", {
        movable: true,
        zoom: true,
        click: true,
        probeType: 2, // 因为惯性的滑动不会触发
      });

      // 给右侧列表绑定scroll监听
      this.foodScroll.on("scroll", ({ y }) => {
        // console.log(x, y);
        this.scrollY = Math.abs(y);
        // console.log(this.scrollY);
      });
      // 给右侧列表绑定scroll滚动结束监听
      this.foodScroll.on("scrollEnd", ({ y }) => {
        // console.log(x, y);
        this.scrollY = Math.abs(y);
        // console.log(this.scrollY);
      });
    },
    // 初始化tops
    _initTops() {
      const tops = [];
      let top = 0;

      tops.push(top);
      // 找到所有lis
      const lis = this.$refs.foodUl.getElementsByClassName("food-list-hook");
      let liArr = Array.from(lis);
      liArr.forEach((li) => {
        top += li.clientHeight;
        tops.push(top);
      });
      this.tops = tops;
    },

    clickMenuItem(index) {
      // console.log(index);
      // 使右侧列表滑动到对应的位置
      console.log(index);
      if (index === this.menuMaxIndex - 1) {
        console.log("到达最底部");
        this.isEnd = true;
      } else {
        this.isEnd = false;
      }

      // 1.得到目标位置
      const scrollY = this.tops[index];
      // 2.立即更新scroll（更新分类项为当前分类项）
      this.scrollY = scrollY;
      // 3.平滑滚动右侧列表
      this.foodScroll.scrollTo(0, -scrollY, 300);
    },
    // 显示点击的food
    showFood(food) {
      this.food = food;
      // 调用子组件的方法,显示food组件
      this.$refs.food.toggleShow();
    },
  },
  computed: {
    // 计算得到当前分类的下标
    currentIndex() {
      if (this.isEnd) {
        console.log(this.isEnd);
        return this.menuMaxIndex - 1;
      } else {
        console.log("111");
        // 得到条件数据
        const { scrollY, tops } = this;

        // 根据条件计算产生一个结果
        const index = tops.findIndex((top, index) => {
          return scrollY >= top && scrollY < tops[index + 1];
        });
        // 返回结果
        return index;
      }
    },
  },
  created() {
    this.fetch(this.$route.query.id);
  },
  watch: {
    goods() {
      this.$nextTick(() => {
        //数据更新显示后创建
        // 初始化滚动
        this._initScroll();
        this._initTops();
      });
      this.menuMaxIndex = this.goods.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.shop-goods {
  height: 100%;
}
.menu-wrapper {
  width: 2.373333rem;
  // height: 100vh;
  overflow-y: hidden;
  li {
    height: 1.706667rem;
    border-left: 0.093333rem solid transparent;
    &.on {
      border-left: 0.093333rem solid #3190e8;
      background-color: white;
    }
  }
}
.foods-wrapper {
  width: 100%;
  // height: 100vh;
  // height: 100%;
  overflow-y: hidden;
  .food-tag {
    border: 0.026667rem solid;
    height: 0.314667rem;
    border-radius: 0.314667rem;
    font-size: 0.32rem;
  }
  img {
    width: 1.253333rem;
    height: 1.253333rem;
  }
}
.content {
  padding-bottom: 5.5rem;
}
.food-enter-active,
.food-leave-active {
  transition: all 0.3s;
}
.food-enter-active,
.food-leave-active {
  opacity: 0;
}
.shop-cart {
  position: fixed;
  left: 0;
  bottom: -0.026667rem;
  width: 100%;
  height: 1.173333rem;
}
.ball {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>