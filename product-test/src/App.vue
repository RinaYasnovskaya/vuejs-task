<template>
  <div>
    <Card v-for="card in cards" 
          :key="card.text" 
          :card="card" 
          @del="del" 
          :isSave="isSave"
          @save="saveSession"
    />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      cards: [
        { text: '11' },
        { text: '2' },
        { text: '13' },
      ],
      isSave: false,
    }
  },
  methods: {
    del (card) {
      this.cards = this.cards.filter(el => el.text != card.text)
    },
    saveSession() {
      this.isSave = true;
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
