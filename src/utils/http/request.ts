import HttpClient, { HttpClientConfig } from 'axios-mapper'
import { RootModel } from "@/api/model/RootModel"
import networkConfig from '@/api/config'
import { useStore } from '@/store'

// const http = (hasToken: Boolean = true) => {
//   const config: HttpClientConfig = {
//     baseURL: networkConfig.host,
//     headers: {
//       token: hasToken ? useStore().state.user.token : ''
//     }
//   }
//   return new HttpClient(config)
// }
const config: HttpClientConfig = {
  baseURL: networkConfig.host,
  headers: {
    token: '',
  },
};
const http = new HttpClient(config);

http.httpClient.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

http.httpClient.interceptors.response.use(function (response: RootModel) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

export default http;
