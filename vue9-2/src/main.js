import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import 'vuetify/dist/vuetify.min.css'
// Vuex
import Vuetify from 'vuetify'
import router from './router.js'

Vue.use(Vuetify);

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
