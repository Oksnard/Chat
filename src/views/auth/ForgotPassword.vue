<template>
  <Card>
    <form
      id="login"
      action="#"
      method="post"
      class="login-card_form"
      @submit.prevent="checkForm"
    >
      <div class="login-card_info">
        <div class="login-card_body">
          <BaseInput
            v-model="email"
            placeholder="Enter your E-mail"
            type="text"
            label="E-mail"
            :email="email"
          />
        </div>
        <div class="login-card_actions">
          <router-link to="/login" class="base-link">
            Login
          </router-link>
          <BaseButton
            hovered="false"
            type="submit"
            class="base-button"
            @click="checkForm()"
          >
            Send password
          </BaseButton>
        </div>
      </div>
    </form>
  </Card>
</template>

<script>
import BaseButton from "@/components/BaseButton"
import BaseInput from "@/components/BaseInput"
import Card from "@/components/Card"
import { AUTH } from "@/store/types"

export default {
  components: { BaseButton, BaseInput, Card },
  data() {
    return {
      email: ""
    }
  },
  methods: {
    async checkForm() {
      if (this.email !== "") {
        this.$store.dispatch(AUTH.ACTIONS.RESTORE_PASSWORD, this.email)
        // this.$router.push({ path: "/" })
      } else {
        // eslint-disable-next-line no-console
        console.error("Поля не заполнены")
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.base-link {
  color: #00aa8d;
}

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
