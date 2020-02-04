import { CHAT_LIST, MESSAGES } from "@/store/types"
import network from "@/lib/network"
import router from "@/router"
import socket from "@/lib/network/socket"

const state = () => ({
  messages: [],
  currentChat: {
    owner: {}
  }
})

const getters = {
  [MESSAGES.GETTERS.MESSAGES]: (state) => [...state.messages].reverse(),
  // [MESSAGES.GETTERS.CHAT]: (state) => state.currentChat
  [MESSAGES.GETTERS.CHAT]: (state) => state.currentChat
}

const mutations = {
  [MESSAGES.MUTATIONS.SET_MESSAGES]: (state, messages) => {
    state.messages = messages
  },
  [MESSAGES.MUTATIONS.SET_CURRENT_CHAT]: (state, chat) => {
    state.currentChat = chat
  },
  [MESSAGES.MUTATIONS.ADD_OWNER_MESSAGE]: (state, val) => {
    let owner = state.info
    let message = {
      owner: owner,
      ...val
    }
    state.messages.unshift(message)
  }
}

const actions = {
  async [MESSAGES.ACTIONS.LOAD_CHAT_PAGE]({ dispatch }, chatId) {
    await dispatch(MESSAGES.ACTIONS.LOAD_CURRENT_CHAT, chatId)
    await dispatch(MESSAGES.ACTIONS.LOAD_MESSAGES, chatId)
  },
  // async [MESSAGES.ACTIONS.LOAD_CURRENT_CHAT]({ commit }, chatId) {
  async [MESSAGES.ACTIONS.LOAD_CURRENT_CHAT]({ state, commit, getters }) {
    try {
      // const chat = await network.getChatInfo(chatId)
      // commit(MESSAGES.MUTATIONS.SET_CURRENT_CHAT, chat)
      const id = router.currentRoute.params.pk
      const chat = getters[CHAT_LIST.GETTERS.GET_CHAT_LIST].find(
        (chat) => chat.pk === +id
      )
      const tmpResult = chat ? chat : state.currentChat
      commit(MESSAGES.MUTATIONS.SET_CURRENT_CHAT, tmpResult)
    } catch (e) {
      console.log(e)
    }
  },
  async [MESSAGES.ACTIONS.LOAD_MESSAGES]({ commit }, chatId) {
    try {
      const { messages } = await network.getChatMessages(chatId)
      commit(MESSAGES.MUTATIONS.SET_MESSAGES, messages)
    } catch (e) {
      console.log(e)
    }
  },
  async [MESSAGES.ACTIONS.SEND_MESSAGE](_, { chatId, text, files }) {
    try {
      const message = {
        chat: chatId,
        text,
        uuid: "AAAAA-AAAAA-AAAAA-AAAAA"
      }

      if (files.length) {
        const uploads = await Promise.all(
          files.map((file) => {
            const formData = new FormData()
            formData.append(`image`, file)
            return network.uploadPhotos(formData)
          })
        )
        message.images_ids = uploads.map((upload) => upload.image_pk)
        console.log(message.images_ids)
      }

      socket.send({
        message
      })
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
