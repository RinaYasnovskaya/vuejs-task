<template>
  <div>
    <my-button class="swap" v-if="!isSave" @click="showMenu" />
    <div :class="classHiddenMenu">
      <ol class="menu__list">
        <li v-for="session in allSession"
            :key="session.id"
            class="menu__list-item"
            @click="func(session.id)"
        >
          {{session.sessionName}}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyButtonSwap',
  data() {
    return {
      isShowMenu: false,
    }
  },
  props: {
    func: Function,
    isSave: Boolean,
    allSession: Array,
    classButton: Object,
  },
  computed: {
    classHiddenMenu() {
      return {
        menu_hidden: !this.isShowMenu,
        menu_active: this.isShowMenu,
      }
    },
  },
  methods: {
    showMenu() {
      this.isShowMenu = !this.isShowMenu;
    },
  }
}
</script>

<style>
  .swap{
    background: url('../../assets/swap.png') no-repeat center;
    background-size: contain;
    width: 20px;
    height: 20px;
    padding: 0;
    border-radius: 0;
    margin-left: 18px;
  }
  .menu_hidden{
    display: none;
  }
  .menu_active{
    display: block;
    position: absolute;
    right: -120px;
    width: 130px;
    height: fit-content;
    max-height: 200px;
    background: rgb(255, 250, 250);
  }
  .menu__list{
    list-style-type: none;
  }
  .menu__list-item{
    padding: 3px 3px;
  }
  .menu__list-item:hover{
    background-color: #f4faff;
    cursor: pointer;
    font-weight: bold;
  }
</style>