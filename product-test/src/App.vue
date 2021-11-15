<template>
  <div class="app-inner">
    <Card v-for="card in cards" 
          :key="card.text" 
          :card="card" 
          @del="del" 
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
    }
  },
  methods: {
    del (card) {
      this.cards = this.cards.filter(el => el.text != card.text)
    },
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
