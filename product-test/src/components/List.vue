<template>
  <div class="wrapper-list">
    <ul class="list">
      <ListItem v-for="todo in todos" :key="todo.text" :todo="todo" @del="$emit('del', todo)" />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    todos: Array
  }
}
</script>