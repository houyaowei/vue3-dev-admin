import { ActionTree, ActionContext } from "vuex";
import { UserActionTypes } from "./action-types";
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
      if (res?.code === 0 && res.data.accessToken) {
        console.log("login success")
        // setToken(res.data.accessToken)
        // commit(UserMutationTypes.SET_TOKEN, res.data.accessToken)
      }
    }).catch((err) => {
      console.log(err)
    })
  },

  [UserActionTypes.ACTION_LOGIN_OUT]({ commit }: AugmentedActionContext) {
    
  }
}
