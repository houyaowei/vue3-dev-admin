export enum ResultEnum {
  SUCCESS = 0,
  ERROR = 1,
  TIMEOUT = 401,
  TYPE = 'success',
}

export enum RequestMethodEnum {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE="DELETE"
}

export enum ResponseTypeEnum {
  JSON = "json",
  BLOB = "blob",
  ARRAYBUFFER = "arraybuffer",
  STREAM = "stream"
}

export enum ContentTypeEnum {
  JSON = 'application/json;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  upload
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}