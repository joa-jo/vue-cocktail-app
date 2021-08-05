<template>
  <main class="your-picks">
    <h1>Your Picks</h1>
    <ul class="cocktailList">
      <li v-for="cocktail in cocktails" :key="cocktail.idDrink" class="cocktailItem" @click.prevent="goDetailsPage(cocktail)">
        <img :src="`${cocktail.strDrinkThumb}`" :alt="`${cocktail.strDrink}`">
        <h5>{{ cocktail.strDrink }}</h5>
      </li>
    </ul>
  </main>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

import cocktailRepo from '@/service/cocktail_repo'

export default defineComponent({
  name: 'YourPicks',
  setup(props, { root }) {
    const userId = ref(localStorage.getItem('userId'))
    const cocktails = ref([])
    const cocktailObj = ref({})

    function goDetailsPage(cocktailItem) {
      cocktailObj.value = {
        id: cocktailItem.idDrink
      }
      root.$router.push({ name: 'Cocktails', params: cocktailObj.value })
    }

    function checkLogInStatus() {
      if (!userId.value) {
        root.$router.push({ name: 'Home' })
      }
    }

    function getPickedList(uid, onUpdate) {
      cocktailRepo.readCocktails(uid, onUpdate)
    }

    function onUpdate(data) {
      cocktails.value = data
    }

    getPickedList(userId.value, onUpdate)
    checkLogInStatus()

    return {
      cocktails,
      goDetailsPage
    }
  }
})
</script>

<style lang="scss" scoped>
@import "@/scss/mixins";

.your-picks {
  height: fit-content;
  text-align: center;
  h1 {
    margin-bottom: 4rem;
    font-size: 3rem;
  }
}

.cocktailList {
  width: 100%;
  padding: 0 1.8rem;
}

.cocktailItem{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  cursor: pointer;
    img {
      width: 100%;
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
