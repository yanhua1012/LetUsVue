export default {
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
};
