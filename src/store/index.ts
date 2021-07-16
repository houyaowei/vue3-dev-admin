console.log("store/index")
import { createStore,createLogger } from "vuex";

import { store as user, UserStore, UserState } from '@/store/modules/user'

//有新增store的需要在这里新增
export interface RootState {
  user: UserState
}

export type Store = UserStore<Pick<RootState, 'user'>>
console.log(import.meta.env.VITE_NODE_ENV)

const debug = import.meta.env.VITE_NODE_ENV !== 'development'
const plugins = debug ? [createLogger({})] : []

export const store = createStore({
  plugins,
  modules: {
    user
  }
})

export function useStore(): Store {
  return store as Store
}