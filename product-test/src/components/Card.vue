<template>
  <div class="card">
    <HeaderCard />
    <List :card="card" @del="$emit('del', card)" :isSave="isSave" />
    <FooterCard v-model:save="isSave" v-model:show="show" v-if="!isSave" />
    <MyModal v-model:show="show" v-if="!isSave" />
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: Object,
  },
  data () {
    return {
      isSave: false,
      show: false,
    }
  },
}
</script>

<style>
  .card{
    width: 400px;
    border: 2px solid violet;
    border-radius: 10px;
    position: relative;
  }
</style>
