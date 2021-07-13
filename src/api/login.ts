import { defHttp } from '@/utils/http/request';
import { UserParam,LoginResultModel } from "./model/userModel"

enum Api {
  Login = '/login',
  Logout = '/logout',
  GetUserInfo = '/getUserInfo',
  GetPermCode = '/getPermCode',
}

export function getUserInfo(params: UserParam){
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
    }
  );
}