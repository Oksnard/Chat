<template>
  <form class="info-form" @submit.prevent="save">
    <Spinner v-if="loading" />
    <BaseInput v-model="form.name" label="Full name" placeholder="Type name" />
    <BaseInput v-model="form.email" label="E-mail" placeholder="Type email" />
    <div class="actions">
      <BaseButton :disabled="!isValid" hovered="false">
        Save
      </BaseButton>
    </div>
  </form>
</template>

<script>
import { mapGetters } from "vuex"
import BaseInput from "@/components/BaseInput"
import BaseButton from "@/components/BaseButton"
import Spinner from "@/components/Spinner"
import { PROFILE } from "@/store/types"
export default {
  name: "InfoForm",
  components: {
    BaseInput,
    BaseButton,
    Spinner
  },
  data: () => ({
    form: {
      name: "",
      email: ""
    },
    loading: false
  }),
  computed: {
    ...mapGetters({
      profileInfo: PROFILE.GETTERS.INFO
    }),
    isValid() {
      const formIsUpdated =
        this.profileInfo.name !== this.form.name ||
        this.profileInfo.email !== this.form.email

      // eslint-disable-next-line no-useless-escape
      const emailIsValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        this.form.email
      )

      return emailIsValid && this.form.name.trim() && formIsUpdated
    }
  },
  watch: {
    profileInfo: {
      immediate: true,
      handler(v) {
        this.form = { ...v }
      }
    }
  },
  methods: {
    async save() {
      if (this.isValid) {
        this.loading = true
        await this.$store.dispatch(PROFILE.ACTIONS.SAVE_INFO, this.form)
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.info-form {
  padding-top: 30px;
  position: relative;
}
.base-button {
  width: 120px;
}
.actions {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}
</style>
