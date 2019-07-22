<template>
  <div class="detail">
    <div class="router_back" @click="()=>{ $router.back() }">&lt;返回</div>
    <image-item :src="detail && detail.src" :des="detail && detail.des" />
  </div>
</template>

<script>
import ImageItem from '@/components/ImageItem.vue'

export default {
  layout: 'nav',
  components: {
    ImageItem
  },
  async asyncData(context) {
    // 请求接口数据
    // asyncData 方法返回的数据会和 data 方法返回的数据合并返回
    // 拿到当前数据的 id ，发送请求拿数据
    const id = context.route.params.id
    const res = await context.$axios.get(
      `http://172.21.117.128:3001/picture/${id}`
    )
    return { detail: res.data.data.detail }
  }
}
</script>

<style lang="scss" scoped>
.detail {
  padding: 20px 30px;
  .router_back {
    color: #999;
    font-size: 14px;
    margin: 20px 0;
  }
}
</style>
