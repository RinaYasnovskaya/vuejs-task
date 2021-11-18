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
  },
  computed: {
    classHiddenMenu: function() {
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

<style scoped>
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
    background: white;
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