// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import MockAdapter from 'axios-mock-adapter'

export function mockServer(client, serviceName, endpoints) {
  const AXIOS_MOCK_ADAPTER_METHODS = {
    GET: 'onGet',
    POST: 'onPost',
    PUT: 'onPut',
  }

  if (import.meta.env[`VITE_SERVICE_${serviceName}_MOCKED`] === 'true') {
    const mock = new MockAdapter(client)
    // mock.onGet('/freight').reply(200, getFreightsFixture)
    endpoints.forEach((endpoint) => {
      const listener = AXIOS_MOCK_ADAPTER_METHODS[endpoint.method]

      mock[listener](endpoint.url).reply((config) => {
        console.log(JSON.parse(config.data || '{}'))
        console.log('config: ', config)
        const response = endpoint.handler(JSON.parse(config.data || '{}'))
        console.log('response: ', response)
        return response
      })
    })
  }
}
