<template>
  <div class="modal" @click="hideModal" v-if="show">
    <div @click.stop class="modal__content">
      <span class="modal__title">Выберите из списка: </span>
      <select name="" id="sel" class="modal__select">
        <option v-for="select in selects" :key="select" :value="select">{{ select }}</option>
      </select>
      <my-button class="modal__save">Сохранить</my-button>
    </div>
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
  .modal{
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(80,12,23,0.25);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal__content{
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    background-color: white;
    padding: 3%;
    border-radius: inherit;
  }
  .modal__title{
    font-weight: bold;
  }
  .modal__save{
    background-color: rgb(0 139 237);
    color: white;
  }
</style>