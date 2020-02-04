<template>
  <div class="base-container">
    <SideBar />
    <div class="main">
      <transition name="fade" mode="out-in">
        <div class="slot-wrap">
          <slot />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/Menu/SideBar.vue"
export default {
  components: { SideBar }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

.slot-wrap {
  height: 100%;
  max-height: 100vh;
  overflow: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.base-container {
  display: flex;
  width: 100%;
  max-height: 100vh;
}

.main {
  width: 100%;
}
@media (max-width: 768px) {
  .main {
    min-width: calc(100vw);
  }
}
@media (max-width: 768px) {
  .base-container {
    overflow-x: hidden;
  }
}
</style>
