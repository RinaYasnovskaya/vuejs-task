<template>
  <div class="header">
    <div class="header__top">
      <div class="icon">icon</div>
      <div class="session-info">session</div>
      <div class="card-info">card</div>
      <div class="settings">settings</div>
    </div>
    <div class="header__bottom">
      <span class="enter">Вход</span>
      <div class="left">
        <span class="time">14:30:44</span>
        <button class="swap">swap</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderCard'
}
</script>

<style>
  .header__top, .header__bottom{
    display: flex;
    justify-content: space-between;
  }
  .header__top{
    padding: 10px 15px;
    background-color: rgba(182, 128, 170, 0.08);
  }
  .header__bottom{
    padding: 5px 15px;
    border-top: 1px solid grey;
  }
  .enter{
    color: red;
  }
</style>