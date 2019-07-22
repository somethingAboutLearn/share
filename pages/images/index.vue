<template>
  <div>
    <images-list-item :list="list" />
  </div>
</template>

<script>
import ImagesListItem from '@/components/ImagesListItem.vue'

export default {
  layout: 'nav',
  components: {
    ImagesListItem
  },
  async asyncData(context) {
    // 请求接口数据，通过父组件传子组件 props 传递数据
    // asyncData 方法返回的数据会和 data 方法返回的数据合并返回
    const res = await context.$axios.get('http://172.21.117.128:3001/picture')
    return { list: res.data.data.list }
  }
}
</script>
