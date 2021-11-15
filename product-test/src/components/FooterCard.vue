<template>
  <div class="footer" v-if="!isSave">
    <my-button>
      Добавить продукт
    </my-button>
    <my-button @click="$emit('save')">
      Сохранить
    </my-button>
  </div>
</template>

<script>
export default {
  name: 'FooterCard',
  props: {
    isSave: Boolean,
  }
}
</script>

<style scoped>

</style>