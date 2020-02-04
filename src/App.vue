<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import config from "./config"
import { PROFILE } from "./store/types"
import "@/lib/network/socket"

export default {
  created() {
    if (window.localStorage.getItem(config.AUTH_KEY)) {
      this.$store.dispatch(PROFILE.ACTIONS.LOAD_INFO)
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
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

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  min-height: 100vh;
  display: flex;
}
</style>
