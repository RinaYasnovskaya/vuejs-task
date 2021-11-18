<template>
  <div :class="['card', classObject]" @click="$emit('doActive', session.sessionId)">
    <HeaderCard 
      :isSave="session.save"
      :enter="session.open"
      :exit="session.exit"
      :id="nameSession"
      :allSessionsWithName="allSessionsWithName"
      @swapAllProducts="swapAllProducts" />
    <List :session="session" @del="$emit('del', session)" :isSave="session.save" :allSession="allSessionsWithName" />
    <FooterCard @save="saveSession" v-model:show="show" v-if="!session.save" />
    <MyModal
      v-model:show="show"
      v-if="!session.save"
      @addNewProduct="addNewProduct"
      :sessionId="session.sessionId"
    />
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    session: Object,
    activeItemId: String,
    allSessionsWithName: Array,
  },
  data () {
    return {
      isSave: false,
      show: false,
      nameSession: this.allSessionsWithName.find(el => el.id === this.session.sessionId).sessionName,
    }
  },
  computed: {
    classObject: function () {
      return {
        card__active: (this.activeItemId === this.session.sessionId) && !this.session.save,
        card__save: this.session.save,
      }
    }
  },
  methods: {
    saveSession() {
      this.$store.commit('setSaveSession', this.session.sessionId);
    },
    addNewProduct(product) {
      this.$store.commit('addProduct', { product, id: this.session.sessionId });
    },
    swapAllProducts(nextId){
      this.$store.commit('swapAll', { currentId: this.session.sessionId, nextId });
    }
  }
}
</script>

<style>
  .card{
    width: 400px;
    border-radius: 10px;
    border: 2px solid #dde8fb;
    position: relative;
    background: white;
  }
  .card__active{
    border-color: violet;
  }
  .card__save{
    border: none;
    border-left: 4px solid blue;
  }
</style>
