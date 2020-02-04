<template>
  <div class="base-textarea">
    <label class="base-textarea_label">{{ label }}</label>
    <textarea
      :value="value"
      :placeholder="placeholder"
      type="text"
      autocomplete="on"
      class="base-textarea_textarea"
      @input="$emit('change', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    placeholder: {
      type: String
    },
    type: {
      type: String
    },
    label: {
      type: String
    },
    value: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.base-textarea .base-textarea_label {
  font-weight: 600;
}

.base-textarea .base-textarea_textarea {
  resize: none;
  padding: 15px;
  width: 100%;
  height: 90px;
  box-sizing: border-box;
  background: #ffffff;
  color: #857e7e;
  border: none;
  outline: none;
  overflow: auto;
}
</style>
