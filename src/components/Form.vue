<template>
  <form
    id="login"
    action="#"
    method="post"
    class="login-card_form"
    @submit.prevent="checkForm"
  >
    <div class="login-card_info">
      <div class="login-card_body">
        <slot name="body" />
      </div>
      <div class="login-card_actions">
        <slot name="link" />
        <slot name="action" />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    login: {
      type: String
    },
    password: {
      type: String
    }
  },
  methods: {
    checkForm() {
      // eslint-disable-next-line no-console
      console.log(this.login)
    }
  }
}
</script>

<style lang="scss">
.login-card_form {
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  background: rgba(0, 170, 141, 0.1);
}

.login-card_info {
  padding: 30px 20px;

  .title {
    font-size: 24px;
    color: #00aa8d;
    font-weight: 600;
    text-align: center;
    margin-top: 0;
  }

  .login-card_actions {
    text-align: center;

    .base-button {
      margin-top: 20px;
    }
  }
}
</style>
