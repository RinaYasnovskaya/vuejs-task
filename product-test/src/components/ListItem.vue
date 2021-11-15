<template>
  <li class="list__item">
    <div class="list__item-left">
      <span class="list__item-title">{{ card.text }}</span>
    </div>
    <div class="list__item-right">
      <button class="list__delete" @click="$emit('del', card)" ref="button" v-if="!isSave">del</button>
      <my-button class="list__decrim calc" @click="decrement" v-if="!isSave">-</my-button>
      <span class="list__count">{{ count }}</span>
      <my-button class="list__increm calc" @click="increment" v-if="!isSave">+</my-button>
      <button class="list__swap" v-if="!isSave">swap?</button>
    </div>
  </li>
</template>

<script>
import MyButton from './UI/MyButton.vue';
export default {
  components: { MyButton },
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
  .list__item-right{
    display: flex;
    gap: 5px;
    align-items: center;
  }
  .calc{
    padding: 0;
  }
</style>