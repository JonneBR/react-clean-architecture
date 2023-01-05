import { HttpGetClient } from '../protocols'

class RemoteLoadPlanets {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient
  ) {}

  async loadAll(): Promise<void> {
    await this.httpGetClient.get(this.url)
  }
}

class HttpGetClientSpy implements HttpGetClient {
  url?: string
  method?: string
  async get(url: string): Promise<void> {
    this.url = url
    this.method = 'get'
    return Promise.resolve()
  }
}

const makeSut = (url = 'any_url') => {
  const httpGetClientSpy = new HttpGetClientSpy()
  const sut = new RemoteLoadPlanets(url, httpGetClientSpy)
  return { sut, httpGetClientSpy }
}

test('Should call HttpGetClient with correct URL and Method', async () => {
  const url = 'any_url'
  const { sut, httpGetClientSpy } = makeSut()
  await sut.loadAll()

  expect(httpGetClientSpy.url).toBe(url)
  expect(httpGetClientSpy.method).toBe('get')
})
