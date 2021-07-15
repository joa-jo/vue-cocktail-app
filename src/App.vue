<template>
  <div id="app">
    <nav class="nav">
      <ul class="menus">
        <li>
          <router-link to="/">Cocktail Picks</router-link>
        </li>
        <li>
          <router-link to="/your-picks">Your Picks</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@700&family=Ubuntu:wght@400;500&display=swap");
@import "@/scss/variables";
@import "@/scss/reset";
@import "@/scss/mixins";

// Navigation
.nav {
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  height: 60px;
  padding: 0 1rem;
  background-color: #fff;
  font-family: "Heebo", sans-serif;
  font-weight: 700;
  z-index: 20;
  .menus {
    display: flex;
    justify-content: space-between;
    width: 100%;
    li {
      position: relative;
      &:last-of-type {
        .router-link-exact-active {
          &:after {
            width: 90%;
          }
        }
      }
    }
    a {
      display: block;
      padding: 0.8rem;
      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0;
        height: 1.2px;
        background-color: $cocktailDark;
        transition: width 0.25s;
      }
      &:hover::after {
        width: 90%;
      }
    }
  }
}

@include tablet {
  .nav {
    padding: 0 3rem;
    .menus {
      justify-content: flex-end;
    }
  }
}

@include desktop {
  .nav {
    padding: 0 4rem;
    .menus {
      justify-content: flex-end;
    }
  }
}
</style>
