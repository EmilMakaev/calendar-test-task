<template>
  <div>
    <router-link to="/">Back</router-link>
    <h3>Celebrations of the selected date: {{reverseDate}}</h3>
    <ul v-if="celebrations">
      <li
        v-for="(celebration, index) in celebrations.celebrations"
        :key="celebration.title"
      >
        <router-link 
          :to="{name: 'datepageIndex',
          params: {element: celebration, index }}"
        >
          {{celebration.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      celebrations: 'getCelebrations'
    }),
    reverseDate() {
      return (this.celebrations.date || '').split("-").reverse().join("-");
    }
  }
}
</script>

<style>
ul {
  padding-inline-start: 0;
}

li {
  list-style-type: none;
  margin-top: .5rem; 
}
</style>