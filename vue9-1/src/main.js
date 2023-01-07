import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import 'vuetify/dist/vuetify.min.css'
// Vuex
import Vuetify from 'vuetify'

Vue.use(Vuetify);

new Vue({
  el: '#app',
  render: h => h(App),
  store
})
