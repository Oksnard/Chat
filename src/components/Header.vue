<template>
  <div class="base-header">
    <Modal
      v-if="showModal"
      title="End Chat"
      @closeChat="closeChat()"
      @closeModal="showModal = false"
    >
      <p slot="body">
        Are you sure you want to end the chat?
      </p>
    </Modal>
    <div class="header">
      <div class="header-burger">
        <Burger />
        <slot />
      </div>
      <router-link to="/profile" class="header-avatar">
        <Tooltip class="settings" position="left">
          <template #tooltip-content>
            <span class="tooltip-text">End Chat</span>
          </template>
          <img
            v-if="$route.params.pk && isActiveChat"
            src="@/assets/icons/settings.svg"
            alt="settings"
            tooltip="End Chat"
            @click.prevent="showModal = true"
          />
        </Tooltip>
        <Avatar
          :image="userInfo.image_url"
          :full-name="userInfo.name"
          color="grey"
        />
      </router-link>
    </div>
    <Divider />
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import Divider from "@/components/Divider"
import Avatar from "@/components/Avatar"
import Burger from "@/components/Menu/Burger.vue"
import Tooltip from "@/components/Tooltip.vue"
import Modal from "@/components/Modal.vue"
import { MESSAGES, PROFILE } from "../store/types"

export default {
  components: { Divider, Avatar, Burger, Tooltip, Modal },
  data: () => ({
    showModal: false
  }),
  computed: {
    ...mapGetters({
      userInfo: PROFILE.GETTERS.INFO,
      chat: MESSAGES.GETTERS.CHAT
    }),
    isActiveChat() {
      return this.chat.status === `active`
    }
  },
  methods: {
    closeChat() {
      this.$socket.send({ chat_close: { chat_pk: this.chat.pk } })
      this.showModal = false
    }
  }
}
</script>

<style lang="scss" scoped>
.base-header {
  background: #ffffff;
  width: 100%;
  transition: width 150ms;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10%;
  padding: 15px 0;
}

.header-avatar {
  height: 50px;
  width: 50px;
  position: relative;
}

.settings {
  position: absolute;
  top: 50%;
  left: -50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 3;
}

.header-burger {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.tooltip-text {
  font-size: 14px;
  font-weight: 600;
  color: #00aa8d;
  border-bottom: 1px solid #00aa8d;
  cursor: pointer;
}

.modal-body p {
  max-width: 155px;
  margin: auto;
}
</style>
