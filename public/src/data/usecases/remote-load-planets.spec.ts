export interface HttpGetClient {
  get(url: string): Promise<void>
}

class RemoteLoadPlanets {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient
  ) {}

  async loadAll(): Promise<void> {
    await this.httpGetClient.get(this.url)
  }
}

test('Should call HttpGetClient with correct URL', async () => {
  class HttpGetClientSpy implements HttpGetClient {
    url?: string
    async get(url: string): Promise<void> {
      this.url = url
      return Promise.resolve()
    }
  }
  const url = 'any_url'
  const httpGetClientSpy = new HttpGetClientSpy()
  const sut = new RemoteLoadPlanets(url, httpGetClientSpy)
  await sut.loadAll()

  expect(httpGetClientSpy.url).toBe(url)
})
