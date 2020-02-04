<template>
  <div class="chat-form">
    <BaseTextarea
      v-model="message"
      placeholder="Message"
      type="text"
      @keydown.enter.native="sendMessage()"
    />
    <FormImages ref="uploader" @files-changed="files = $event" />
  </div>
</template>

<script>
import FormImages from "@/components/Chat/FormImages"
import BaseTextarea from "@/components/BaseTextarea"
import { MESSAGES } from "@/store/types"

export default {
  components: { BaseTextarea, FormImages },
  data: () => ({
    message: "",
    files: []
  }),
  computed: {
    chatId() {
      return this.$store.getters[MESSAGES.GETTERS.CHAT].pk
    }
  },
  methods: {
    async sendMessage() {
      this.$store.dispatch(MESSAGES.ACTIONS.SEND_MESSAGE, {
        chatId: this.chatId,
        text: this.message,
        files: this.files
      })
      this.message = ""
      this.$refs.uploader.clear()
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-form {
  background: #ffffff;
  position: relative;
  border: 2px solid #00aa8d;
  border-radius: 5px;
  padding-bottom: 2rem;
}
</style>
