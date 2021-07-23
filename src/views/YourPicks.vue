<template>
  <main class="your-picks">
    <h1>Your Picks</h1>
    <ul class="">
      <li>
        <img src="" alt="">
        <h5>cocktail name</h5>
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
      console.log(this.cocktails)
    },
    getPickedList(uid, onUpdate) {
      cocktailRepo.readCocktails(uid, onUpdate)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
