// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { createContext, useState } from 'react'
import {
  Freight,
  FreightsApiResponse,
  ShippingCarriersApiResponse,
  Store,
  StoresApiResponse,
} from '../interfaces/gpa'
import * as gpa from '../services/gpa'

interface GpaContextProps {
  freights: FreightsApiResponse
  freight: FreightsApiResponse
  shippingCarriers: ShippingCarriersApiResponse
  stores: Store[]
  loadFreights: () => void
  loadFreight: (id: string) => void
  postFreight: (payload: Freight) => void
  putFreight: (id: string, payload: Freight) => void
  loadShippingCarriers: () => void
  loadStores: () => void
}

export const GpaContext = createContext({} as GpaContextProps)

export default function GpaProvider({ children }) {
  const [freights, setFreights] = useState<FreightsApiResponse>(
    {} as FreightsApiResponse,
  )

  const [freight, setFreight] = useState<FreightsApiResponse>(
    {} as FreightsApiResponse,
  )

  const [shippingCarriers, setShippingCarriers] =
    useState<ShippingCarriersApiResponse>({} as ShippingCarriersApiResponse)

  const [stores, setStores] = useState<StoresApiResponse>(
    [] as StoresApiResponse,
  )

  async function loadFreights(): Promise<void> {
    const { data } = await gpa.fetchFreights()
    setFreights(data)
  }

  async function loadFreight(id: string): Promise<void> {
    const { data } = await gpa.fetchFreight(id)
    setFreight(data)
  }

  async function postFreight(payload: Freight): Promise<void> {
    const formattedPayload = {
      active: payload.active,
      assistant: Number(payload.assistant),
      carrierCode: Number(payload.carrierCode),
      dailyValue: Number(payload.dailyValue),
      postFranchiseKmValue: Number(payload.postFranchiseKmValue),
      kmFranchise: Number(payload.kmFranchise),
      nightSurcharge: Number(payload.nightSurcharge),
      nightSurchargeFrom: payload.nightSurchargeFrom,
      orderValue: Number(payload.orderValue),
      sites: payload.sites,
      sundayHoliday: Number(payload.sundayHoliday),
      valuePerOrder: Number(payload.orderValue),
      id: 0,
    }
    await gpa.postFreight(formattedPayload)
    loadFreights()
  }

  async function putFreight(id: string, payload: Freight): Promise<void> {
    await gpa.putFreight(id, payload)
  }

  async function loadShippingCarriers(): Promise<void> {
    const { data } = await gpa.fetchShippingCarriers()
    setShippingCarriers(data)
  }

  async function loadStores(): Promise<void> {
    const { data } = await gpa.fetchStores()
    setStores(data)
  }

  return (
    <GpaContext.Provider
      value={{
        freights,
        freight,
        shippingCarriers,
        stores,
        loadFreights,
        loadFreight,
        postFreight,
        putFreight,
        loadShippingCarriers,
        loadStores,
      }}
    >
      {children}
    </GpaContext.Provider>
  )
}
