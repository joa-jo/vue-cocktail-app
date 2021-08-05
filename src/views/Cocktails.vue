<template>
  <main class="details">
    <div class="title">
      <h1 class="name">{{ details.strDrink }}</h1>
      <p class="taste">{{ details.strTags }}</p>
    </div>
    <div class="desc">
      <img :src="`${details.strDrinkThumb}`" :alt="`Image of ${details.strDrink}`" class="image">
      <div class="ingres">
        <h2>Ingredients</h2>
        <ul>
          <li v-for="(ingr, index) in filteredIngredients" :key="index">
            <img :src="`https://www.thecocktaildb.com/images/ingredients/${ingr}.png`" :alt="`Image of ${ingr}`" class="ingrImg">
            <p>{{ ingr }}</p>
          </li>
        </ul>
      </div>
    </div>
    <button class="pickBtn" :aria-label="`Pick ${details.strDrink}`" @click="onPick">
      {{ btnMsg }}
    </button>
  </main>
</template>

<script>
import { defineComponent, ref, computed } from '@vue/composition-api'

import cocktail from '@/service/cocktail_server'
import cocktailRepo from '@/service/cocktail_repo'

export default defineComponent({
  name: 'Cocktails',
  props: {
    id: {
      type: String,
      default: ''
    },
    cocktailObj: {
      type: Object,
      default: () => JSON.parse(localStorage.getItem('cocktailObj'))
    }
  },
  setup(props, { root }) {
    const userId = ref(localStorage.getItem('userId'))
    const details = ref({})
    const btnMsg = ref('Pick')

    const filteredIngredients = computed(() => {
      const ingredients = [
        details.value.strIngredient1,
        details.value.strIngredient2,
        details.value.strIngredient3,
        details.value.strIngredient4,
        details.value.strIngredient5,
        details.value.strIngredient6,
        details.value.strIngredient7,
        details.value.strIngredient8,
        details.value.strIngredient9
      ]
      return ingredients.filter(item => item != null && item !== '')
    })

    function onPick() {
      btnMsg.value = 'Picked!'
      cocktailRepo.saveCocktail(userId.value, details.value)
    }

    function checkLogInStatus() {
      if (!userId.value) {
        root.$router.push({ name: 'Home' })
      }
    }

    function onShowDetails(id) {
      cocktail
        .lookUpDetails(id)
        .then(data => {
          details.value = data[0]
        })
    }

    onShowDetails(props.id)
    checkLogInStatus()

    return {
      details,
      btnMsg,
      filteredIngredients,
      onPick
    }
  }
})
</script>

<style lang="scss" scoped>
@import "@/scss/variables";
@import "@/scss/mixins";

.details {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  padding: 0 1.8rem;
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  text-align: center;
  .name {
    display: block;
    margin-bottom: 1rem;
    font-size: 3rem;
    &::after {
      content: '';
      display: block;
      width: 120%;
      height: 2px;
      margin-top: 1rem;
      background-color: $cocktailDark;
      transform: translateX(-8%);
    }
  }
  .taste {
    font-size: 1.2rem;
  }
}

.desc {
  .image {
    width: 100%;
    margin-bottom: 4rem;
  }
}

.ingres {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 3rem;
  h2 {
    margin-bottom: 2rem;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    font-size: 1rem;
    li {
      width: 50%;
      padding: 0 0.8rem;
      margin-bottom: 1rem;
      text-align: center;
      .ingrImg {
        width: 100%;
        margin-bottom: 0.4rem;
      }
    }
  }
}

.pickBtn{
  position: fixed;
  bottom: 1.2rem;
  right: 1.2rem;
  width: 5rem;
  height: 5rem;
  background-color: $cocktailDark;
  color: #fff;
  border-radius: 50%;
  transition: all 250ms;
  &:hover {
    opacity: 0.8;
  }
}

@include tablet {
  .details{
    padding: 0 2.7rem;
    .name {
      font-size: 5rem;
    }
  }

  .ingres {
    h2 {
      font-size: 2rem;
    }
    ul {
      font-size: 1.2rem;
    }
  }

  .pickBtn{
    bottom: 2rem;
    right: 2rem;
    width: 6rem;
    height: 6rem;
  }
}

@include desktop {
  .title {
    margin: 4rem 0;
  }

  .desc {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .image {
      width: 50%;
      margin-right: 4rem;
      margin-bottom: 0;
    }
  }

  .ingres {
    margin-bottom: 0;
    ul {
      li {
        width: 25%;
      }
    }
  }
}
</style>
