import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/datepage',
    name: 'datepage',
    component: () =>
      import ( /* webpackChunkName: "datepage" */
        '../views/DatePage.vue')
  },
  {
    path: '/datepage/:index',
    name: 'datepageIndex',
    props: true,
    component: () =>
      import ( /* webpackChunkName: "SingleCelebration" */
        '../views/SingleCelebration.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;