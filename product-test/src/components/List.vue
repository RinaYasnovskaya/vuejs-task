<template>
  <div class="wrapper-list">
    <ul class="list">
      <ListItem @del="deleteProduct"
                :isSave="isSave"
                v-for="product in products"
                :key="product.id"
                :product="product" 
                @activeLine="activeLine"
                :line="line"
                @saveCount="saveCount"
                :allSession="allSession"
                @swapProductSession="swapProductSession"
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
    allSession: Array,
  },
  mounted() {
    this.products = this.session.products;
  },
  methods: {
    activeLine(name) {
      this.line = name;
    },
    deleteProduct(product){
      this.$store.commit('deleteProduct', {product, id: this.session.sessionId});
    },
    saveCount(name, count){
      this.$store.commit('changeProductCount', {id: this.session.sessionId, product: {name, count}});
    },
    swapProductSession(nextId, product){
      this.$store.commit('swapProduct', {currentId: this.session.sessionId, nextId, product});
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