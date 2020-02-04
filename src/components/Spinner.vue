<template>
  <div class="spinner">
    <img src="~@/assets/common/spinner.svg" />
  </div>
</template>

<script>
export default {
  name: "Spinner"
}
</script>

<style lang="scss" scoped>
.spinner {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
