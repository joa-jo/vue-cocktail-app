<template>
  <div class="login-quote" :class="{otherText}" />
</template>

<script>
export default {
  props: {
    otherText: {
      type: Boolean,
      default: true
    },
    text: String
  },
  watch: {
    text(newValue, oldValue) {
      // befroe css 를 text로 바꾸느 로직이 들어가면 됩니다.
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-quote {
    &::before {
      content: 'One martini is alright, two is too many, three is not enough';
      display: block;
      position: fixed;
      top: 50%;
      left: 3rem;
      transform: translateY(-52%);
      max-width: 50%;
      font-family: 'Heebo', sans-serif;
      text-align: left;
      font-size: 7rem;
      font-weight: 700;
      line-height: 6rem;
      z-index: 30;
    }

    &.otherText::before {
      content: 'gfdasdf gsfgdfsg';
    }
  }
</style>
