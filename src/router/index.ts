import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/main',
    redirect: '/',
  },
  {
    path: '/',
    name: 'Main',
    component: () => import(/* webpackChunkName: "main" */ '@/views/MainPage.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/LoginPage.vue'),
  },
  {
    path: '/class/:id',
    name: 'ClassDetail',
    component: () => import(/* webpackChunkName: "class" */ '@/views/ClassDetailPage.vue'),
  },
  {
    path: '/search/:keyword',
    name: 'Search',
    component: () => import(/* webpackChunkName: "main" */ '@/views/SearchPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
