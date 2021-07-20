<template>
  <main class="home">
    <Search v-if="userId" msg="Search" @submit="onSearch" />
    <Login v-else msg="Sign in" @login="onLogin" />
    <section v-if="cocktail">
      <SearchList :cocktail="cocktail" />
    </section>
  </main>
</template>

<script>
import authService from '@/service/auth_service'
import cocktail from '@/service/cocktail_server'

export default {
  name: 'Home',
  components: {
    Login: () => import('@/components/Login.vue'),
    Search: () => import('@/components/Search.vue'),
    SearchList: () => import('@/components/SearchList.vue')
  },
  data() {
    return {
      userId: null,
      cocktail: false
    }
  },
  created() {
    // TODO localstrage에서 uid SET로직
  },
  methods: {
    goSearch(userId) {
      this.userId = userId
    },
    onLogin(title) {
      authService
        .login(title)
        .then((data) => {
          this.userId = data.user.uid
        })
    },
    onSearch(query) {
      cocktail
        .searchByName(query)
        .then(cocktails => {
          console.log(cocktails)
          this.cocktail = cocktails
        })
    }
  }
}
</script>

<style lang="scss">
@import "@/scss/mixins";
main {
  width: 100%;
  height: calc(100vh - 120px);
}

.home {
  display: flex;
  justify-content: center;
  align-items: center;
}

@include tablet {
  .home {
    position: relative;
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
