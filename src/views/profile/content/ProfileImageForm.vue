<template>
  <form class="profile-image-form" @submit.prevent="">
    <Spinner v-if="loading" />
    <div class="title">
      Profile photo
    </div>
    <div class="avatar-wrapper">
      <Avatar :image="userInfo.image_url" :full-name="userInfo.name" />
    </div>
    <label for="uploader">
      Upload an Image
    </label>
    <input id="uploader" type="file" accept="image/*" @change="upload" />
    <div v-if="typeError" class="error">
      This is not an image
    </div>
  </form>
</template>

<script>
import { PROFILE } from "@/store/types"
import Avatar from "@/components/Avatar"
import Spinner from "@/components/Spinner"

export default {
  name: "ProfileImageForm",
  components: {
    Avatar,
    Spinner
  },
  data: () => ({
    loading: false,
    typeError: false
  }),
  computed: {
    userInfo() {
      return this.$store.getters[PROFILE.GETTERS.INFO]
    }
  },
  methods: {
    async upload(e) {
      if (!e.target.value) return
      if (/.(jpg|jpeg|png|gif)$/i.test(e.target.value)) {
        this.loading = true
        const [image] = e.target.files
        const data = new FormData()
        data.append(`image`, image)
        await this.$store.dispatch(PROFILE.ACTIONS.UPLOAD_IMAGE, data)
        this.loading = false
      } else {
        this.typeError = true
        setTimeout(() => (this.typeError = false), 2000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-image-form {
  width: 180px;
  margin-top: 30px;
  position: relative;
}
.title {
  font-size: 14px;
  font-weight: 600;
}
.error {
  margin-top: 15px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  border: 2px solid #e53935;
  color: #e53935;
}
.base-button {
  background: #fff;
  color: #00aa8d;
}
.avatar-wrapper {
  width: 180px;
  height: 180px;
  margin-top: 10px;
  margin-bottom: 20px;
}
#uploader {
  display: none;
}
label {
  border: 2px solid #00aa8d;
  border-radius: 22px;
  padding: 14px;
  cursor: pointer;
  color: #00aa8d;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #00aa8d;
    color: #ffffff;
    transition: all 0.3s;
  }
}
</style>
