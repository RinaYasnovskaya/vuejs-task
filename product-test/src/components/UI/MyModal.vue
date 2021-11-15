<template>
  <div class="modal" @click="hideModal" v-if="show">
    <span class="modal__title">Выберете из списка: </span>
    <select name="" id="sel" class="modal__select">
      <option v-for="select in selects" :key="select">{{ select }}</option>
    </select>
    <my-button>Сохранить</my-button>
  </div>
</template>

<script>
export default {
  name: 'MyModal',
  props: {
    show: Boolean,
  },
  data () {
    return {
      selects: [
        'Кофе Nescafe Gold, 200г',
        'Мини-сушки простые, 150г',
        'Салфетки антибактериальные влажные, 120шт',
        'Sheba для взрослых кошек с телятиной и языкой, 85г',
        'Сахар белый, 1кг',
        'Sorti средство для мытья посуды, 450г',
      ]
    }
  },
  methods: {
    hideModal () {
      this.$emit('update:show', false);
    }
  }
}
</script>

<style>

</style>