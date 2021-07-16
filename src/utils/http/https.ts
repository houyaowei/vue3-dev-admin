import HttpClient, { HttpClientConfig } from 'axios-mapper'
import networkConfig from '@/api/config'
import { useStore } from '@/store'

const https = (hasToken: Boolean = true) => {
  const config: HttpClientConfig = {
    baseURL: networkConfig.host,
    headers: {
      token: hasToken ? useStore().state.user.token : ''
    }
  }
  return new HttpClient(config)
}

export default https
