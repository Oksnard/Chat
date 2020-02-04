module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ["prettier", "vue"],
  extends: ["plugin:vue/recommended", "@vue/prettier"],
  rules: {
    eqeqeq: "error",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
}
