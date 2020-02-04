<template>
  <button
    class="base-button"
    :hovered="hovered"
    :type="submit"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    hovered: {
      type: String
    },
    submit: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.base-button {
  width: 100%;
  border: 2px solid #00aa8d;
  border-radius: 22px;
  padding: 14px;
  cursor: pointer;

  &:focus:not(:disabled) {
    outline: none;
  }
  &:disabled {
    opacity: 0.7;
    cursor: default;
  }
}
[hovered="true"] {
  color: #00aa8d;
  background: none;

  &:hover:not(:disabled) {
    background: #00aa8d;
    color: #ffffff;
    transition: all 0.3s;
  }
}
[hovered="false"] {
  background: #00aa8d;
  color: #ffffff;

  &:hover:not(:disabled) {
    color: #00aa8d;
    background: none;
    transition: all 0.3s;
  }
}
</style>
