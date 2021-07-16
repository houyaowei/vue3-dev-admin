import { ActionTree, ActionContext } from "vuex";
import { UserActionTypes } from "./action-types";
import { Mutations} from "./mutations"
import { UserState,RootState } from "./state"

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<UserState, RootState>, 'commit'>

export interface Actions {
  [UserActionTypes.ACTION_LOGIN](
    { commit }: AugmentedActionContext,
    userInfo: { username: string, password: string }
  ): void
  [UserActionTypes.ACTION_LOGIN_OUT](
    { commit }: AugmentedActionContext
  ): void
}

export const actions: ActionTree<UserState, RootState> & Actions = {
  async [UserActionTypes.ACTION_LOGIN](
    { commit }: AugmentedActionContext,
    userInfo: { username: string, password: string }
  ) {
    let { username, password } = userInfo
    username = username.trim()
    // await loginRequest({ username, password }).then(async(res) => {
    //   if (res?.code === 0 && res.data.accessToken) {
    //     setToken(res.data.accessToken)
    //     commit(UserMutationTypes.SET_TOKEN, res.data.accessToken)
    //   }
    // }).catch((err) => {
    //   console.log(err)
    // })
  },

  [UserActionTypes.ACTION_LOGIN_OUT]({ commit }: AugmentedActionContext) {
    
  }
}
