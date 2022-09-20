import { ApiResponse } from './apiResponse'

export interface ShippingCarrier {
  id: number
  active: true
  carrierType: string
  carrierName: string
  carrierCode: number
}

export interface ShippingCarriersApiResponse
  extends ApiResponse<ShippingCarrier[]> {}
