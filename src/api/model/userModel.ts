export interface UserParam {
  userName: string;
  userId: string | number
}
export interface RoleInfo {
  roleName: string;
  value: string;
}

export interface LoginResultModel {
  userId: string | number;
  token: string;
  role: RoleInfo;
}