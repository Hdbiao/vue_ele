<template>
  <div class="rate">
    <span
      class="star-item"
      :class="itemClass"
      v-for="(itemClass, index) in itemClasses"
      :key="index"
    ></span>
    <span class="score text-yellow">{{ score }}</span>
  </div>
</template>

<script>
const LENGTH = 5;
const CLS_ON = "on";
const CLS_OFF = "off";
const CLS_HALF = "half";
export default {
  props: {
    score: {
      type: Number,
    },
  },
  computed: {
    itemClasses() {
      //计算属性
      let result = [];
      let score = Math.floor(this.score * 2) / 2;
      let hasDecimal = score % 1 !== 0; //是否有效数
      let integer = Math.floor(score); //取整
      for (var i = 0; i < integer; i++) {
        result.push(CLS_ON);
      }
      if (hasDecimal) {
        //有且最多一个半星
        result.push(CLS_HALF);
      }
      while (result.length < LENGTH) {
        result.push(CLS_OFF);
      }
      //数组填充完毕
      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
.star-item {
  display: inline-block;
  width: 0.24rem;
  height: 0.24rem;
  &.on {
    background: url("./imgs/on.png") no-repeat;
    background-size: 100% 100%;
  }
  &.half {
    background: url("./imgs/half.png") no-repeat;
    background-size: 100% 100%;
  }
  &.off {
    background: url("./imgs/off.png") no-repeat;
    background-size: 100% 100%;
  }
}
.score {
  margin-left: 0.133333rem;
}
</style>