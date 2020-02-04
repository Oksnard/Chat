<template>
  <div>
    <div class="chat-container">
      <div class="flex-container">
        <div>
          <div class="wrap">
            <div class="avatar">
              <Avatar :image="avatar" :full-name="name" />
            </div>
            <div class="message">
              <span class="from">
                {{ from }}
              </span>
              <p class="name">
                {{ name }}
              </p>
            </div>
          </div>
        </div>
        <div class="request-actions">
          <span>22.12.2019</span>
          <div class="actions">
            <BaseButton
              hovered="true"
              type="submit"
              class="base-button"
              @click="doNotAcceptTicket(id)"
            >
              Do Not Accept
            </BaseButton>
            <BaseButton
              hovered="false"
              type="submit"
              class="base-button"
              @click="acceptTicket(id)"
            >
              Accept
            </BaseButton>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar.vue"
import BaseButton from "@/components/BaseButton"
import { CHAT_REQUESTS } from "@/store/types"

export default {
  components: { Avatar, BaseButton },
  props: {
    name: {
      type: String,
      default: ""
    },
    from: {
      type: String,
      default: ""
    },
    avatar: {
      type: String,
      default: ""
    },
    id: {
      type: Number,
      default: null
    }
  },
  methods: {
    acceptTicket(ticket_pk) {
      this.$socket.send({ ticket_accept: { ticket_pk } })
    },
    doNotAcceptTicket(id) {
      let ticket = {
        id: id
      }
      this.$store.commit(CHAT_REQUESTS.MUTATIONS.REMOVE_CHAT_REQUESTS, ticket)
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
  justify-content: space-between;
}

.system {
  position: relative;
  height: 1px;
  margin-bottom: 20px;
  background: #ebebeb;
}

.system p {
  position: absolute;
  top: -14px;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  padding: 10px;
  color: #939393;
}

.wrap {
  display: flex;
}

.wrap .avatar {
  height: 50px;
  width: 50px;
  margin-right: 15px;
}

.wrap .name {
  font-weight: 600;
  color: #000000;
  margin-bottom: 0;
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

.request-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
}

.request-actions span {
  font-size: 12px;
  color: #857e7e;
}

.actions {
  display: flex;
  align-items: center;
  width: 75%;
}

.base-button {
  margin: 0 5px;
}

hr {
  background: #ebebeb;
  border: none;
  height: 2px;
  margin: 15px 0;
}
</style>
