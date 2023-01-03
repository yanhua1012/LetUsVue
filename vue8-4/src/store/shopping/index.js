import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';

const state  = {
  //count: 0,
  shoppingCart: [],
  productions: [
    { id: 1, name: "紅茶", price: 30},
    { id: 2, name: "綠茶", price: 25},
    { id: 3, name: "奶茶", price: 40},
    { id: 4, name: "珍珠奶茶", price: 50},
    { id: 5, name: "咖啡", price: 35}
  ]
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
