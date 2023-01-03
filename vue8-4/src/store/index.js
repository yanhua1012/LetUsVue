import Vue from 'vue'
import Vuex from 'vuex'
// import getters from './getters.js';
// import actions from './actions.js';
// import mutations from './mutations.js';
import shopping from './shopping/index.js';

Vue.use(Vuex);

const state  = {

};

const store = new Vuex.Store({
  state,
  // getters,
  // actions,
  // mutations,
  modules: {
    shopping
  }
});

export default store;
