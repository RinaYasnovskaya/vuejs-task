import {createStore} from 'vuex';
import {getSortedData} from './getSortedData';

export default createStore({
  state: {
    sessions: [],
  },
  getters: {
    SESSIONS: state => {
      return state.sessions
    }
  },
  mutations: {
    set_sessions: (state, payload) => state.sessions = payload,
  },
  actions: {
    getSessions: (context) => {
      const sortedData = getSortedData();
      context.commit('set_sessions', sortedData);
    },
    // this.cards = this.cards.filter(el => el.text != card.text); for delete prodct from arr
  },
});