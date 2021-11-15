<template>
  <div>
    <HeaderCard />
    <List :todos="todos" @del="del" />
    <FooterCard />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      todos: [
        { text: '11' },
        { text: '2' },
        { text: '13' },
      ]
    }
  },
  methods: {
    del (todo) {
      console.log(todo);
      this.todos = this.todos.filter(el => el.text != todo.text)
    }
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
