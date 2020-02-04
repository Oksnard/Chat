<template>
  <BaseLayout>
    <ChatHeader />
    <div class="c-wrap">
      <div
        ref="block"
        class="c-chat"
        :style="`max-height:calc(100% - ${chatHeight}px)`"
      >
        <Message
          v-for="message in messages"
          :key="message.id"
          :name="chat.owner.name"
          :text="message.text"
          :time="message.creation_datetime"
          :avatar="chat.owner.image_url"
          :read="message.is_read"
          :mine="message.is_mine"
        />
      </div>
      <div v-if="chat.status === 'active'" class="c-form">
        <ChatForm />
      </div>
      <div v-else class="chat-is-closed">
        <span>Chat is closed <img src="@/assets/icons/lock-grey.svg"/></span>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import { mapGetters } from "vuex"
import BaseLayout from "@/layout/Base"
import Message from "@/components/Chat/Message"
import ChatForm from "@/components/Chat/ChatForm"
import ChatHeader from "@/components/ChatHeader"
import { MESSAGES } from "@/store/types"

export default {
  components: { BaseLayout, Message, ChatForm, ChatHeader },
  watch: {
    $route() {
      this.loadChatPage()
    },
    messages() {
      this.$nextTick(() => {
        this.$refs.block.scrollTop = this.$refs.block.scrollHeight
      })
    }
  },
  created() {
    this.loadChatPage()
  },
  computed: {
    ...mapGetters({
      messages: MESSAGES.GETTERS.MESSAGES,
      chat: MESSAGES.GETTERS.CHAT
    }),
    chatHeight() {
      return this.isActiveChat === "active" ? 210 : 117
    }
  },
  methods: {
    loadChatPage() {
      this.$store.dispatch(
        MESSAGES.ACTIONS.LOAD_CHAT_PAGE,
        this.$route.params.pk
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.c-wrap {
  height: calc(100% - 82px);
  position: relative;
  overflow: hidden;
}

.c-form {
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  padding: 1rem 1rem 0 1rem;
}

.c-chat {
  width: calc(100% + 20px);
  overflow: auto;
  padding-top: 30px;
}
.chat-is-closed {
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  height: 40px;
  border-radius: 8px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10%;
}

.chat-is-closed span {
  font-family: AvenirNext;
  font-size: 12px;
  color: #727272;
  display: flex;
  align-items: center;
}
.chat-is-closed span img {
  margin-left: 10px;
}

// MEDIA QUERIES //

@media (max-width: 398px) {
  .c-chat {
    max-height: calc(100% - 210px) !important;
  }
}
</style>
