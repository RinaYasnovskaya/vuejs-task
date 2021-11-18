<template>
  <li :class="['list__item', {list__item_active: check()}]" @click="$emit('activeLine', product.name)">
    <div class="list__item-left">
      <span class="list__item-title">{{ product.name }}</span>
    </div>
    <div class="list__item-right">
      <my-button 
        :class="['list__delete', classButton]"
        @click="$emit('del', product)"
        v-if="!isSave"
      />
      <my-button :class="['list__decrim calc', classButton]" @click="decrement" v-if="!isSave">
        <span>&#8211;</span>
      </my-button>
      <span class="list__count">{{ count }}</span>
      <my-button :class="['list__increm calc', classButton]" @click="increment" v-if="!isSave">
        +
      </my-button>
      <MyButtonSwap
        :isSave="isSave"
        :allSession="allSession"
        :func="swapProductCurr"
        :classButton="classButton" 
      />
    </div>
  </li>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    product: Object,
    callback: Function,
    isSave: Boolean,
    line: String,
    allSession: Array,
  },
  data () {
    return {
      count: 1,
      isShowMenu: false,
    }
  },
  methods: {
    increment() {
      this.count++;
      this.saveCount(this.count);
    },
    decrement() {
      if (this.count != 1) {
        this.count--;
        this.saveCount(this.count);
      } else {
        this.$emit('del', this.product);
      }
    },
    check() {
      return ((this.product.name === this.line) && !this.isSave);
    },
    saveCount() {
      this.$emit('saveCount', this.product.name, this.count);
    },
    showMenu() {
      this.isShowMenu = !this.isShowMenu;
    },
    swapProductCurr(id) {
      this.$emit('swapProductSession', id, this.product);
      this.showMenu();
    }
  },
  mounted() {
    this.count = this.product.count;
  },
  computed: {
    classButton() {
      return {
        button_active: this.check(),
      }
    },
    classHiddenMenu() {
      return {
        menu_hidden: !this.isShowMenu,
        menu_active: this.isShowMenu,
      }
    }
  }
}
</script>

<style scoped>
  .list__item{
    display: flex;
    justify-content: space-between;
    padding: 5px 15px;
  }
  .list__item:hover{
    background-color: #f4faff;
  }
  .list__item-right{
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .list__count{
    width: 30px;
    text-align: center;
  }
  button{
    padding: 0;
    border-radius: 0;
    opacity: 0.3;
  }
  .button_active{
    opacity: 1;
  }
  .calc{
    font-size: 14px;
    color: blue;
  }
  .list__delete{
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 15px;
    height: 15px;
    background-image: url('../assets/trash.png');
    margin-right: 10px;
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