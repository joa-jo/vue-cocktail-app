<template>
  <main class="your-picks">
    <h1>Your Picks</h1>
    <ul v-if="userId && cocktailList" class="cocktailList">
      <li v-for="cocktail in cocktails" :key="cocktail.idDrink" class="cocktailItem" @click.prevent="goDetailsPage(cocktail)">
        <img :src="`${cocktail.strDrinkThumb}`" :alt="`${cocktail.strDrink}`">
        <h5>{{ cocktail.strDrink }}</h5>
      </li>
    </ul>
  </main>
</template>

<script>
import cocktailRepo from '@/service/cocktail_repo'

export default {
  name: 'YourPicks',
  data() {
    return {
      userId: {
        type: String,
        default: ''
      },
      cocktails: {
        type: Array,
        default: () => []
      }
    }
  },
  created() {
    // userId 받아와서 data()에 세팅
    this.userId = localStorage.getItem('userId')
    // userId 없으면 로그인 페이지로 이동
    if (!this.userId) {
      this.$router.push({ name: 'Home' })
    }
    // user가 pick한 리스트 불러오기
    this.getPickedList(this.userId, this.onUpdate)
  },
  methods: {
    onUpdate(cocktails) {
      this.cocktails = cocktails
    },
    getPickedList(uid, onUpdate) {
      cocktailRepo.readCocktails(uid, onUpdate)
    },
    goDetailsPage(cocktailItem) {
      this.cocktailObj = cocktailItem
      this.$router.push({ name: 'Cocktails', params: this.cocktailObj })
    }
  }
}
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
