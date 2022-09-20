import axios from 'axios'
import {
  Freight,
  FreightsApiResponse,
  ShippingCarriersApiResponse,
  StoresApiResponse,
} from '../interfaces/gpa'
import { AxiosResponse } from '../interfaces/axios'

const gpaClient = axios.create({
  baseURL: 'https://9772-186-205-17-174.ngrok.io/fulfillment/site',
})

export const fetchFreights = async (): Promise<
  AxiosResponse<FreightsApiResponse>
> => {
  return await gpaClient.get('/freight', {})
}

export const fetchFreight = async (
  id: string,
): Promise<AxiosResponse<FreightsApiResponse>> => {
  return await gpaClient.get(`/freight/${id}`, {})
}

export const postFreight = async (
  payload: Freight,
): Promise<AxiosResponse<FreightsApiResponse>> => {
  return await gpaClient.post('/freight', payload)
}

export const putFreight = async (
  id: string,
  payload: Freight,
): Promise<AxiosResponse<FreightsApiResponse>> => {
  return await gpaClient.put(`/freight/${id}`, payload)
}

export const fetchShippingCarriers = async (): Promise<
  AxiosResponse<ShippingCarriersApiResponse>
> => {
  return await gpaClient.get('/shipping-carrier')
}

export const fetchStores = async (): Promise<
  AxiosResponse<StoresApiResponse>
> => {
  return await gpaClient.get('/getAllActive', {})
}
