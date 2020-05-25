import createPersistedState from "vuex-persistedstate";
import * as Cookies from "js-cookie";
export const STORE = {
    plugins: [createPersistedState({
        storage: {
          getItem: key => Cookies.get(key),
          setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
          removeItem: key => Cookies.remove(key)
        }
      })],
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