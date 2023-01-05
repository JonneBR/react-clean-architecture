import { LoadPlanets } from '../../domain/usecases'
import { HttpGetClient } from '../protocols'

export class RemoteLoadPlanets {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<LoadPlanets.Model[]>
  ) {}

  async loadAll(): Promise<LoadPlanets.Model[]> {
    const httpResponse = await this.httpGetClient.get(this.url)

    return httpResponse.body || []
  }
}
