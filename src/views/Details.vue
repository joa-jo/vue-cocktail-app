<template>
  <main class="details">
    <h1 class="name">{{ name }}</h1>
    <p class="taste">{{ taste }}</p>
    <img :src="`${image}`" :alt="`Image of ${name}`" class="image">
    <div class="ingres">
      <h2>Ingredients</h2>
      <ul class="ingredients">
        <li v-for="(ingr, index) in ingredients" :key="index">
          {{ ingr }}
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Details',
  props: {
    name: {
      type: String,
      default: JSON.parse(localStorage.getItem('cocktailObj')).name
    },
    taste: {
      type: String,
      default: JSON.parse(localStorage.getItem('cocktailObj')).taste
    },
    image: {
      type: String,
      default: JSON.parse(localStorage.getItem('cocktailObj')).image
    },
    ingredients: {
      type: Array,
      default: () => JSON.parse(localStorage.getItem('cocktailObj')).ingredients
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
