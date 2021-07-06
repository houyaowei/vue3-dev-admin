import { createRouter,RouteRecordRaw, createWebHashHistory } from "vue-router";
import Home from '@/views/home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: () => import("@/views/vuex.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;