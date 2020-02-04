<template>
  <div class="sidebar">
    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar-panel">
        <img src="@/assets/logo-white.svg" alt="logo-white" class="logo" />
        <router-link to="/" class="chat-requests">
          <span>Chat Requests</span>
          <NoticeCounter :notice="`${requestCounter}`" />
        </router-link>
        <p class="subtitle chats-list">
          My Chats
        </p>
        <div>
          <router-link
            class="chat-link"
            v-for="chat in chatList"
            :key="chat.pk"
            :to="{ name: `Chat`, params: { pk: chat.pk } }"
          >
            <Person
              class="person"
              :name="chat.owner.name"
              :read="chat.unread_amount"
              :complited="chat.status"
            >
              <template v-slot:person>
                <Avatar
                  :image="chat.owner.image_url"
                  :full-name="chat.owner.name"
                  :color="chat.color"
                />
              </template>
            </Person>
          </router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex"
import Person from "@/components/Person.vue"
import Avatar from "@/components/Avatar.vue"
import NoticeCounter from "@/components/NoticeCounter.vue"
import { SIDEBAR_OPEN, CHAT_LIST, CHAT_REQUESTS } from "@/store/types"

export default {
  components: { Person, Avatar, NoticeCounter },
  methods: {
    ...mapMutations({
      toggleNav: SIDEBAR_OPEN.MUTATIONS.TOGGLE_NAV
    })
  },
  mounted() {
    this.$store.dispatch(CHAT_LIST.ACTIONS.GET_CHAT_LIST)
  },
  computed: {
    ...mapGetters({
      isPanelOpen: SIDEBAR_OPEN.GETTERS.GET_IS_NAV_OPEN,
      chatList: CHAT_LIST.GETTERS.GET_CHAT_LIST,
      requests: CHAT_REQUESTS.GETTERS.GET_CHAT_REQUESTS
    }),
    requestCounter() {
      return this.requests.length
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-link {
  text-decoration: none;
  color: inherit;
  &.router-link-exact-active .person {
    background: #008b73;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}

.person {
  cursor: pointer;
}

.logo {
  padding: 0 20px;
  box-sizing: border-box;
  margin: 15px 0 46px 0;
}

.sidebar-panel::-webkit-scrollbar {
  width: 0;
}

.sidebar-panel {
  overflow-y: auto;
  background-color: #00aa8d;
  width: 290px;
  position: relative;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;

  .chat-requests {
    cursor: pointer;
    padding: 0 20px;
    height: 46px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #009c82;
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
  }

  .subtitle {
    padding: 0 20px;
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
  }

  .chats-list {
    margin-top: 30px;
    margin-bottom: 20px;
  }
}

// MEDIA QUERIES //

@media (min-width: 768px) {
  .sidebar-panel {
    display: block;
  }
}
</style>
