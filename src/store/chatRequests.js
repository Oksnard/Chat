import { CHAT_REQUESTS } from "@/store/types"

const state = () => ({
  chat_requests: []
})

const actions = {
  [CHAT_REQUESTS.ACTIONS.GET_CHAT_REQUESTS]: ({ commit }, payload) => {
    commit(CHAT_REQUESTS.MUTATIONS.SET_CHAT_REQUESTS, payload)
  }
}
const mutations = {
  [CHAT_REQUESTS.MUTATIONS.SET_CHAT_REQUESTS]: (state, value) => {
    state.chat_requests.unshift(value)
  },
  [CHAT_REQUESTS.MUTATIONS.REMOVE_CHAT_REQUESTS]: (state, value) => {
    let requestIdx = state.chat_requests.find((e) => e.id === value.id)
    state.chat_requests.splice(requestIdx, 1)
  }
}

const getters = {
  [CHAT_REQUESTS.GETTERS.GET_CHAT_REQUESTS]: (state) => state.chat_requests
}

export default {
  state,
  getters,
  mutations,
  actions
}
