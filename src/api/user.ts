import { RequestParams, ContentType, Method } from 'axios-mapper'
import { RootModel} from '@/api/model/RootModel'
import { UserInfoModel, Users } from '@/api/model/userModel'
import http from '@/utils/http/request'
import { LoginModel } from '@/views/model/loginModel'

export const loginRequest = (userInfo: RequestParams) => {
  return http.request<RootModel<LoginModel>>('/user/login', Method.POST, userInfo, ContentType.json)
}

export const logoutRequest = () => {
  return http.request<RootModel<UserInfoModel>>('/user/userInfo', Method.GET, undefined, ContentType.form)
}
