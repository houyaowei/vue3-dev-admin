import { RequestParams, ContentType, Method } from 'axios-mapper'
import { RootModel} from '@/api/model/RootModel'
import { UserInfoModel, Users } from '@/api/model/userModel'
import https from '@/utils/http/https'
import { LoginModel } from '@/views/model/loginModel'

export const loginRequest = (userInfo: RequestParams) => {
  return https(false).request<RootModel<LoginModel>>('user/login', Method.POST, userInfo, ContentType.json)
}

export const logoutRequest = () => {
  return https().request<RootModel<UserInfoModel>>('user/userInfo', Method.GET, undefined, ContentType.form)
}
