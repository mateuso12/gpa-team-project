// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
let FREIGHTS = [
  {
    active: false,
    assistant: 1,
    carrierCode: 1,
    dailyValue: 1241,
    postFranchiseKmValue: 21,
    kmFranchise: 10,
    nightSurcharge: 10,
    nightSurchargeFrom: '18:00',
    orderValue: 12,
    sites: ['teste1'],
    sundayHoliday: 10,
    valuePerOrder: 20,
    id: 0,
  },
]

const CARRIERS = [
  {
    id: 0,
    name: 'Fornecedor 0',
    type: 'Tipo 0',
  },
  {
    id: 1,
    name: 'Fornecedor 1',
    type: 'Tipo 1',
  },
  {
    id: 2,
    name: 'Fornecedor 2',
    type: 'Tipo 2',
  },
]

// {
//   active: true,
//   carrierCode: 0,
//   carrierName: 'string',
//   carrierType: 'string',
//   id: 0,
//   siteCode: 'string',
// },

const DB = {
  empty: true,
  first: true,
  last: true,
  number: 0,
  numberOfElements: 0,
  pageable: {
    page: 0,
    size: 0,
    sort: 'string',
  },
  size: 0,
  sort: {
    empty: true,
    sorted: true,
    unsorted: true,
  },
  totalElements: 0,
  totalPages: 0,
}

function getFreights() {
  return {
    ...DB,
    content: FREIGHTS.map((item) => {
      const carrier = CARRIERS.find(
        (carrier) => carrier.id === item.carrierCode,
      )

      return {
        active: item.active,
        carrierCode: item.carrierCode,
        carrierName: carrier.name,
        carrierType: carrier.type,
        id: item.id,
        siteCode: item.sites[0],
      }
    }),
  }
}

export const ENDPOINTS = [
  {
    method: 'GET',
    url: 'https://9772-186-205-17-174.ngrok.io/fulfillment/site/freight',
    handler: () => {
      return [200, getFreights()]
    },
  },
  {
    method: 'POST',
    url: 'https://9772-186-205-17-174.ngrok.io/fulfillment/site/freight',
    handler: (data) => {
      FREIGHTS.push(data)
      return [201, {}]
    },
  },
  {
    method: 'PUT',
    url: /https:\/\/9772-186-205-17-174.ngrok.io\/fulfillment\/site\/freight\/[a-zA-Z0-9]+/,
    handler: (data) => {
      // const freight = DB_FREIGHTS.content.find((item) => item.id === data.id)
      FREIGHTS = FREIGHTS.map((item) => {
        if (item.id !== data.id) return item
        return data
      })
      console.log('FREIGHTS: ', FREIGHTS)
      return [200, getFreights()]
    },
  },
  {
    method: 'GET',
    url: /https:\/\/9772-186-205-17-174.ngrok.io\/fulfillment\/site\/freight\/[a-zA-Z0-9]+/,
    handler: (data) => {
      return [201, FREIGHTS.find((item) => item.id)]
    },
  },
]
