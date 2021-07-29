import { createRouter,RouteRecordRaw, createWebHashHistory } from "vue-router";
import Home from '@/views/home.vue';
import { registerRouters } from "@/importModules";

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
  },
  ...registerRouters()
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;