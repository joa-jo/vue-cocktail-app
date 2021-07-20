<template>
  <section class="search">
    <!-- Decoration Quote -->
    <Quote />
    <!-- Search Part -->
    <h1>{{ msg }}</h1>
    <form class="searchForm">
      <input type="text" placeholder="Search">
      <button>
        <img src="@/assets/search.png" alt="Search" class="searchBtnImg">
      </button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Search',
  components: {
    Quote: () => import('@/components/Quote.vue')
  },
  props: {
    msg: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/variables";
@import "@/scss/mixins";

// Search
.search {
  width: 100%;
  padding: 0 1.8rem;
  text-align: center;
  h1 {
    display: block;
    margin-bottom: 4rem;
    font-size: 3rem;
  }
}

.searchForm {
  display: flex;
  max-width: 100%;
  input {
    width: 80%;
    flex-grow: 3;
    padding: 0.4rem;
    font-size: 1.2rem;
    border: 2px solid $cocktailDark;
    border-radius: 2px 0 0 2px;
  }
  button {
    width: 20%;
    flex-grow: 1;
    color: #fff;
    background-color: $cocktailDark;
    border: 1px solid $cocktailDark;
    border-radius: 0 2px 2px 0;
    transition: opacity 0.25s;
    &:hover {
      opacity: 0.9;
    }
    .searchBtnImg {
      max-height: 1.2rem;
    }
  }
}

@include tablet {
  .search {
    max-width: 30%;
    margin-right: 3rem;
  }
}

@include desktop {
  .search {
    margin-right: 8rem;
  }
}

</style>
