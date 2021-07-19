import { ActionTree, ActionContext } from "vuex";
import { UserActionTypes } from "./action-types";
import { UserMutationTypes } from "./mutation-types"
import { Mutations} from "./mutations"
import { RootState, useStore } from '@/store'
import { UserState, state } from "./state"
import { loginRequest, logoutRequest } from '@/api/user'
import { UserReqModel}  from "@/api/model/userModel"

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<UserState, RootState>, 'commit'>

export interface Actions {
  [UserActionTypes.ACTION_LOGIN](
    { commit }: AugmentedActionContext,
    userInfo: UserReqModel
  ): void

  [UserActionTypes.ACTION_LOGIN_OUT](
    { commit }: AugmentedActionContext
  ): void
}

export const actions: ActionTree<UserState, RootState> & Actions = {
  async [UserActionTypes.ACTION_LOGIN](
    { commit }: AugmentedActionContext,
    userInfo: UserReqModel
  ) {
    let { name, password } = userInfo

    await loginRequest({ name, password }).then(async(res) => {
      // code 自定义
      if (res.code == 0) {
        console.log("login success")
        commit(UserMutationTypes.USER_LOGIN, res)
      }
    }).catch((err) => {
      console.log(err)
    })
  },

  [UserActionTypes.ACTION_LOGIN_OUT]({ commit }: AugmentedActionContext) {
    
  }
}
