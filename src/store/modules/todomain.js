export default { 
    namespaced: true,
  state: {
    list: [],
    },
  mutations: {
    delList(state,payload) {
      state.list.splice(payload,1)
    },
    clearIsDone(state,) {
      state.list = state.list.filter(item => item.isDone != true)
    }
    },
    actions: {}
  }