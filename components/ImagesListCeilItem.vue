<template>
  <div class="list-ceil-item">
    <div class="image">
      <img :src="src" />
    </div>
    <div class="des">{{des}}</div>
  </div>
</template>

<script>
export default {
  name: 'ImagesListCeilItem',
  props: {
    src: {
      type: String,
      default: '/images/emptybox.svg'
    },
    des: {
      type: String,
      default: '这个人很懒，什么都没有留下...'
    }
  }
}
</script>

<style lang="scss" scoped>
.list-ceil-item {
  width: 200px;
  padding-bottom: 20px;
  margin: 0 auto 20px;
  border: 1px solid #f2f4f8;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.03), 2px 2px 2px rgba(0, 0, 0, 0.03);
  font-size: 12px;
  .image {
    width: 100%;
    img {
      display: block;
      max-width: 100%;
      max-height: 200px;
      margin: auto;
    }
  }
  .des {
    width: 100%;
    padding: 0 20px;
    margin-top: 20px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    word-break: break-all;
  }
}
</style>
