<template>
  <div class="wrapper-list">
    <ul class="list">
      <ListItem v-for="todo in todos" :key="todo.text" :todo="todo" :callback="del" />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List',
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
    del (ev) {
      const idElem = ev.target.parentNode.parentNode.dataset.id;
      const idArr = this.todos.findIndex(el => el.text == idElem);
      if (idArr >= 0) this.todos.splice(idArr, 1);
    }
  }
}
</script>