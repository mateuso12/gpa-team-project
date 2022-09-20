import { ApiResponse } from './apiResponse'

export interface Freight {
  id: number
  active: true
  carrierType: string
  carrierName: string
  siteCode: string
  carrierCode: number
}

export interface FreightsApiResponse extends ApiResponse<Freight[]> {}
