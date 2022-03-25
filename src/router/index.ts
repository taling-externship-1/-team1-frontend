import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import AccountRoutes from './account';

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
  ...AccountRoutes,
  {
    path: '/class/:id',
    name: 'ClassDetail',
    component: () => import(/* webpackChunkName: "class" */ '@/views/ClassDetailPage.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "main" */ '@/views/SearchPage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "notFound" */ '@/views/NotFoundPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
