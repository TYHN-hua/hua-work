export default { 
    namespaced: true,
  state: {
      isSel:'all'
    },
  mutations: {
    setIsSel(state,payload) {
      state.isSel = payload
      }
    },
    actions: {}
  }