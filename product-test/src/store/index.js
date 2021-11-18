import {createStore} from 'vuex';
import {getSortedData} from './getSortedData';

export default createStore({
  state: () => ({
    sessions: [],
    activeCard: '0',
    allIdSessions: [],
  }),

  getters: {
    SESSIONS: state => state.sessions,
    ACTIVE_CARD: state => state.activeCard,
    SESSIONS_ID: state => state.allIdSessions,
  },

  mutations: {
    setSessions: (state, payload) => state.sessions = payload,
    setActiveCard: (state, payload) => state.activeCard = payload,
    setAllSessionsId: (state, payload) => state.allIdSessions = payload,
    setSaveSession: (state, payload) => {
      const session = state.sessions.findIndex(item => item.sessionId === payload);
      state.sessions[session].save = true;
    },

    deleteProduct: (state, payload) => {
      const session = state.sessions.find(session => session.sessionId === payload.id);
      const productInd = session.products.findIndex(product => product.name == payload.product.name);
      session.products.splice(productInd, 1);
    },

    changeProductCount: (state, payload) => {
      const session = state.sessions.find(session => session.sessionId === payload.id);
      const indProduct = session.products.findIndex(product => product.name === payload.product.name);

      session.products.splice(indProduct, 1, payload.product);
    },

    addProduct: (state, payload) => {
      const session = state.sessions.find(session => session.sessionId === payload.id);
      session.products.push(payload.product);
    },

    swapProduct: (state, payload) => {
      const currentSession = state.sessions.find(session => session.sessionId === payload.currentId);
      const nextSession = state.sessions.find(session => session.sessionId === payload.nextId);
      const indInCurrentSession = currentSession.products.findIndex(product => product.name === payload.product.name);

      if (!nextSession.save) {
        currentSession.products.splice(indInCurrentSession, 1);
        nextSession.products.push(payload.product);
      }
    },

    swapAll: (state, payload) => {
      const currentSession = state.sessions.find(session => session.sessionId === payload.currentId);
      const nextSession = state.sessions.find(session => session.sessionId === payload.nextId);

      if (!nextSession.save) {
        nextSession.products.push(...currentSession.products);
        currentSession.products.length = 0;
      }
    }
  },

  actions: {
    getSessions: (context) => {
      const data = getSortedData();
      context.commit('setSessions', data[0]);
      context.commit('setAllSessionsId', data[1]);
    },
  },
});