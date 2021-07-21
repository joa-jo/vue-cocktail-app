<template>
  <ul class="cocktailList">
    <li v-for="cocktailItem in cocktailList" :key="cocktailItem.idDrink" class="cocktailItem">
      <img :src="`${cocktailItem.strDrinkThumb}`" :alt="`Image of ${cocktailItem.strDrink}`">
      <h5>{{ cocktailItem.strDrink }}</h5>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SearchList',
  props: {
    cocktailList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">

</style>
