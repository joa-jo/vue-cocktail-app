<template>
  <section class="login">
    <h1>{{ msg }}</h1>
    <!-- Login Btns -->
    <ul>
      <li v-for="(btn, index) in btns" v-bind:key="index">
        <button v-bind:title="`Login with ${btn.title}`">
          {{ btn.title }}
        </button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Login',
  props: {
    msg: String,
  },
  data() {
    return {
      btns: [{ title: 'Google' }, { title: 'Facebook' }, { title: 'Github' }],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
