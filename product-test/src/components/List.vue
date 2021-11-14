<template>
  <div class="wrapper-list">
    <ul class="list">
      <ListItem v-for="todo in todos" v-bind:key="todo.text" v-bind:todo="todo" />
    </ul>
  </div>
</template>

<script>
import ListItem from './ListItem.vue';

export default {
  name: 'List',
  components: {
    ListItem
  },
  data () {
    return {
      todos: [
        { text: '1' },
        { text: '2' },
        { text: '13' },
      ]
    }
  }
}
</script>