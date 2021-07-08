export interface Result<T> {
  code: number,
  message: string,
  result: Array<T>
} 