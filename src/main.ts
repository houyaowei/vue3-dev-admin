import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
//挂载router
import router from './router/index'
import { store } from './store'

async function bootstrap(){
  const app  =  createApp(App);
  //注册路由
  app.use(router);
  //注册store
  app.use(store);

  app.use(ElementPlus);

  await router.isReady();
  app.mount('#app', true);
}

//启动应用
bootstrap()
