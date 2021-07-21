<template>
  <main>
    <h1>{{ name }}</h1>
    <p>{{ taste }}</p>
    <img :src="`${image}`" :alt="`Image of ${name}`">
    <h2>Ingredients</h2>
    <!-- ingredients list -->
    <ul class="ingredients">
      <li v-for="(ingr, index) in ingredients" :key="index">
        {{ ingr }}
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: 'Details',
  props: {
    name: {
      type: String,
      default: ''
    },
    taste: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    ingredients: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
