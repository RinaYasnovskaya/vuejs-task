<template>
  <li class="list__item">
    <div class="list__item-left">
      <span class="list__item-title">{{ card.text }}</span>
    </div>
    <div class="list__item-right">
      <button class="list__delete" @click="$emit('del', card)" ref="button" v-if="!isSave">del</button>
      <button class="list__decrim" @click="decrement" v-if="!isSave">-</button>
      <span class="list__count">{{ count }}</span>
      <button class="list__increm" @click="increment" v-if="!isSave">+</button>
      <button class="list__swap" v-if="!isSave">swap?</button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    card: Object,
    callback: Function,
    isSave: Boolean,
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