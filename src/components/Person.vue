<template>
  <div class="person-container" @click="$emit('click')">
    <div v-if="complited === 'closed'" class="substrate" />
    <div class="person-block px20">
      <div class="person">
        <div class="person-avatar">
          <slot name="person" />
          <div v-if="read === 'active'" class="notice" />
        </div>
        <span class="person-name">{{ name }}</span>
      </div>
      <NoticeCounter
        v-if="complited !== 'closed' && read > 0"
        :notice="`${read}`"
      />
      <img
        v-if="complited === 'closed'"
        src="@/assets/icons/lock.svg"
        alt="lock"
      />
    </div>
  </div>
</template>

<script>
import NoticeCounter from "@/components/NoticeCounter.vue"
export default {
  components: { NoticeCounter },
  props: {
    name: {
      type: String
    },
    read: {
      type: Number
    },
    complited: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.px20 {
  padding: 0 20px;
  box-sizing: border-box;
}

.person-container {
  position: relative;
}

.substrate {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2;
  background: rgba(0, 0, 0, 0.1);
}

.person-block {
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s;
  position: relative;

  .person {
    display: flex;
    align-items: center;

    .person-avatar {
      margin-right: 15px;
      height: 30px;
      width: 30px;
      position: relative;

      .notice {
        position: absolute;
        bottom: -2px;
        right: -3px;
        height: 8px;
        width: 8px;
        border-radius: 50%;
        border: 2px solid #ffffff;
        background: #00aa8d;
      }
    }

    .person-name {
      font-weight: 600;
      color: #ffffff;
    }
  }

  .person-notice {
    height: 24px;
    width: 24px;
    border-radius: 50%;
    background: #ffffff;
    color: #00aa8d;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    background: #008b73;
    cursor: pointer;
  }
}
</style>
