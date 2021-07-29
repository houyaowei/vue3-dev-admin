import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/books',
    name: 'books',
    component: () => import("../views/index.vue")
  }
]

export default routes;