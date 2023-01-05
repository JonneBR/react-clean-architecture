import { HttpGetClient, HttpResponse } from '../../../src/data/protocols'

export class HttpGetClientSpy<R = unknown> implements HttpGetClient<R> {
  url?: string
  method?: string
  response: HttpResponse<R> = {
    statusCode: 200,
  }

  async get(url: string): Promise<HttpResponse<R>> {
    this.url = url
    this.method = 'get'
    return this.response
  }
}
