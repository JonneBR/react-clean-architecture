export interface HttpResponse<T = unknown> {
  statusCode: 200
  body?: T
}

export interface HttpGetClient<R = unknown> {
  get(url: string): Promise<HttpResponse<R>>
}
