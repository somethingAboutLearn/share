<template>
  <div class="image-item">
    <div class="image">
      <img :src="src" />
    </div>
    <div class="des">{{des}}</div>
  </div>
</template>

<script>
export default {
  name: 'ImageItem',
  props: {
    src: {
      type: String,
      default: ''
    },
    des: {
      type: String,
      default: '这个人有点懒...'
    }
  }
}
</script>

<style lang="scss" scoped>
.image-item {
  .image {
    width: 100%;
    img {
      display: block;
      max-width: 100%;
      margin: auto;
    }
  }
  .des {
    width: 100%;
    margin-top: 20px;
  }
}
</style>
