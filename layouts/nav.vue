<template>
  <div class="container">
    <div class="nav">
      <nav-item />
    </div>
    <nuxt />
  </div>
</template>

<script>
import NavItem from '~/components/NavItem.vue'

export default {
  components: {
    NavItem
  }
}
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 88px;
}
</style>
