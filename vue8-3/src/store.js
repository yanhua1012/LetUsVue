import Vue from 'vue'
import Vuex from 'vuex'
// 可安裝 vue-dev tools 觀看 state 與 getter 的值

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    shoppingCart: [],
    count: 0,
    productions: [
      { id: 1, name: "紅茶", price: 30},
      { id: 2, name: "綠茶", price: 25},
      { id: 3, name: "奶茶", price: 40},
      { id: 4, name: "珍珠奶茶", price: 50},
      { id: 5, name: "咖啡", price: 35}
    ],
  },
  getters: {
    index(state, getters, rootState, rootGetters) {
      return state.count + 1;
    },
    max(state) {
      return state.productions.reduce((a, b) =>{ return a > b.price ? a: b.price}, 0);
    },
    item(state) {
      return id => state.productions.find(elm => elm.id === id);
    },
    shoppingList(state, getters) {
      return state.shoppingCart.map(function(pId, index, array) {
        return getters.item(pId);
      });
    },
    totalPrice(state, getters) {
      return getters.shoppingList.reduce((a, b) => a + b.price, 0);
    }
  },
  mutations: {
    addProd(state, payload) {
      state.shoppingCart.push(payload);
    }
  },
    actions: {
      doAddProd({commit}, productionId) {
        commit("addProd", productionId);
      }
    }
})

export default store;
