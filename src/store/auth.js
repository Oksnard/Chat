import { AUTH } from "@/store/types"
import config from "@/config"
import router from "@/router"
import network from "@/lib/network"

const state = () => ({
  auth: false,
  token: null
})

const getters = {
  [AUTH.GETTERS.GET_AUTH]: (state) => state.isNavOpen
}
const mutations = {
  [AUTH.MUTATIONS.IS_AUTH]: (state, value) => {
    state.token = value
    if (state.token !== null) {
      state.auth = true
    }
  }
}
const actions = {
  [AUTH.ACTIONS.LOGOUT]: () => {
    localStorage.removeItem(config.AUTH_KEY)
    router.push({ name: `Login` })
  },
  async [AUTH.ACTIONS.LOGIN]({ commit }, { login, password }) {
    try {
      const { session_key } = await network.login({
        phone: login,
        password: password
      })
      commit(AUTH.MUTATIONS.IS_AUTH, true)
      localStorage.setItem(config.AUTH_KEY, session_key)
      router.push({ name: "ChatRequests" })
    } catch (e) {
      console.log(e)
    }
  },
  async [AUTH.ACTIONS.RESTORE_PASSWORD]({ state }, email) {
    console.log(email)
    console.log(state)
    try {
      const { status } = await network.restore({
        email: email
      })
      console.log(status)
      router.push({ path: "/" })
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
