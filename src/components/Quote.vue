<template>
  <div class="quote" :class="{quoteInSearch}" />
</template>

<script>
export default {
  props: {
    quoteInSearch: {
      type: Boolean,
      default: false
    }
    // text: String
  },
  watch: {
    quoteInSearch(newValue, oldValue) {
      // befroe css 를 quoteInSearch로 바꾸는 로직이 들어가면 됩니다.
      // this.quoteInSearch = newValue.
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/mixins";

  .quote {
    &::before {
      content: '';
      display: none;
      position: fixed;
      top: 50%;
      transform: translateY(-52%);
      max-width: 50%;
      font-family: 'Heebo', sans-serif;
      text-align: left;
      font-weight: 700;
      z-index: 30;
    }

    &.quoteInSearch::before {
      content: 'One tequila, two tequila, three tequila, floor';
    }
  }

  @include tablet {
  .quote {
    &::before {
      display: block;
      left: 3rem;
      font-size: 7rem;
      line-height: 6rem;
    }
  }
}

@include desktop {
  .quote {
        &::before {

      left: 4rem;
      font-size: 10rem;
      line-height: 8rem;
  }
      }

}
</style>
