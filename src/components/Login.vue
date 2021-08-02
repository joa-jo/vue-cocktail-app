<template>
  <section class="login">
    <!-- Decoration Quote -->
    <Quote />
    <!-- Login Part -->
    <h1>{{ msg }}</h1>
    <ul class="loginBtns">
      <li v-for="(btn, index) in btns" :key="index">
        <button :title="`Login with ${btn.title}`" @click.prevent="$emit('login', btn.title)">
          {{ btn.title }}
        </button>
      </li>
    </ul>
  </section>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'Login',
  components: {
    Quote: () => import('@/components/Quote.vue')
  },
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup() {
    const btns = ref([{ title: 'Google' }, { title: 'Facebook' }, { title: 'Github' }])
    return {
      btns
    }
  }
})
</script>

<style scoped lang="scss">
@import "@/scss/variables";
@import "@/scss/mixins";

// Login Buttons
.login {
  width: 100%;
  padding: 0 1.8rem;
  text-align: center;
  h1 {
    display: block;
    margin-bottom: 4rem;
    font-size: 3rem;
  }
}

.loginBtns {
  li {
    margin-bottom: 0.8rem;
    &:last-of-type {
      margin-bottom: 0;
    }
    button {
      width: 100%;
      padding: 0.4rem 0;
      font-size: 1.2rem;
      border: 2px solid $cocktailDark;
      border-radius: 2px;
      transition: all 0.25s;
      &:hover {
        color: #fff;
        background-color: $cocktailDark;
      }
    }
  }
}

@include tablet {
  .login {
    max-width: 30%;
    margin-right: 3rem;
  }
}

@include desktop {
  .login {
    width: 100%;
    max-width: 30%;
    margin-right: 8rem;
  }
}

</style>
