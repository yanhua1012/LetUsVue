import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/home.vue';
import Production from './pages/production.vue';


Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
      { path: '/', component: Home },
      {
        path: '/production/:id',
        component: Production,
        props: route => ({
          id: Number(route.params.id)
        })
      },
      { path: '*', component: Home },
  ]
});

export default router;
