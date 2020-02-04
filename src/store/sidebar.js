import { SIDEBAR_OPEN } from "@/store/types"

const state = () => ({
  isNavOpen: true
})
const actions = {}
const mutations = {
  [SIDEBAR_OPEN.MUTATIONS.TOGGLE_NAV]: (state) => {
    state.isNavOpen = !state.isNavOpen
  }
}
const getters = {
  [SIDEBAR_OPEN.GETTERS.GET_IS_NAV_OPEN]: (state) => state.isNavOpen
}

export default {
  state,
  getters,
  mutations,
  actions
}
