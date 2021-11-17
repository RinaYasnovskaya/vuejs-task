<template>
  <div class="header">
    <div class="header__top">
      <div :class="['icon', classIcon]">
        <div class="icon__inner" />
      </div>
      <div class="session-info">
        <span class="session-info__number">234567</span>
        <span class="session-info__time">14:33:44-14:34:44</span>
      </div>
      <div class="card-info">
        <span class="card-info__number">234567</span>
        <span class="card-info__title">VV Card id</span>
      </div>
      <div class="settings">settings</div>
    </div>
    <div class="header__bottom">
      <span class="enter">Вход</span>
      <div class="right">
        <span class="time">14:30:44</span>
        <my-button class="swap">swap</my-button>
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from './UI/MyButton.vue'
export default {
  components: { MyButton },
  name: 'HeaderCard',
  props: {
    isSave: Boolean,
  },
  computed: {
    classIcon: function () { 
      return {
        icon_save: this.isSave
      }
    },
  }
}
</script>

<style>
  .header__top, .header__bottom{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header__top{
    padding: 10px 15px;
    background-color: rgba(182, 128, 170, 0.08);
  }
  .header__bottom{
    padding: 6px 15px;
    border-top: 1px solid #dfdfdf;
  }
  .enter{
    color: rgb(223 26 26);
    font-weight: bold;
  }
  .time{
    margin-right: 14px;
  }
  .icon{
    width: 45px;
    height: 45px;
    background: #9c27b0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 15px;
  }
  .icon__inner{
    background-image: url('../assets/user.png');
    width: 26px;
    height: 26px;
    background-repeat: no-repeat;
    background-size: 20px;
    padding: 4px;
    border: 2px solid black;
    border-radius: 8px;
    background-position: center;
    filter: invert(1);
  }
  .icon_save{
    background: blue;
  }
  .header__top span{
    display: block;
  }
  .session-info{
    flex-grow: 1;
  }
  .card-info{
    flex-grow: 4;
  }
  .session-info__number, .card-info__number{
    margin-bottom: 5px;
    font-weight: bold;
  }
  .session-info__time, .card-info__title{
    font-size: 12px;
    color: #cbcbcb;
  }
</style>