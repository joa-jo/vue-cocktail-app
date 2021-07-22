<template>
  <ul class="cocktailList">
    <li v-for="cocktailItem in cocktailList" :key="cocktailItem.idDrink" class="cocktailItem" @click.prevent="goDetailsPage(cocktailItem)">
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
      default: () => JSON.parse(localStorage.getItem('cocktailList'))
    }
  },
  data() {
    return {
      cocktailObj: {}
    }
  },
  methods: {
    saveCocktail(cocktailObj) {
      localStorage.setItem('cocktailObj', JSON.stringify(cocktailObj))
    },
    goDetailsPage(cocktailItem) {
      console.log(cocktailItem)
      this.cocktailObj = {
        id: cocktailItem.idDrink,
        name: cocktailItem.strDrink,
        taste: cocktailItem.strTags,
        image: cocktailItem.strDrinkThumb,
        ingredients: [
          cocktailItem.strIngredient1,
          cocktailItem.strIngredient2,
          cocktailItem.strIngredient3,
          cocktailItem.strIngredient4,
          cocktailItem.strIngredient5,
          cocktailItem.strIngredient6,
          cocktailItem.strIngredient7,
          cocktailItem.strIngredient8,
          cocktailItem.strIngredient9
        ]
      }
      this.saveCocktail(this.cocktailObj)
      this.$router.push({ name: 'Details', params: this.cocktailObj })
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/mixins";

.cocktailList {
  width: 100%;
  padding: 0 1.8rem;
  text-align: center;
  transform: translateY(-2rem);
}

.cocktailItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  cursor: pointer;
  img {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
  }
  h5 {
  text-align: center;
  font-size: 1.2rem;
  cursor: pointer;
  }
}

@include tablet {
  .cocktailList {
    display: flex;
    flex-wrap: wrap;
  }
  .cocktailItem {
    width: 50%;
    padding: 0 0.9rem;
  }
}

@include desktop {
  .cocktailList {
    margin-top: 30px;
  }
  .cocktailItem {
    width: 25%;
  }
}
</style>
