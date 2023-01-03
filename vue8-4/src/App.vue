<template>
  <div class="app">
    <select v-model="selectProduction">
      <option value="">請選擇</option>
      <option v-for="item in prods" :value="item.id">{{ item.name }}</option>
    </select>
    <button @click="buy">購買</button>
    <br/>
    購買產品:
    <ul v-for="item in shoppingList">
      <li>{{ item.name }} - {{ item.price }} 元</li>
    </ul>
    總價: {{ totalPrice }}
    <p>index is {{ index }}</p>
    <p>productions are {{ prods }}</p>
    <p>max: {{ max }}</p>

    <!-- 盡量以第一種方式 -->
    <p>item1: {{ item1 }}</p>
    <p>item2: {{ item2(2) }}</p>

  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  // name: 'app',
  data: () => ({
    selectProduction: "",
    msg: 'Example - Gatters'
  }),
  computed: {
    ...mapState({
      prods: state => state.shopping.productions
    }),
    // prods() {
    //   return this.$store.state.productions;
    // },

    // 以 mapGetters 取代 index()、max()
    ...mapGetters({
      index: 'shopping/index',
      max: 'shopping/max',
      shoppingList: 'shopping/shoppingList',
      totalPrice: 'shopping/totalPrice'
    }),
    // index() {
    //   return this.$store.getters.index;
    // },
    // max() {
    //   return this.$store.getters.max;
    // },
    item1() {
      //return this.$store.shopping.getters.item(1);
      return this.$store.getters['shopping/item'](1);
    },
    item2() {
      //return this.$store.shopping.getters.item;
      return this.$store.getters['shopping/item'];
    },
  },
  methods: {
    ...mapActions({
      doAddProd:  "shopping/doAddProd"
    }),

    buy() {
      if (this.selectProduction == "") {
        return;
      }

      this.doAddProd(this.selectProduction);
      this.selectProduction = "";
    }
  }
};

</script>

<style lang="scss">
</style>
