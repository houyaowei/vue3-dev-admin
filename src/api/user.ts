import { RequestParams, ContentType, Method } from 'axios-mapper'
import { RootModel} from '@/model/rootModel'
import { UserInfoModel, Users } from '@/model/userModel'
import https from '@/utils/https'
import { LoginModel } from '@/views/model/loginModel'

export const loginRequest = (userInfo: RequestParams) => {
  return https(false).request<RootModel<LoginModel>>('user/login', Method.POST, userInfo, ContentType.json)
}

export const logoutRequest = () => {
  return https().request<RootModel<UserInfoModel>>('user/userInfo', Method.GET, undefined, ContentType.form)
}
