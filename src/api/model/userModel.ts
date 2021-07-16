export interface UserInfoModel {
  id: number
  username: string
  password: string
  name: string
  roles: string[]
}
export interface UserReqModel {
  name: string
  password: string
}
export interface Users {
  items: any
}
