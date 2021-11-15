<template>
  <div>
    <HeaderCard />
    <List :card="card" @del="$emit('del', card)" :isSave="isSave" />
    <FooterCard @save="$emit('save')" :isSave="isSave" />
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: Object,
    isSave: Boolean,
  }
}
</script>