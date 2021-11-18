<template>
  <div class="app-inner">
    <Card v-for="session in SESSIONS" 
          :key="session.sessionId"  
          :session="session"
          @del="del"
          @doActive="activeCard"
          :activeItemId="activeItemId"
    />
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      activeItemId: '0',
    }
  },
  methods: {
    del(card) {
      //dispatch
      console.log(card);
    },

    activeCard(sessionId) {
      this.activeItemId = sessionId;
    }
  },
  mounted() {
    this.$store.dispatch('getSessions');
  },
  computed: {
    ...mapGetters(['SESSIONS']),
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
}
html, body, #app{
  width: 100%;
  height: 100%;
}
#app {
  font-family: Arial, sans-serif;
  background-color: rgb(238, 237, 237);
}
.app-inner{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px 0;
}
</style>
