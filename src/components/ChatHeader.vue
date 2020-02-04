<template>
  <Header>
    <HeaderTitle>Settings</HeaderTitle>
  </Header>
</template>

<script>
import HeaderTitle from "@/components/HeaderTitle"
import Header from "@/components/Header"
export default {
  name: "ProfileHeader",
  components: {
    Header,
    HeaderTitle
  }
}
</script>

<style lang="scss" scoped>
img {
  height: 24px;
  margin-right: 20px;
}
a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
}
</style>
