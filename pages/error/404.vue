<template>
  <div>
    <h1 v-if="error && error.statusCode === 404">页面不存在</h1>
    <h1 v-else>应用发生错误异常</h1>
    <nuxt-link to="/">回到首页</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'error-404',
  layout: 'error',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
