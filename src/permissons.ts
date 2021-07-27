import router from '@/router'
import { RouteLocationNormalized } from 'vue-router'
import { useStore } from './store'
import whiteList from './router/whiteList'

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: any) => {
  const store = useStore()
  if(store.state.user.token){
    if (to.path === '/login') {
      next({
        path: '/'
      })
    } else {
      //在这里可以添加权限逻辑
      // store.state.permission.dynamicRoutes.forEach((route) => {
      //   router.addRoute(route)
      // })
      next({ ...to, replace: true })
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // In the free login whitelist, go directly
      next()
    } else {
      // Other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
    }
  }
})
router.afterEach((to: RouteLocationNormalized) => {
  console.log(to)
  // set page title
  // document.title = getPageTitle(to.meta.title)
})

