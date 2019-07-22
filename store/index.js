import Vue from 'vue'
import Vuex from 'vuex'

import songs from './modules/songs'

Vue.use(Vuex)

// // window.fetch() 的 Polyfill
// require('whatwg-fetch')

const store = () => new Vuex.Store({
  modules: {
    songs
  },
  state: {
  },

  mutations: {
  },

  actions: {
    // ...
  }

})

export default store
