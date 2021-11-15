<template>
  <div class="wrapper-list">
    <ul class="list">
      <ListItem :card="card" 
                @del="$emit('del', card)"
                :isSave="isSave"
      />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    card: Object,
    isSave: Boolean,
  }
}
</script>