<template>
  <div class="search">
    <header-top title="搜索">
      <span class="iconfont icon-fanhui" slot="left"></span>
    </header-top>

    <form class="search-form d-flex ai-center px-1">
      <input
        type="search"
        placeholder="请输入商家或美食名称"
        class="search_input flex-1 border-none mr-1 px-1 fs-xxl fw-700 text-grey-2"
        v-model="searchValue"
      />
      <input
        type="button"
        value="搜索"
        class="search_submit bg-primary border-none px-2 fs-xxl text-white"
        @click="searchTarget"
      />
    </form>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/index";
export default {
  name: "Search",
  components: {
    HeaderTop,
  },
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    searchTarget() {
      console.log(this.searchValue);
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.search-form {
  height: 1.573333rem;
  background-color: #fff;
  .search_input {
    height: 0.933333rem;
    border-radius: 0.106667rem;
    background-color: #f2f2f2;
  }
  .search_submit {
    height: 0.933333rem;
    border-radius: 0.106667rem;
  }
}
</style>