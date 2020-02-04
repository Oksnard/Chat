import Vue from "vue"
import Vuex from "vuex"
import chatListModule from "./chatList"
import sidebarModule from "./sidebar"
import messagesModule from "./messages"
import chatRequestsModule from "./chatRequests"
import profileModule from "./profile"
import auth from "./auth"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sidebarModule,
    chatListModule,
    messagesModule,
    chatRequestsModule,
    auth,
    profileModule
  }
})
