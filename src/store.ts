import Vuex from 'vuex'

export const store = new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    // mutation to update currently authenticated user
    setUser(state, user) {
      state.user = user
    }
  }
})
