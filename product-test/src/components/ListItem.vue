<template>
  <li class="list__item">
    <div class="list__item-left">
      <span class="list__item-title">{{ todo.text }}</span>
    </div>
    <div class="list__item-right">
      <button class="list__delete" @click="$emit('del', todo)" ref="button">del</button>
      <button class="list__decrim" @click="decrement">-</button>
      <span class="list__count">{{ count }}</span>
      <button class="list__increm" @click="increment">+</button>
      <button class="list__swap">swap?</button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    todo: Object,
    callback: Function,
  },
  data () {
    return {
      count: 1
    }
  },
  methods: {
    increment () {
      this.count++;
    },
    decrement () {
      if (this.count != 1) this.count--;
      else this.$refs.button.click();
    }
  }
}
</script>

<style scoped>
  .list__item{
    display: flex;
    justify-content: space-between;
  }
</style>