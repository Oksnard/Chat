import axios from "axios"
import { AUTH } from "@/store/types"
import appConfig from "@/config"
import store from "@/store"
import STATUS from "./statuses"

/*
 * @param ctx - контекст накста
 * @return - axios клиент с настройками и хендлерами
 * */
export default () => {
  const client = axios.create({
    baseURL: appConfig.BACKEND_URL
  })

  const fetchHandler = (response) => response.data

  const bearerHandler = (config) => {
    const token = window.localStorage.getItem(appConfig.AUTH_KEY)
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  }

  const errorCallback = async (error) => {
    if (error.response.status === STATUS.UNAUTHORIZED) {
      await store.dispatch(AUTH.ACTIONS.LOGOUT)
    }
    console.log(`Network error: ${error}`)
  }

  client.interceptors.request.use(bearerHandler, errorCallback)

  client.interceptors.response.use(fetchHandler, errorCallback)

  return client
}
