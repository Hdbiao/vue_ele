<template>
  <div :class="['switch', { 'bg-blue': isChecked }]" @click="toggle">
    <span :class="{ on: isChecked }"></span>
  </div>
</template>

<script>
export default {
  name: "MySwitch",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isChecked: this.value,
    };
  },
  created() {
    console.log(this.isChecked);
  },
  watch: {
    // value(val) {
    //   this.isChecked = val;
    // },
    isChecked(val) {
      this.$emit("change", val);
    },
  },
  methods: {
    toggle() {
      this.isChecked = !this.isChecked;
    },
  },
};
</script>

<style lang="scss" scoped>
.switch {
  display: inline-block;
  width: 1.2rem;
  height: 0.6rem;
  background-color: #999;
  border-radius: 0.266667rem;
  position: relative;
  &.bg-blue {
    background-color: #3190e8;
  }
}
span {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 0.25rem;
  background-color: #fff;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 0.08rem;
  transition: all, 0.3s;
  &.on {
    left: 0.64rem;
  }
}
</style>