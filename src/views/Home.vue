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
