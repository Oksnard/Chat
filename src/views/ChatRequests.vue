<template>
  <BaseLayout>
    <Header>
      <HeaderTitle>Chat Requests</HeaderTitle>
    </Header>
    <div class="c-wrap">
      <div v-if="requests.length !== 0" ref="block" class="c-request">
        <ChatRequest
          v-for="req in requests"
          :id="req.id"
          :key="req.id"
          :from="req.owner.address"
          :name="req.owner.name"
          :avatar="req.owner.image_url"
        />
      </div>
      <div v-else class="not-requests">
        <img src="@/assets/icons/pet.svg" alt="pet" />
        <p>No chat requests at this time</p>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/layout/Base"
import ChatRequest from "@/components/ChatRequest"
import Header from "@/components/Header"
import HeaderTitle from "@/components/HeaderTitle"
import { CHAT_REQUESTS } from "@/store/types"

export default {
  components: { BaseLayout, ChatRequest, Header, HeaderTitle },
  computed: {
    requests() {
      return this.$store.getters[CHAT_REQUESTS.GETTERS.GET_CHAT_REQUESTS]
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
.c-request {
  margin-top: 30px;
}
.not-requests {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;

  p {
    font-size: 14px;
    font-family: ProximaNova;
    color: #929292;
    margin-top: 10px;
  }
}
</style>
