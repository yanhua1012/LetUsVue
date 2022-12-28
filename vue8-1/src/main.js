import Vue from 'vue'
import App from './App.vue'

import store from './store.js';


console.log('store.state.count', store.state.count);
store.commit('increment');
console.log('store.state.count', store.state.count);
