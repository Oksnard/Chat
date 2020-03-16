export const PROFILE = {
  GETTERS: {
    INFO: `PROFILE/INFO`
  },
  MUTATIONS: {
    SET_INFO: `PROFILE/SET_INFO`
  },
  ACTIONS: {
    LOAD_INFO: `PROFILE/LOAD_INFO`,
    SAVE_INFO: `PROFILE/SAVE_INFO`,
    CHANGE_PASSWORD: `PROFILE/CHANGE_PASSWORD`,
    UPLOAD_IMAGE: `PROFILE/UPLOAD_IMAGE`
  }
}

export const AUTH = {
  GETTERS: {
    GET_AUTH: `AUTH/GET_AUTH`
  },
  MUTATIONS: {
    IS_AUTH: `AUTH/IS_AUTH`
  },
  ACTIONS: {
    LOGOUT: `AUTH/LOGOUT`,
    LOGIN: `AUTH/LOGIN`,
    RESTORE_PASSWORD: `AUTH/RESTORE_PASSWORD`
  }
}

export const SIDEBAR_OPEN = {
  GETTERS: {
    GET_IS_NAV_OPEN: `SIDEBAR_OPEN/GET_IS_NAV_OPEN`
  },
  MUTATIONS: {
    TOGGLE_NAV: `SIDEBAR_OPEN/TOGGLE_NAV`
  },
  ACTIONS: {}
}

export const CHAT_LIST = {
  GETTERS: {
    GET_CHAT_LIST: `CHAT_LIST/GET_CHAT_LIST`
  },
  MUTATIONS: {
    SET_CHAT_LIST: `CHAT_LIST/SET_CHAT_LIST`,
    ADD_CHAT: `CHAT_LIST/ADD_CHAT`,
    UPDATE_CHAT_LIST_COUNTERS: `CHAT_LIST/UPDATE_CHAT_LIST_COUNTERS`
  },
  ACTIONS: {
    GET_CHAT_LIST: `CHAT_LIST/GET_CHAT_LIST`
  }
}

export const CHAT_REQUESTS = {
  GETTERS: {
    GET_CHAT_REQUESTS: `CHAT_REQUESTS/GET_CHAT_REQUESTS`
  },
  MUTATIONS: {
    SET_CHAT_REQUESTS: `CHAT_REQUESTS/SET_CHAT_REQUESTS`,
    REMOVE_CHAT_REQUESTS: `CHAT_REQUESTS/REMOVE_CHAT_REQUESTS`
  },
  ACTIONS: {}
}

export const MESSAGES = {
  GETTERS: {
    MESSAGES: `MESSAGES/GET_MESSAGES`,
    CHAT: `MESSAGES/CHAT`
  },
  MUTATIONS: {
    SET_MESSAGES: `MESSAGES/SET_MESSAGES`,
    SET_CURRENT_CHAT: `MESSAGES/SET_CURRENT_CHAT`,
    ADD_OWNER_MESSAGE: `MESSAGES/ADD_OWNER_MESSAGE`
  },
  ACTIONS: {
    LOAD_CHAT_PAGE: `MESSAGES/LOAD_CHAT_PAGE`,
    LOAD_CURRENT_CHAT: `MESSAGES/LOAD_CURRENT_CHAT`,
    LOAD_MESSAGES: `MESSAGES/LOAD_MESSAGES`,
    SEND_MESSAGE: `MESSAGES/SEND_MESSAGE`
  }
}