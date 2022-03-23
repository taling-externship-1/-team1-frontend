import { RouteRecordRaw } from 'vue-router';

export default [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/account/LoginPage.vue'),
  },
  {
    path: '/login-join',
    name: 'LoginJoin',
    component: () => import(/* webpackChunkName: "login" */ '@/views/account/LoginJoinPage.vue'),
  },
] as Array<RouteRecordRaw>;
