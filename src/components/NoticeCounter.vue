<template>
  <span class="notice">{{ notice }}</span>
</template>

<script>
export default {
  props: {
    notice: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.notice {
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #00aa8d;
  font-weight: 600;
}
</style>
