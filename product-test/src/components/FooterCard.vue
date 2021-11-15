<template>
  <div class="footer">
    <my-button @click="addProduct">
      Добавить продукт
    </my-button>
    <my-button @click="saveSession">
      Сохранить
    </my-button>
  </div>
</template>

<script>
export default {
  name: 'FooterCard',
  props: {
    show: Boolean,
  },
  methods: {
    addProduct () {
      this.$emit('update:show', true);
    },
    saveSession () {
      this.$emit('update:save', true);
    }
  }
}
</script>

<style scoped>

</style>