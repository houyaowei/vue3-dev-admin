import { isObject } from './check'
/**
 * 对象merge
 */
export function deepMerge<T>(target: any={}, src: any={}):T{
  let key: string;
  for (const key in src) {
    target[key] = isObject(src[key]) ? deepMerge(target[key], src[key]) : (target[key] = src[key]);
  }
  return target
}

export function setObjToUrlParams(baseUrl: string, obj: any): string {
  let parameters = '';
  for (const key in obj) {
    parameters += key + '=' + encodeURIComponent(obj[key]) + '&';
  }
  parameters = parameters.replace(/&$/, '');
  return /\?$/.test(baseUrl) ? baseUrl + parameters : baseUrl.replace(/\/?$/, '?') + parameters;
}