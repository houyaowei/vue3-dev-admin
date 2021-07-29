import { RouteRecordRaw } from 'vue-router' 

const modules = import.meta.globEager('./modules/**/router.ts')
console.log(modules)

export const registerRouters =  function (): Array<RouteRecordRaw> {
  let routerList : Array<RouteRecordRaw> = [];
  for(let m in modules){
    routerList.push((modules[m].default)[0])
    // console.log(modules[m].default)
  }
  
  return routerList;
}