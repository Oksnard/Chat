<template>
  <div class="header-title">
    <slot />
  </div>
</template>

<script>
export default {
  name: "HeaderTitle"
}
</script>

<style lang="scss" scoped>
.header-title {
  font-size: 24px;
  font-weight: 600;
}
</style>
