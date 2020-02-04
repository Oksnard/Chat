<template>
  <form class="password-form" @submit.prevent="save">
    <Spinner v-if="loading" />
    <div class="title">
      Change Password
    </div>
    <BaseInput
      v-model="form.password_old"
      label="Old Password"
      placeholder="Enter Old Password"
      type="password"
    />
    <BaseInput
      v-model="form.password_new"
      label="New password"
      placeholder="Enter New password"
      type="password"
    />
    <BaseInput
      v-model="form.password_new_repeat"
      label="Repeat New password"
      placeholder="Enter Repeat New password"
      type="password"
    />
    <div class="actions">
      <BaseButton :disabled="!isValid" hovered="false">
        Change Password
      </BaseButton>
    </div>
  </form>
</template>

<script>
import BaseInput from "@/components/BaseInput"
import BaseButton from "@/components/BaseButton"
import Spinner from "@/components/Spinner"
import { PROFILE } from "@/store/types"

const form = {
  password_old: ``,
  password_new: ``,
  password_new_repeat: ``
}

export default {
  name: "PasswordForm",
  components: {
    BaseInput,
    BaseButton,
    Spinner
  },
  data: () => ({
    form: {
      ...form
    },
    loading: false
  }),
  computed: {
    isValid() {
      const passwordsAreEqual =
        this.form.password_new === this.form.password_new_repeat

      return (
        this.form.password_old.trim() &&
        this.form.password_new.trim() &&
        passwordsAreEqual
      )
    }
  },
  methods: {
    async save() {
      if (this.isValid) {
        this.loading = true
        await this.$store.dispatch(PROFILE.ACTIONS.CHANGE_PASSWORD, this.form)
        this.form = { ...form }
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.password-form {
  padding: 30px 0;
  position: relative;
}
.base-button {
  width: 190px;
}
.actions {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}
.title {
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  margin-top: 30px;
  margin-bottom: 20px;
}
</style>
