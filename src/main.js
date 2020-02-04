import Vue from "vue"
import Vuex from "vuex"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import Vuelidate from "vuelidate"
import network from "./lib/network"
import socket from "./lib/network/socket"

Vue.prototype.$socket = socket

Vue.prototype.$api = network

Vue.use({ Vuelidate, Vuex })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app")
