<template>
  <div class="list-item" @click="handleRouter">
    <songs-list-ceil-item
      v-for="(item) in list"
      :key="item && item.id"
      :src="item && item.pic"
      :song="item && item.song"
      :singer="item && item.singer"
      :data-name="item && item.id"
    />
  </div>
</template>

<script>
import SongsListCeilItem from '@/components/SongsListCeilItem.vue'

export default {
  name: 'SongsListItem',
  components: {
    SongsListCeilItem
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleRouter(e) {
      const path = e.path
      let name = ''
      if (this.typeOf(path) === 'array') {
        path.forEach((v) => {
          if (v.dataset && v.dataset.name !== undefined) {
            name = v.dataset.name
          }
        })
      }
      if (name === undefined) return alert('跳转失败')
      this.$router.push({
        path: `/songs/${name}`
      })
    },
    typeOf(param) {
      return Object.prototype.toString
        .call(param)
        .slice(8, -1)
        .toLocaleLowerCase()
    }
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  grid-auto-flow: dense;
}
</style>
