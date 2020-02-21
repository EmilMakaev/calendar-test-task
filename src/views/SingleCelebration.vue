<template>
  <div>
    <router-link to="/datepage">Back</router-link>
    <p>Title: {{element.title}}</p>
    <p>Colour: {{element.colour}}</p>
    <p>Rank: {{element.rank}}</p>
    <p>Rank_num: {{element.rank_num}}</p>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true
    },
    element: {
      type: Object,
      required: true
    }
  }
}
</script>