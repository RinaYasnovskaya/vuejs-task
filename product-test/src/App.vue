<template>
  <div class="app-inner">
    <Card v-for="session in SESSIONS" 
          :key="session.sessionId"  
          :session="session"
          @doActive="activeCard"
          :activeItemId="ACTIVE_CARD"
          :allSessionsWithName="formatedSessionsId(SESSIONS_ID)"
    />
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'App',
  methods: {
    activeCard(sessionId) {
      this.$store.commit('setActiveCard', sessionId);
    },
    doFormatedName(id) {
      const partName = id.split('-')[1];
      return `Гость#${partName}`;
    },
    formatedSessionsId(ids) {
      return ids.map(el => {
        return { sessionName: this.doFormatedName(el), id: el }
      })
    },
  },
  mounted() {
    this.$store.dispatch('getSessions');
  },
  computed: {
    ...mapGetters([
      'SESSIONS',
      'ACTIVE_CARD',
      'SESSIONS_ID'
    ]),
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html{
  font-size: 14px;
  background-color: rgb(238, 237, 237);
}
#app {
  font-family: Arial, sans-serif;
}
.app-inner{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px 0;
}
</style>
