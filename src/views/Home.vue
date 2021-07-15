<template>
  <main class="home">
    <Login msg="Sign in" />
  </main>
</template>

<script>
import Login from '@/components/Login.vue';

export default {
  name: 'Home',
  components: {
    Login,
  },
};
</script>

<style lang="scss">
@import '@/scss/mixins';
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
