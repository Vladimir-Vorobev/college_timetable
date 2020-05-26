export const STORE = {
    store: {
      buttonCount: 0,
      userPhrase: ''
    },
    mutations: {
      INCREMENT_COUNT(state) {
        state.buttonCount++;
      },
      SET_USER_PHRASE(state, value) {
        state.userPhrase = value;
      },
    },
    actions: {
      incrementCount({ commit }) {
        commit('INCREMENT_COUNT');
      },
      changeUserPhrase({ commit }, value) {
        commit('SET_USER_PHRASE', value);
        document.cookie = 'SessionID=' + value
      },
	},
    getters: {
      buttonCount: (state) => state.buttonCount,
      userPhrase: (state) => state.userPhrase,
    },
}