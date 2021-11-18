<template lang="">
  <button class="my-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MyButton',
}
</script>

<style>
  .my-btn{
    padding: 8px 20px;
    outline: none;
    border: none;
    background: unset;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
  }
  .swap{
    background: url('../../assets/swap.png') no-repeat center;
    background-size: contain;
    width: 20px;
    height: 20px;
  }
</style>