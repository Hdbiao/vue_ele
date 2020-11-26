<template>
  <div class="alert-tip d-flex ai-center jc-center">
    <section class="bg-white tip-container d-flex flex-column ai-center pt-2">
      <div>
        <span v-if="type === 'success'">
          <svg
            t="1605150105671"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="6911"
            width="48"
            height="48"
          >
            <path
              d="M0 512c0 282.7776 229.2224 512 512 512s512-229.2224 512-512S794.7776 0 512 0 0 229.2224 0 512z"
              fill="#1afa29"
              p-id="6912"
              data-spm-anchor-id="a313x.7781069.0.i9"
              class="selected"
            ></path>
            <path
              d="M795.648 291.9424l70.6048 74.1376-423.5776 403.6608-223.744-234.8544 74.1376-70.656 153.088 160.768z"
              fill="#FFFFFF"
              p-id="6913"
            ></path>
          </svg>
        </span>
        <span v-if="type === 'error'">
          <svg
            t="1605150067494"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="6034"
            width="48"
            height="48"
          >
            <path
              d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
              fill="#FFBF3C"
              p-id="6035"
            ></path>
            <path
              d="M512 790.755556m-68.266667 0a68.266667 68.266667 0 1 0 136.533334 0 68.266667 68.266667 0 1 0-136.533334 0Z"
              fill="#FFFFFF"
              p-id="6036"
            ></path>
            <path
              d="M509.44 665.6a42.097778 42.097778 0 0 1-42.040889-39.765333l-22.414222-404.081778A64.568889 64.568889 0 0 1 509.44 153.6a64.568889 64.568889 0 0 1 64.512 68.152889l-22.471111 404.081778a42.097778 42.097778 0 0 1-42.040889 39.765333z"
              fill="#FFFFFF"
              p-id="6037"
            ></path>
          </svg>
        </span>
      </div>
      <p class="fs-xl">{{ tip }}</p>
      <button
        class="tip-btn text-white border-none fs-xxl fw-700 p-0"
        @click="close"
      >
        确认
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: "AlertTip",
  props: {
    type: {
      type: String,
      default: "error",
    },
    tip: String,
  },
  methods: {
    close() {
      this.$emit("change", false);
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes alertAnimation {
  0% {
    transform: scale(1);
  }
  35% {
    transform: scale(0.8);
  }
  70% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
.alert-tip {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 200;
  .tip-container {
    width: 70%;
    border-radius: 0.25rem;
    background-color: #f5f5f5;
    // border: 0.026667rem solid;
    border: 0.026667rem;
    animation: alertAnimation 0.4s;
    .tip-btn {
      background-color: #1afa29;
      width: 100%;
      height: 1.12rem;
      border-bottom-right-radius: 0.22rem;
      border-bottom-left-radius: 0.22rem;
    }
  }
}
</style>