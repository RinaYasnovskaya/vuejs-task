<template>
  <div :class="['card', classObject]" @click="$emit('doActive', session.sessionId)">
    <HeaderCard :isSave="isSave" />
    <List :session="session" @del="$emit('del', session)" :isSave="isSave" />
    <FooterCard v-model:save="isSave" v-model:show="show" v-if="!isSave" />
    <MyModal v-model:show="show" v-if="!isSave" />
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    session: Object,
    activeItemId: String,
  },
  data () {
    return {
      isSave: false,
      show: false,
    }
  },
  computed: {
    classObject: function () {
      return {
        card__active: (this.activeItemId === this.session.sessionId) && !this.isSave,
        card__save: this.isSave,
      }
    }
  }
}
</script>

<style>
  .card{
    width: 500px;
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
