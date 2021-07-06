import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
//挂载router
import router from './router/index'
import store from './store/index'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
