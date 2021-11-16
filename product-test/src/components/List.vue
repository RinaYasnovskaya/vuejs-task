<template>
  <div class="wrapper-list">
    <ul class="list">
      <ListItem :session="session" 
                @del="$emit('del', session)"
                :isSave="isSave"
      />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    session: Object,
    isSave: Boolean,
  }
}
</script>

<style>
  .wrapper-list{
    padding: 10px 15px;
    border-top: 1px solid grey;
  }
</style>