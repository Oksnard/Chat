import config from "@/config"
import Vue from "vue"
import VueRouter from "vue-router"
import Login from "@/views/auth/Login"
import ForgotPassword from "@/views/auth/ForgotPassword"
import Chat from "@/views/Chat"
import ChatRequests from "@/views/ChatRequests"
import Profile from "@/views/profile/Profile"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: ChatRequests,
    name: "ChatRequests",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/profile",
    component: Profile,
    name: "Profile",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/chat/:pk",
    component: Chat,
    name: "Chat",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    component: Login,
    name: "Login"
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
    name: "ForgotPassword"
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem(config.AUTH_KEY)

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next({ name: "Login" })
      return
    }
  }
  next()
})

export default router
