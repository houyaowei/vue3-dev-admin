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