<template>
  <ul class="cocktailList">
    <li v-for="cocktailItem in cocktailList" :key="cocktailItem.idDrink" class="cocktailItem" @click.prevent="goDetailsPage(cocktailItem)">
      <img :src="`${cocktailItem.strDrinkThumb}`" :alt="`Image of ${cocktailItem.strDrink}`">
      <h5>{{ cocktailItem.strDrink }}</h5>
    </li>
  </ul>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'SearchList',
  props: {
    cocktailList: {
      type: Array,
      default: () => JSON.parse(localStorage.getItem('cocktailList'))
    }
  },
  setup(props, { root }) {
    const cocktailObj = ref({})

    function saveCocktail(cocktailObj) {
      localStorage.setItem('cocktailObj', JSON.stringify(cocktailObj))
    }

    function goDetailsPage(cocktailItem) {
      cocktailObj.value = {
        id: cocktailItem.idDrink
      }
      saveCocktail(cocktailObj.value)
      root.$router.push({ name: 'Cocktails', params: cocktailObj.value })
    }

    return {
      goDetailsPage
    }
  }
})
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
