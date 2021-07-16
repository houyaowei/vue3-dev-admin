
export interface UserState{
  name: string;
  roles: string[],
  email: string;
}
export const state: UserState = {
  name: '',
  roles: [],
  email: ''
}