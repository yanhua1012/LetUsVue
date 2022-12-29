<template>
  <div class="app">
    <p>index is {{ index }}</p>
    <p>productions are {{ prods }}</p>
    <p>max: {{ max }}</p>

    <!-- 盡量以第一種方式 -->
    <p>item1: {{ item1 }}</p>
    <p>item2: {{ item2(2) }}</p>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  // name: 'app',
  data: () => ({
      msg: 'Example - Gatters'
  }),
  computed: {
    prods() {
      return this.$store.state.productions;
    },

    // 以 mapGetters 取代 index()、max()
    ...mapGetters(['index', 'max']),
    // index() {
    //   return this.$store.getters.index;
    // },
    // max() {
    //   return this.$store.getters.max;
    // },
    item1() {
      return this.$store.getters.item(1);
    },
    item2() {
      return this.$store.getters.item;
    }
  }
};

</script>

<style lang="scss">
</style>
