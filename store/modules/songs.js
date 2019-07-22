const state = {
  list: [],
  current: {}
}
const getters = {

}

const actions = {
  // 获取列表
  async getList({ commit }) {
    // 请求接口数据，通过 vuex 数据状态管理存储和获取数据
    const res = await this.$axios.get('http://172.21.117.128:3001/song')
    commit('setValue', { key: 'list', value: res.data.data.list })
  },
  // 获取详情
  async getOne({ commit }, payload) {
    // 请求接口数据，通过 vuex 数据状态管理存储和获取数据
    const id = payload.id
    const res = await this.$axios.get(`http://172.21.117.128:3001/song/${id}`)
    commit('setValue', { key: 'current', value: res.data.data.detail })
  }
}

const mutations = {
  setValue(state, { key, value } = {}) {
    state[key] = value
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
