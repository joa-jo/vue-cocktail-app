<template>
  <main class="home">
    <Search v-if="userId" msg="Search" />
    <Login v-else msg="Sign in" @login="onLogin" />
  </main>
</template>

<script>
import authService from '@/service/auth_service'
import cocktail from '@/service/cocktail_server'

export default {
  name: 'Home',
  components: {
    Login: () => import('@/components/Login.vue'),
    Search: () => import('@/components/Search.vue')
  },
  props: {
    userId: {
      type: String,
      default: ''
    }
  },
  methods: {
    onSearch(query) {
      cocktail
        .searchByName(query)
        .then(cocktails => console.log(cocktails))
    },
    goSearch(userId) {
      this.userId = userId
    },
    onLogin(title) {
      authService
        .login(title)
        .then((data) => this.goSearch(data.user.uid))
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
