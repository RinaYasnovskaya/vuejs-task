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
  }
</style>