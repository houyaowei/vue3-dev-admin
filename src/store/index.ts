import type {App} from "vue";
import { createPinia } from "pinia";
//root store
const store = createPinia();

export function registerStore(app: App<Element>){
  app.use(store)
}

// export { store };