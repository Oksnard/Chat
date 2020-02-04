<template>
  <div class="form-images">
    <div>
      <label for="uploader">
        <img src="@/assets/photo-camera.svg" />
      </label>
      <input
        ref="uploader"
        id="uploader"
        type="file"
        multiple
        accept="image/*"
        @change="imagesSelected"
      />
    </div>
    <div class="images">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="image"
        :style="{ backgroundImage: `url('${image.url}')` }"
      >
        <img
          src="~@/assets/close.svg"
          class="close"
          @click="deleteImage(index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "formImages",
  data: () => ({
    files: [],
    images: []
  }),
  watch: {
    files(files) {
      this.$emit(`files-changed`, files)
    }
  },
  methods: {
    clear() {
      this.files = []
      this.images = []
    },
    deleteImage(index) {
      this.files.splice(index, 1)
      this.images.splice(index, 1)
    },
    imagesSelected() {
      this.files = [...this.files, ...Array.from(this.$refs.uploader.files)]
      this.$refs.uploader.value = null
      this.drawImages()
    },
    drawImages() {
      let images = this.files
      if (!images.length) {
        this.images = []
        return
      }
      this.images = []

      images.map((image) => {
        const reader = new FileReader()
        reader.onload = () => {
          this.images.push({
            url: String(reader.result)
          })
        }
        reader.readAsDataURL(image)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.form-images {
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
}
label {
  margin-bottom: 10px;
}
.images {
  display: flex;
}
.image {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  background-position: center;
  background-size: cover;
  border-radius: 5px;
  position: relative;
}
.close {
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
}
#uploader {
  display: none;
}
</style>
