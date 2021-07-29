
export interface UserState{
  token: string,
  name: string;
  roles: string[],
  email: string;
}
export const state: UserState = {
  token: '',
  name: '',
  roles: [],
  email: ''
}