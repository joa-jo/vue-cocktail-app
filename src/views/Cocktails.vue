<template>
  <main class="details">
    <div class="title">
      <h1 class="name">{{ name }}</h1>
      <p class="taste">{{ taste }}</p>
    </div>
    <div class="desc">
      <img :src="`${image}`" :alt="`Image of ${name}`" class="image">
      <div class="ingres">
        <h2>Ingredients</h2>
        <ul>
          <li v-for="(ingr, index) in cleanIngreList" :key="index">
            <img :src="`https://www.thecocktaildb.com/images/ingredients/${ingr}.png`" :alt="`Image of ${ingr}`" class="ingrImg">
            <p>{{ ingr }}</p>
          </li>
        </ul>
      </div>
    </div>
    <button class="pickBtn" :aria-label="`Pick ${name}`" @click="onPick">
      {{ btnMsg }}
    </button>
  </main>
</template>

<script>
import cocktail from '@/service/cocktail_server'

export default {
  name: 'Cocktails',
  props: {
    id: {
      type: String,
      default: ''
    },
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
  },
  data() {
    return {
      // userId: {
      //   type: String,
      //   default: localStorage.getItem('userId')
      // },
      details: {},
      btnMsg: 'Pick'
    }
  },
  computed: {
    cleanIngreList() {
      return this.ingredients.filter(item => item != null)
    }

  },
  created() {
    this.userId = localStorage.getItem('userId')
    if (!this.userId) {
      this.$router.push({ name: 'Home' })
    }
    this.onShowDetails(this.id)
  },
  methods: {
    onShowDetails(id) {
      cocktail
        .lookUpDetails(id)
        .then(details => {
          this.details = details
        })
    },
    onPick() {
      this.btnMsg = 'Picked!'
    }
  }
}
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
