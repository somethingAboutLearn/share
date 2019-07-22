<template>
  <div class="nav" @click="handleNav">
    <nuxt-link
      v-for="(item) in nav"
      :key="item.name"
      :class="['ceil', {'actived': item.name == current.name}]"
      :to="item.path"
      :data-name="item.name"
    >{{ item.title }}</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'NavItem',
  data() {
    return {
      current: {
        name: 1
      },
      nav: [
        {
          name: 1,
          title: '首页',
          path: '/'
        },
        {
          name: 2,
          title: '图片',
          path: '/images'
        },
        {
          name: 3,
          title: '歌曲',
          path: '/songs'
        }
      ]
    }
  },
  created() {
    const url = this.$route.path
    // 刷新页面后同步导航高亮
    this.current.name =
      this.findValue(url, { list: this.nav, key: 'path', result: 'name' }) ||
      this.current.name
  },
  methods: {
    // 切换导航
    handleNav(e) {
      const name = e.target.dataset.name
      if (name === undefined) return false
      this.current.name = name
    },
    // 匹配当前路由 path 高亮对应导航
    findValue(value, { list, key = 'name', result = 'name' } = {}) {
      let val = null
      list.forEach((v) => {
        if (~value.indexOf(v[key])) val = v[result]
      })
      return val
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #f2f4f8;
  .ceil {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 30px;
    &:hover {
      color: #42b983;
    }
    &.actived {
      background: #42b983;
      color: #fff;
    }
  }
}
</style>
