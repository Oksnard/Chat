<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <h3>{{ title }}</h3>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body" />
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <BaseButton
                hovered="false"
                class="base-button"
                @click="$emit('closeChat')"
              >
                Yes
              </BaseButton>
              <BaseButton
                hovered="true"
                class="base-button"
                @click="$emit('closeModal')"
              >
                No
              </BaseButton>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import BaseButton from "@/components/BaseButton"
export default {
  components: { BaseButton },
  props: {
    title: {
      type: String,
      default: ""
    }
  }
}
</script>

<style scoped lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  text-align: center;
  font-family: ProximaNova;
  margin: 0px auto;
  padding: 30px;
  width: 420px;
  border-radius: 8px;
  box-shadow: 1px 2px 16px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  transition: all 0.3s ease;
}

.base-button {
  width: 120px;
  margin: 0 5px;
}

.modal-header {
  margin-top: 0;
  font-size: 20px;
  font-weight: bold;
}

.modal-body {
  margin: 20px 0;
  font-size: 16px;
}

.modal-footer {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
