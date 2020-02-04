import { CHAT_LIST } from "@/store/types"
import network from "@/lib/network"

const state = () => ({
  chat_list: []
})

const getters = {
  [CHAT_LIST.GETTERS.GET_CHAT_LIST]: (state) => state.chat_list
}

const mutations = {
  [CHAT_LIST.MUTATIONS.SET_CHAT_LIST]: (state, list) => {
    state.chat_list = list
  },
  [CHAT_LIST.MUTATIONS.ADD_CHAT]: (state, chat) => {
    state.chat_list.unshift(chat)
  },
  [CHAT_LIST.MUTATIONS.UPDATE_CHAT_LIST_COUNTERS]: (state, id) => {
    state.chat_list.forEach((e) => {
      if (e.pk === id) {
        e.unread_amount++
      }
    })
  }
}

const actions = {
  async [CHAT_LIST.ACTIONS.GET_CHAT_LIST]({ commit }) {
    try {
      const { chats } = await network.getModeratorChats()
      commit(CHAT_LIST.MUTATIONS.SET_CHAT_LIST, chats)
    } catch (e) {
      console.log(e)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
