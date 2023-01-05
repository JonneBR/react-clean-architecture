import { LoadPlanetsModel } from '../models'

export interface LoadPlanets {
  loadAll: () => Promise<LoadPlanets.Model[]>
}

export namespace LoadPlanets {
  export type Model = LoadPlanetsModel
}
