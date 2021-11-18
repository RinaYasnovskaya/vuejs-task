<template>
  <div class="app-inner">
    <Card v-for="session in SESSIONS" 
          :key="session.sessionId"  
          :session="session"
          @doActive="activeCard"
          :activeItemId="ACTIVE_CARD"
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
    }
  },
  mounted() {
    this.$store.dispatch('getSessions');
  },
  computed: {
    ...mapGetters([
      'SESSIONS',
      'ACTIVE_CARD',
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
