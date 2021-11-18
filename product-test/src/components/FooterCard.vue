<template>
  <div class="footer">
    <my-button class="footer__add" @click="addProduct">
      Добавить продукт
    </my-button>
    <my-button class="footer__save" @click="$emit('save')">
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
    addProduct() {
      this.$emit('update:show', true);
    },
  }
}
</script>

<style scoped>
  .footer{
    display: flex;
    justify-content: space-between;
    padding: 7px 15px;
    border-top: 1px solid #dfdfdf;
  }
  .footer__add{
    background-color: #daf4ff;
    color: rgba(51, 73, 153, 0.932);
  }
  .footer__save{
    background-color: rgb(0 139 237);
    color: white;
  }
</style>