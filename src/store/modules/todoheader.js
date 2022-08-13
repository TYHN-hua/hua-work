export default { 
    namespaced: true,
    state: {
      message:''
    },
  mutations: {
    setMessage(state,payload) {
        state.message = payload
      }
    },
    actions: {}
  }