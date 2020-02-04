import store from "@/store"
import router from "@/router"
import { CHAT_REQUESTS, CHAT_LIST, MESSAGES } from "@/store/types"
const socket = new WebSocket(
  "ws://207.154.207.71:8003/ws/api/chat/292p4wzi7m1le9udvps4sc7p9wfrorbx/"
)

socket.onopen = () => {
  console.log("[open] Соединение установлено")
  socket.send("Соединение установлено")
}

socket.onmessage = (event) => {
  console.log(event.data)
  let res = JSON.parse(event.data)
  if (res.ticket_notification) {
    let ticket = res.ticket_notification
    store.commit(CHAT_REQUESTS.MUTATIONS.SET_CHAT_REQUESTS, ticket)
  }
  if (res.ticket_finished) {
    if (res.ticket_finished.responses > 0) {
      store.dispatch(CHAT_LIST.ACTIONS.GET_CHAT_LIST)
    }
    store.commit(
      CHAT_REQUESTS.MUTATIONS.REMOVE_CHAT_REQUESTS,
      res.ticket_finished
    )
  }
  if (res.message) {
    store.commit(
      CHAT_LIST.MUTATIONS.UPDATE_CHAT_LIST_COUNTERS,
      res.message.chat
    )
    let chat = store.getters[MESSAGES.GETTERS.CHAT]
    store.dispatch(MESSAGES.ACTIONS.LOAD_MESSAGES, chat.pk)
    if (res.message.is_mine) {
      store.commit(MESSAGES.MUTATIONS.ADD_OWNER_MESSAGE, res.message)
    }
  }
  if (res.chat_closed) {
    router.push("/")
  }
}

socket.onclose = (event) => {
  if (event.wasClean) {
    console.log(`
      [close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}
    `)
  } else {
    console.log("[close] Соединение прервано")
  }
}

socket.onerror = (error) => {
  console.error(`[error] ${error.message}`)
}

export default {
  ...socket,
  send: (data) => socket.send(JSON.stringify(data))
}
