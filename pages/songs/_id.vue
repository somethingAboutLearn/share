<template>
  <div class="detail">
    <div class="router_back" @click="()=>{ $router.back() }">&lt;返回</div>
    <song-item
      :src="current && current.pic"
      :song="current && current.song"
      :singer="current && current.singer"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SongItem from '@/components/SongItem.vue'

export default {
  layout: 'nav',
  components: {
    SongItem
  },
  computed: {
    ...mapState('songs', ['current'])
  },
  async fetch({ store, params, route }) {
    const id = route.params.id
    await store.dispatch({
      type: 'songs/getOne',
      id
    })
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
