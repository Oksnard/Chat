<template>
  <div class="avatar">
    <div v-if="image" class="avatar-image" :style="avatarImage"></div>
    <!-- <div v-else class="avatar-color" :style="avatarColor">{{ initials }}</div> -->
    <div v-if="noRead" class="no-read" />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String
    },
    fullName: {
      type: String
    },
    color: {
      type: String
    },
    noRead: {
      type: Boolean
    }
  },
  computed: {
    initials() {
      return this.fullName
        .split(" ")
        .map((n) => n[0])
        .join(" ")
    },
    avatarImage() {
      return `background-image:url('${this.image}');`
    },
    avatarColor() {
      return `background-color:${this.color};`
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar {
  height: 100%;
  width: 100%;
  position: relative;
}

.no-read {
  border-radius: 50%;
  height: 10px;
  width: 10px;
  border: solid 2px #ffffff;
  position: absolute;
  right: 0;
  bottom: 0;
  background: #00aa8d;
}

.avatar-image {
  border-radius: 50%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.1);
}

.avatar-color {
  border-radius: 50%;
  color: #ffffff;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
