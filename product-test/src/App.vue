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
      // this.cards = this.cards.filter(el => el.text != card.text);
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
.app-inner{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding-top: 15px;
}
</style>
