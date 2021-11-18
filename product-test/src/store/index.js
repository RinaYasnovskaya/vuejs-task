import {createStore} from 'vuex';
import {getSortedData} from './getSortedData';

export default createStore({
  state: () => ({
    sessions: [],
    activeCard: '0'
  }),
  getters: {
    SESSIONS: state => state.sessions,
    ACTIVE_CARD: state => state.activeCard,
  },
  mutations: {
    setSessions: (state, payload) => state.sessions = payload,
    setActiveCard: (state, payload) => state.activeCard = payload,

    setSaveSession: (state, payload) => {
      const session = state.sessions.findIndex(item => item.sessionId === payload);
      state.sessions[session].save = true;
    },

    deleteProduct: (state, payload) => {
      const session = state.sessions.find(el => el.sessionId = payload.id);
      const productInd = session.products.findIndex(product => product.name == payload.product.name);
      session.products.splice(productInd, 1);
    },
    changeProductCount: (state, payload) => {
      console.log(payload);
    },
    addProduct: (state, payload) => {
      const session = state.sessions.find(el => el.sessionId = payload.id);
      session.products.push(payload.product);
    },
  },
  actions: {
    getSessions: (context) => {
      const sortedData = getSortedData();
      context.commit('setSessions', sortedData);
    },
  },
});