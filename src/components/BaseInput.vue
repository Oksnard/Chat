<template>
  <div class="base-input">
    <label class="base-input_label">{{ label }}</label>
    <input
      :value="value"
      :placeholder="placeholder"
      :type="type"
      autocomplete="on"
      class="base-input_input"
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

<style lang="scss">
.base-input {
  margin-bottom: 20px;

  .base-input_label {
    font-weight: 600;
  }

  .base-input_input {
    margin-top: 10px;
    padding: 15px;
    width: 100%;
    box-sizing: border-box;
    background: #ffffff;
    color: #857e7e;
    border: 1px solid #b0ded6;
    border-radius: 5px;

    &:focus {
      outline: none;
    }
  }
}
</style>
