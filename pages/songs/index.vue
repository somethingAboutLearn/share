<template>
  <div>
    <songs-list-item :list="list" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SongsListItem from '@/components/SongsListItem.vue'

export default {
  layout: 'nav',
  components: {
    SongsListItem
  },
  computed: {
    ...mapState('songs', ['list'])
  },
  // 情况一：asyncData() 方法中 dispatch 分发调用 vuex actions 异步请求，更新 vuex state 数据， mapState() 绑定数据，渲染数据与 data() 数据类似
  // import { mapState } from 'vuex'
  // computed: {
  //   ...mapState('songs', ['list'])
  // },
  // asyncData方法会在组件（限于页面组件）每次加载之前被调用。它可以在服务端或路由更新之前被调用。在这个方法被调用的时候，第一个参数被设定为当前页面的上下文对象，你可以利用 asyncData方法来获取数据并返回给当前组件。
  // async asyncData({ store, params }) {
  //   await store.dispatch({
  //     type: 'songs/getList'
  //   })
  // }
  // 情况二：fetch() 方法中 dispatch 分发调用 vuex actions 异步请求，更新 vuex state 数据， mapState() 绑定数据，渲染数据与 data() 数据类似
  // import { mapState } from 'vuex'
  // computed: {
  //   ...mapState('songs', ['list'])
  // },
  // fetch 方法用于在渲染页面前填充应用的状态树（store）数据， 与 asyncData 方法类似，不同的是它不会设置组件的数据。
  async fetch({ store, params }) {
    await store.dispatch({
      type: 'songs/getList'
    })
  }
  // 情况三：created() 方法中 调用 mapActions() 在组件内的 methods 中映射，将分发映射为对应的方法，在组件的生命周期内通过 this 调用映射后的方法实现分发，异步请求，更新 vuex state 数据， mapState() 绑定数据，渲染数据与 data() 数据类似
  // import { mapState, mapActions } from 'vuex'
  // computed: {
  //   ...mapState('songs', ['list'])
  // },
  // async created() {
  //   await this.getList()
  // },
  // methods: {
  //   ...mapActions('songs', ['getList'])
  // }
}
</script>
