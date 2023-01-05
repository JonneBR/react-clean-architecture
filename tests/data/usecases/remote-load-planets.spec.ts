import { RemoteLoadPlanets } from '../../../src/data/usecases/remote-load-planets'
import { LoadPlanets } from '../../../src/domain/usecases'
import { HttpGetClientSpy } from '../mocks'
import { mockRemoteLoadPlanetsListModel } from '../mocks/mock-load-planets'

type SutTypes = {
  sut: RemoteLoadPlanets
  httpGetClientSpy: HttpGetClientSpy<LoadPlanets.Model[]>
}

const makeSut = (url = 'any_url'): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy<LoadPlanets.Model[]>()
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

test('Should call HttpGetClient and returns 200', async () => {
  const { sut, httpGetClientSpy } = makeSut()

  await sut.loadAll()

  expect(httpGetClientSpy.response.statusCode).toBe(200)
})

test('Should return a list of Planets if HttpGetClient and returns 200', async () => {
  const { sut, httpGetClientSpy } = makeSut()
  const httpResult = mockRemoteLoadPlanetsListModel()
  httpGetClientSpy.response = {
    statusCode: 200,
    body: httpResult,
  }
  const planetsList = await sut.loadAll()

  expect(planetsList).toEqual(httpResult)
})
