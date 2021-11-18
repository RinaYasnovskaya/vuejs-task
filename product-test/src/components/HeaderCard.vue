<template>
  <div class="header">
    <div class="header__top">
      <div :class="['icon', classIcon]">
        <div class="icon__inner" />
      </div>
      <div class="session-info">
        <span class="session-info__number">{{id}}</span>
        <span class="session-info__time">
          {{formatedDate(enter.timestamp)}}-{{formatedDate(exit.timestamp)}}
        </span>
      </div>
      <div class="card-info">
        <span class="card-info__number">234567</span>
        <span class="card-info__title">VV Card id</span>
      </div>
      <div class="settings">
        <div class="settings__button" v-if="!isSave">
          <my-button class="settings__button-edit"></my-button>
          <my-button class="settings__button-menu">&#10247;</my-button>
        </div>
        <span class="settings_save" v-if="isSave"><b>&#10004;</b></span>
      </div>
    </div>
    <div class="header__bottom">
      <span class="enter">Вход</span>
      <div class="header__bottom-right">
        <span class="time">{{formatedDate(enter.timestamp)}}</span>
        <MyButtonSwap :isSave="isSave" :allSession="allSessionsWithName" :func="swapAll" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderCard',
  props: {
    isSave: Boolean,
    enter: Object,
    exit: Object,
    id: String,
    allSessionsWithName: Array,
  },
  computed: {
    classIcon() { 
      return {
        icon_save: this.isSave
      }
    },
  },
  methods: {
    formatedDate(ms) {
      const date = new Date(ms);
      const h = date.getHours();
      const m = date.getMinutes();
      const s = date.getSeconds();
      return `${h >= 10 ? h : '0'+h}:${m >= 10 ? m : '0'+m}:${s >= 10 ? s : '0'+s}`;
    },
    swapAll(nextId) {
      this.$emit('swapAllProducts', nextId);
    }
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
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .header__bottom{
    padding: 6px 15px;
    border-top: 1px solid #dfdfdf;
  }
  .enter{
    color: rgb(223 26 26);
    font-weight: bold;
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
  .settings_save{
    color: green;
    font-size: 20px;
    font-weight: bold;
    display: inline;
  }
  .settings__button button{
    padding: 0;
    border-radius: 0;
    filter: opacity(0.3);
    font-weight: 100;
  }
  .settings__button-edit{
    background: url('../assets/editing.png') no-repeat center;
    background-size: contain;
    width: 24px;
    height: 24px;
    margin-right: 15px;
  }
  .settings__button-menu{
    font-size: 28px;
    width: 10px;
  }
  .header__bottom-right{
    display: flex;
    align-items: center;
  }
</style>