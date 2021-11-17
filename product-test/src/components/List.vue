<template>
  <div class="wrapper-list">
    <ul class="list">
      <ListItem @del="$emit('del', session)"
                :isSave="isSave"
                v-for="product in products"
                :key="product.id"
                :product="product" 
      />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      products: [],
    }
  },
  props: {
    session: Object,
    isSave: Boolean,
  },
  mounted() {
    this.products = this.session.products;
  }
}
</script>

<style>
  .wrapper-list{
    padding: 10px 15px;
    border-top: 1px solid grey;
  }
</style>