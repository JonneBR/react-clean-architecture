import { HttpGetClient } from '../protocols'

export class RemoteLoadPlanets {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient
  ) {}

  async loadAll(): Promise<void> {
    await this.httpGetClient.get(this.url)
  }
}
