<template>
  <BaseLayout>
    <ProfileHeader />
    <Container class="profile-content">
      <div class="forms">
        <InfoForm />
        <PasswordForm />
      </div>
      <div class="photo">
        <ProfileImageForm />
        <LogoutButton />
      </div>
    </Container>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/layout/Base"
import Container from "@/components/Container"
import ProfileHeader from "./content/ProfileHeader"
import InfoForm from "./content/InfoForm"
import PasswordForm from "./content/PasswordForm"
import ProfileImageForm from "./content/ProfileImageForm"
import LogoutButton from "@/views/profile/content/LogoutButton"
export default {
  name: "Profile",
  components: {
    BaseLayout,
    ProfileHeader,
    Container,
    InfoForm,
    PasswordForm,
    ProfileImageForm,
    LogoutButton
  }
}
</script>

<style lang="scss" scoped>
.forms {
  flex: 1;
  width: auto;
  max-width: 640px;
  margin: 0 70px;
}
.profile-content {
  width: 100%;
  height: calc(100% + 82px);
  display: flex;
  justify-content: space-between;
}
.photo {
  margin-right: 70px;
}
.profile-content {
  max-width: 1040px;
}
</style>
