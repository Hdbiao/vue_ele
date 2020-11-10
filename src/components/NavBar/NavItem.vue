<template>
  <div class="nav-item">
    <router-link
      tag="div"
      class="text-grey-1 d-flex flex-column ai-center text-center"
      :to="item.url"
      :class="['nav-link']"
    >
      <span
        class="iconfont"
        :class="[item.icon, item.url === $route.path ? 'text-primary' : '']"
      ></span>
      <span>{{ item.field_name }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    item: Object,
    index: Number,
    curIdx: Number,
  },
};
</script>

<style lang="scss" scoped>
</style>