<template>
  <div class="login">
    <div class="login-card">
      <div class="login-card_header">
        <img src="@/assets/logo.svg" alt="logo" class="logo" />
      </div>
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  width: 100%;
  padding: 0 20px;
  min-height: 100vh;
  background: #00aa8d;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-card {
  max-width: 420px;
  width: 420px;
  border-radius: 8px;
  box-shadow: 1px 2px 16px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;

  .login-card_header {
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .logo {
      width: 127px;
      height: 60px;
      object-fit: contain;
    }
  }
}
</style>
