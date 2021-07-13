
/**
 * 检测工具函数集合
 */

const _toString = Object.prototype.toString;
//工具基础方法
export function is(value: unknown,type: string){
  return _toString.call(value) === `[Object,${type}]`; 
}

export function isObject(val: any): val is Record<any,any> {
  return val && is(val, 'Object');
}

export function isString(val: unknown): val is string {
  return is(val, 'String');
}
export function isFunction(val: unknown): val is Function {
  return typeof val === 'function';
}
export function isBoolean(val: unknown): val is boolean {
  return is(val, 'Boolean');
}

export function isRegExp(val: unknown): val is RegExp {
  return is(val, 'RegExp');
}

export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val);
}