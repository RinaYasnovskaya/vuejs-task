<template>
  <div class="wrapper-list">
    <ul class="list">
      <ListItem @del="$emit('del', session)"
                :isSave="isSave"
                v-for="product in products"
                :key="product.id"
                :product="product" 
                @activeLine="activeLine"
                :line="line"
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
      line: '0',
    }
  },
  props: {
    session: Object,
    isSave: Boolean,
  },
  mounted() {
    this.products = this.session.products;
  },
  methods: {
    activeLine(name) {
      this.line = name;
    }
  }
}
</script>

<style>
  .wrapper-list{
    padding: 10px 0;
    border-top: 1px solid #dfdfdf;
  }
</style>