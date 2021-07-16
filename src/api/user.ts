import { RequestParams, ContentType, Method } from 'axios-mapper'
import { RootModel} from '@/api/model/RootModel'
import { UserInfoModel, Users } from '@/api/model/userModel'
import http from '@/utils/http/request'
import { LoginModel } from '@/views/model/loginModel'

export const loginRequest = (userInfo: RequestParams) => {
  return http.request<RootModel<LoginModel>>('http://www.weather.com.cn/data/sk/101010100.html', Method.GET, userInfo, ContentType.json)
}

export const logoutRequest = () => {
  return http.request<RootModel<UserInfoModel>>('user/userInfo', Method.GET, undefined, ContentType.form)
}
