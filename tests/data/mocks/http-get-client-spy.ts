import { HttpGetClient } from '../../../src/data/protocols'

export class HttpGetClientSpy implements HttpGetClient {
  url?: string
  method?: string
  async get(url: string): Promise<void> {
    this.url = url
    this.method = 'get'
    return Promise.resolve()
  }
}
