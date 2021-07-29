import { RouteRecordRaw } from "vue-router";


const routes: Array<RouteRecordRaw> = [
  {
    path: '/movies',
    name: 'Vuex',
    component: () => import("../view/index.vue")
  }
]

export default routes;