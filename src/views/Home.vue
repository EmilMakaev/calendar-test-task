<template>
  <div class="home">
    <h3>Choose a date to know the celebrations:</h3>
    <form @submit.prevent="submit">
      <input
        v-model="selectedDate"
        type="date"
        id="start"
        name="trip-start"
      >
      <button>Choose</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      selectedDate: '',
    }
  },
  methods: {
    submit() {
      const modifiedDate = this.selectedDate.replace(/-/gi, "/");
      this.$store.dispatch('getDate', modifiedDate)
      this.$router.push('/datepage')
    }
  }
}
</script>

<style scoped>
button {
  display: block;
  margin: 0 auto;
  margin-top: .5rem;
}
</style>