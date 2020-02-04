<template>
  <div
    id="burger"
    :class="{ active: isBurgerActive }"
    @click.prevent="toggleNav"
  >
    <slot>
      <button type="button" class="burger-button" title="Menu">
        <div class="burger-bar burger-bar--1" />
        <div class="burger-bar burger-bar--2" />
        <div class="burger-bar burger-bar--3" />
      </button>
    </slot>
  </div>
</template>

<script>
import { SIDEBAR_OPEN } from "@/store/types"

export default {
  computed: {
    isBurgerActive() {
      return this.$store.getters[SIDEBAR_OPEN.GETTERS.GET_IS_NAV_OPEN]
    }
  },
  methods: {
    toggleNav() {
      this.$store.commit(SIDEBAR_OPEN.MUTATIONS.TOGGLE_NAV)
    }
  }
}
</script>

<style lang="scss" scoped>
.burger-button {
  position: relative;
  height: 30px;
  width: 30px;
  display: block;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;

  &:focus {
    outline: 0;
  }
}

.burger-bar {
  background-color: #00aa8d;
  position: absolute;
  top: 50%;
  right: 6px;
  left: 6px;
  height: 3px;
  width: auto;
  margin-top: -1px;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar--1 {
  -webkit-transform: translateY(-6px);
  transform: translateY(-6px);
}

.burger-bar--2 {
  transform-origin: 0 50%;
  transform: scaleX(0.5);
}

.burger-button:hover .burger-bar--2 {
  transform: scaleX(1);
}

.no-touchevents .burger-bar--2:hover {
  transform: scaleX(1);
}

.burger-bar--3 {
  transform: translateY(6px);
}

#burger.active .burger-button {
  transform: rotate(-180deg);
}

#burger.active .burger-bar {
  background-color: #00aa8d;
}

#burger.active .burger-bar--1 {
  transform: rotate(45deg);
}

#burger.active .burger-bar--2 {
  opacity: 0;
}

#burger.active .burger-bar--3 {
  transform: rotate(-45deg);
}

// MEDIA QUERIES //

@media (min-width: 768px) {
  .burger-button {
    display: none;
  }
}
</style>
