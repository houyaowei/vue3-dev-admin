
import { MutationTree } from "vuex";
import { UserMutationTypes } from "./mutation-types"
import { UserState } from "./state"

export type Mutations<S= UserState> = {
  [UserMutationTypes.USER_LOGIN](state: S, name: string): void
  [UserMutationTypes.USER_LOGOUT](state: S): void
}
//需要实现type中的所有方法
export const mutations: MutationTree<UserState> & Mutations= {
  [UserMutationTypes.USER_LOGIN](state: UserState) {
    state.name = "houyw"
  },
  [UserMutationTypes.USER_LOGOUT](state: UserState) {
    state.name = ""
  },
}