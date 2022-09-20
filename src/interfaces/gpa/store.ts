export interface Store {
  id: number
  storeId: true
  siteCode: string
  type: string
  storeType: string
  active: boolean
  observationDropOff: string
  observationPickUp: null
  timeToFindPickUp: number
  storePartner: [
    {
      shippingType: string
      ordination: number
    },
  ]
  storeAddress: {
    id: number
    cep: string
    state: string
    complement: number
    neighborhood: string
    city: string
    street: string
    locationNumber: number
    latitude: number
    longitude: number
    phoneNumber: string
    name: string
  }
  cluster: string
}

export interface StoresApiResponse extends Array<Store> {}
