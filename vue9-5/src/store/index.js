import Vue from 'vue';
import Vuex from 'vuex';

import getters from '@/store/getters.js';
import mutations from '@/store/mutations.js';
import actions from '@/store/actions.js';

Vue.use(Vuex);

const state = {
  userName: "Nat",
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
