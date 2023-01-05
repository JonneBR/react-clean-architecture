import { RemoteLoadPlanets } from '../../../src/data/usecases/remote-load-planets'
import { HttpGetClientSpy } from '../mocks'

type SutTypes = { sut: RemoteLoadPlanets; httpGetClientSpy: HttpGetClientSpy }

const makeSut = (url = 'any_url'): SutTypes => {
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
