<template>
  <li class="list__item">
    <div class="list__item-left">
      <span class="list__item-title">{{ todo.text }}</span>
    </div>
    <div class="list__item-right">
      <button class="list__delete">del</button>
      <button class="list__decrim">-</button>
      <span class="list__count">0</span>
      <button class="list__increm">+</button>
      <button class="list__swap">swap?</button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    todo: String,
  }
}
</script>

<style scoped>
  .list__item{
    display: flex;
    justify-content: space-between;
  }
</style>