<template>
  <main class="details">
    <div class="title">
      <h1 class="name">{{ cocktailObj.name }}</h1>
      <p class="taste">{{ cocktailObj.taste }}</p>
    </div>
    <div class="desc">
      <img :src="`${cocktailObj.image}`" :alt="`Image of ${cocktailObj.name}`" class="image">
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
    <button class="pickBtn" :aria-label="`Pick ${cocktailObj.name}`" @click="onPick">
      {{ btnMsg }}
    </button>
  </main>
</template>

<script>
import cocktail from '@/service/cocktail_server'
import cocktailRepo from '@/service/cocktail_repo'

export default {
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
  data() {
    return {
      userId: {
        type: String,
        default: ''
      },
      details: {},
      btnMsg: 'Pick'
    }
  },
  computed: {
    cleanIngreList() {
      return this.cocktailObj.ingredients.filter(item => item != null && item !== '')
    }
  },
  created() {
    // userId 받아와서 data()에 세팅
    this.userId = localStorage.getItem('userId')
    // userId 없으면 로그인 페이지로 이동
    if (!this.userId) {
      this.$router.push({ name: 'Home' })
    }
    // details api 부르기
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
      cocktailRepo.saveCocktail(this.userId, this.cocktailObj)
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
