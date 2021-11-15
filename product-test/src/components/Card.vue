<template>
  <div>
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