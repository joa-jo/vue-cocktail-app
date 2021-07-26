<template>
  <footer>© 2021 joa-jo. All rights reserved.</footer>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Footer'
})
</script>

<style lang="scss">
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  font-size: 0.8rem;
}
</style>
