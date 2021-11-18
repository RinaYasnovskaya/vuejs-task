<template>
  <div class="modal" @click="hideModal" v-if="show">
    <div @click.stop class="modal__content">
      <span class="modal__title">Выберите из списка: </span>
      <select id="sel" class="modal__select" @change="inputSelected" v-model="selectedPos">
        <option v-for="select in selects" :key="select" :value="select">
          {{ select }}
        </option>
      </select>
      <label for="count" class="modal__title">Введите количество:</label>
      <input 
        type="number"
        class="modal__input"
        name="count"
        id="count"
        :value="count"
        @input="inputCount"
        min="1"
      >
      <my-button class="modal__save" @click="saveNewProduct">Сохранить</my-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyModal',
  props: {
    show: Boolean,
    sessionId: String,
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
      ],
      selectedPos: '',
      count: 1,
    }
  },
  methods: {
    hideModal() {
      this.$emit('update:show', false);
    },
    inputCount(event) {
      this.count = +event.target.value;
    },
    inputSelected(event) {
      this.selectedPos = event.target.value;
    },
    saveNewProduct() {
      const product = {name: this.selectedPos, count: this.count};
      this.$store.commit('addProduct', {product, id: this.sessionId});
      this.hideModal();
    }
  },
  mounted() {
    this.selectedPos = this.selects[0];
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
    background-color: rgb(107 44 114 / 19%);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal__content{
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: baseline;
    background-color: rgb(250, 250, 250);
    padding: 3%;
    border-radius: inherit;
  }
  .modal__title{
    font-weight: bold;
  }
  .modal__save{
    background-color: rgb(0 139 237);
    color: rgb(250, 250, 250);
  }
  .modal__input{
    width: 40px;
  }
</style>