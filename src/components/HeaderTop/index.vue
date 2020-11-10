<template>
  <header class="header-top bg-primary text-white">
    <span class="left">
      <slot name="left"></slot>
    </span>
    <span class="title ellipsis text-center">{{ title }}</span>
    <span class="right">
      <slot name="right"></slot>
    </span>
  </header>
</template>

<script>
export default {
  name: "HeaderTop",
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.header-top {
  position: relative;
  width: 100%;
  height: 47px;
  .left {
    position: absolute;
    left: 0.48rem;
    top: 50%;
    transform: translate(0, -50%);
  }
  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    width: 50%;
  }
  .right {
    position: absolute;
    right: 0.48rem;
    top: 50%;
    transform: translate(0, -50%);
  }
}
</style>