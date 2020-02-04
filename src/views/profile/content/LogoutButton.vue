<template>
  <button class="logout-button" @click="logout">
    Logout
  </button>
</template>

<script>
import { AUTH } from "@/store/types"

export default {
  name: "LogoutButton",
  methods: {
    logout() {
      this.$store.dispatch(AUTH.ACTIONS.LOGOUT)
    }
  }
}
</script>

<style lang="scss" scoped>
.logout-button {
  margin-top: 15px;
  width: 100%;
  border: 2px solid #ff5252;
  color: #ff5252;
  background: transparent;
  border-radius: 22px;
  padding: 14px;
  cursor: pointer;
}
</style>
