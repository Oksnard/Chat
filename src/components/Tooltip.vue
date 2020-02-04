<template>
  <span class="tooltip-container">
    <transition name="fade">
      <div v-if="isShow" class="tooltip" :class="`position-${position}`">
        <slot name="tooltip-content" />
      </div>
    </transition>
    <span @mouseover="isShow = true" @mouseleave="isShow = false">
      <slot />
    </span>
  </span>
</template>

<script>
export default {
  props: ["position"],
  data: () => ({
    isShow: false
  }),
  methods: {
    outTooltip() {
      setTimeout(() => (this.isShow = false), 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.tooltip-container {
  position: relative;
}

.tooltip {
  width: max-content;
  position: absolute;
  transform: translate(-50%, 100%);
  user-select: none;
  pointer-events: none;
  padding: 14px 20px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 2px 16px 0 rgba(0, 0, 0, 0.1);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.position-left {
  position: absolute;
  top: 50%;
  left: -60px;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 3;
}
</style>
