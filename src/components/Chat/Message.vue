<template>
  <div class="chat-container">
    <template v-if="showDateDivider(time)">
      <DateDivider :time="time.slice(0, 10)" />
    </template>
    <div class="flex-container">
      <div>
        <div class="wrap">
          <div class="avatar">
            <Avatar :image="avatar" :full-name="name" />
          </div>
          <div class="message">
            <span class="name">
              {{ name }}
            </span>
            <span class="time">
              {{ time.slice(11, 16) }}
            </span>
            <img
              v-if="!read && !mine"
              class="check_message"
              src="@/assets/check_message.svg"
              alt="check_message"
            />
            <p class="text">
              {{ text }}
            </p>
          </div>
        </div>
      </div>
      <div />
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar"
import DateDivider from "@/components/DateDivider"
import { MESSAGES } from "@/store/types"

export default {
  components: { Avatar, DateDivider },
  props: {
    name: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    time: {
      type: String,
      default: ""
    },
    avatar: {
      type: String,
      default: ""
    },
    read: {
      type: Boolean,
      default: false
    },
    mine: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    messages() {
      return this.$store.getters[MESSAGES.GETTERS.MESSAGES]
    }
  },
  methods: {
    showDateDivider(time) {
      let messageIdx = this.messages.findIndex(
        (e) => e.creation_datetime === time
      )
      if (messageIdx > 0) {
        let message = this.messages.find((e, idx) => idx === messageIdx - 1)
        if (message.creation_datetime.slice(0, 10) === this.time.slice(0, 10)) {
          return false
        } else {
          return true
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-container {
  margin: 0 10%;
}
.flex-container {
  display: flex;
  justify-content: flex-start;
}

.wrap {
  display: flex;
}

.wrap .avatar {
  height: 44px;
  width: 44px;
  margin-right: 15px;
}
.wrap .message {
  margin-bottom: 30px;
}
.wrap .name {
  font-weight: bold;
  color: #000000;
}

.wrap .time {
  margin-left: 10px;
  font-size: 12px;
  color: #939393;
}

.wrap .check_message {
  margin-left: 10px;
}

.wrap .text {
  margin: 10px 0 0 0;
}
</style>
