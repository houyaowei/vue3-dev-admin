import {ContentTypeEnum ,Device} from '@/enums/http'

interface Headers{
  token: string
  contentType: string
  version: string
  device: Device
}

const _header: Headers = {
  token: '',
  contentType: ContentTypeEnum.JSON,
  version: '1.0',
  device: Device.PC
}

export interface NetworkConfig{
  host?: string
  timeout?: number
  loading?: false
  header?: {}
}

const networkConfig: NetworkConfig = {
  host: import.meta.env.VITE_APP_BASE_API,
  timeout: 10000,
  loading: false,
  header: _header
}

export default networkConfig