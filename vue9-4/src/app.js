import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store/index'
import 'vuetify/dist/vuetify.min.css'
// Vuex
import Vuetify from 'vuetify'

Vue.use(Vuetify);

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
