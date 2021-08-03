<template>
  <main class="home">
    <Search v-if="userId" msg="Search" @submit="onSearch" />
    <Login v-else msg="Sign in" @login="onLogin" />
    <section v-if="userId && cocktailList">
      <SearchList :cocktail-list="cocktailList" />
    </section>
  </main>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

import authService from '@/service/auth_service'
import cocktail from '@/service/cocktail_server'

export default defineComponent({
  name: 'Home',
  components: {
    Login: () => import('@/components/Login.vue'),
    Search: () => import('@/components/Search.vue'),
    SearchList: () => import('@/components/SearchList.vue')
  },
  setup() {
    const userId = ref(null && localStorage.getItem('userId'))
    const cocktailList = ref(JSON.parse(localStorage.getItem('cocktailList')))

    return {
      userId,
      cocktailList,
      saveUserId(userId) {
        localStorage.setItem('userId', JSON.stringify(userId))
      },
      saveCocktailList(cocktailList) {
        localStorage.setItem('cocktailList', JSON.stringify(cocktailList))
      },
      onLogin(title) {
        authService
          .login(title)
          .then((data) => {
            this.userId = data.user.uid
            this.saveUserId(this.userId)
          })
      },
      onSearch(query) {
        cocktail
          .searchByName(query)
          .then(cocktails => {
            this.cocktailList = cocktails
            this.saveCocktailList(this.cocktailList)
          })
      }
    }
  }
})
</script>

<style lang="scss">
@import "@/scss/mixins";
main {
  width: 100%;
  height: calc(100vh - 120px);
}

.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
}

@include tablet {
  .home {
    position: relative;
    display: flex;
    justify-content: flex-end;
    padding: 2rem 0;
  }
}

@include desktop {
  .home {
    position: relative;
    justify-content: flex-end;
    padding: 2rem 0;
  }
}
</style>
