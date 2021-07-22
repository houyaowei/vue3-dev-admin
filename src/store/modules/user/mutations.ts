
import { MutationTree } from "vuex";
import { UserMutationTypes } from "./mutation-types"
import { UserState } from "./state"

export type Mutations<S= UserState> = {
  //TODO,如果返回的是类型列表，需要重新定义interface，不要用any
  [UserMutationTypes.USER_LOGIN](state: S, obj: any): void
  [UserMutationTypes.USER_LOGOUT](state: S): void
}
//需要实现type中的所有方法
export const mutations: MutationTree<UserState> & Mutations= {
  [UserMutationTypes.USER_LOGIN](state: UserState, obj) {
    console.log("-----------")
    state.name = "houyw"
  },
  [UserMutationTypes.USER_LOGOUT](state: UserState) {
    state.name = ""
  },
}