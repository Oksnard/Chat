<template>
  <div class="system">
    <p class="text-center">
      {{ date }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    time: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
  }),
  computed: {
    date() {
      let year = this.time.slice(0, 4)
      let month = +this.time.slice(6, 7)
      let day = this.time.slice(8, 10)
      let correctMonth = this.months.find((e, idx) => idx === month)
      return `${day} ${correctMonth} ${year}`
    }
  }
}
</script>

<style lang="postcss">
.system {
  position: relative;
  height: 1px;
  margin-bottom: 20px;
  background: #ebebeb;
}

.system p {
  position: absolute;
  top: -14px;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  padding: 10px;
  color: #939393;
}
</style>
