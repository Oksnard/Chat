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
            v-model="form.login"
            placeholder="Enter your Login"
            type="text"
            label="Login"
          />
          <BaseInput
            v-model="form.password"
            placeholder="Enter your Password"
            type="password"
            label="Password"
          />
        </div>
        <div class="login-card_actions">
          <router-link to="/forgot-password" class="base-link">
            Forgot Password?
          </router-link>
          <BaseButton
            hovered="false"
            class="base-button"
            @click="checkForm(form)"
          >
            Log In
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
      form: {
        login: "+70705729734",
        password: "1a2s3d4f5g6h"
      }
    }
  },
  methods: {
    checkForm() {
      if (this.form.login !== "" && this.form.password !== "") {
        this.$store.dispatch(AUTH.ACTIONS.LOGIN, this.form)
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
