<template>
  <div>
    <HeaderCard />
    <List :card="card" @del="$emit('del', card)" :isSave="isSave" />
    <FooterCard @save="saveSession" :isSave="isSave" />
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
    }
  },
  methods: {
    saveSession() {
      this.isSave = true;
    },
  }
}
</script>