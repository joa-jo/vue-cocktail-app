<template>
  <main class="home">
    <Login msg="Sign in" />
    <!-- <Search msg="Search" /> -->
  </main>
</template>

<script>

export default {
  name: 'Home',
  components: {
    Login: () => import('@/components/Login.vue')
    // Search: () => import('@/components/Search.vue')
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
