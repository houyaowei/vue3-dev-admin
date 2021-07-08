import type { UserInfo } from "#/user";
import { defineStore } from "pinia";

interface userState {
  userInfo: UserInfo,
  loginStatus: boolean
}
/**
 * store定义
 */
export const useUserStore = defineStore({
  id: "userStore",
  state: (): userState => ({
    userInfo: null,
    loginStatus: false
  }),
  actions: {
    getUserInfo(): {
      this.userInfo = {
        userId: 222,
        userName: "hyw"
      }
    }
  }
})