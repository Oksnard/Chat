import { PROFILE } from "@/store/types"
import network from "@/lib/network"
import config from "@/config"

const state = () => ({
  info: {}
})

const getters = {
  [PROFILE.GETTERS.INFO]: (state) => state.info
}

const mutations = {
  [PROFILE.MUTATIONS.SET_INFO]: (state, userInfo) => (state.info = userInfo)
}

const actions = {
  async [PROFILE.ACTIONS.LOAD_INFO]({ commit }) {
    try {
      const { moderator } = await network.loadProfileInfo()
      commit(PROFILE.MUTATIONS.SET_INFO, moderator)
    } catch (e) {
      console.log(e)
    }
  },
  async [PROFILE.ACTIONS.SAVE_INFO]({ commit, getters }, data) {
    try {
      const { moderator } = await network.saveProfileInfo({
        ...getters[PROFILE.GETTERS.INFO],
        ...data
      })
      commit(PROFILE.MUTATIONS.SET_INFO, moderator)
    } catch (e) {
      console.log(e)
    }
  },
  async [PROFILE.ACTIONS.CHANGE_PASSWORD](
    { dispatch },
    { password_old, password_new }
  ) {
    try {
      const { session_key } = await network.changePassword({
        password_old,
        password_new
      })
      localStorage.setItem(config.AUTH_KEY, session_key)
      await dispatch(PROFILE.ACTIONS.LOAD_INFO)
    } catch (e) {
      console.log(e)
    }
  },
  async [PROFILE.ACTIONS.UPLOAD_IMAGE]({ dispatch }, data) {
    try {
      await network.chaneProfileImage(data)
      await dispatch(PROFILE.ACTIONS.LOAD_INFO)
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
