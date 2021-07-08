
/**
 * 检测工具函数集合
 */

const _toString = Object.prototype.toString;
//工具基础方法
export function is(value: unknown,type:string): boolean {
  return _toString.call(value) === `[Object,${type}]` 
}

export function isObject(val: any): val is Record<any,any> {
  return val && is(val, 'Object')
}