import { queriesAmount } from "@/utils/apiFilter"
import axios, { AxiosPromise } from "axios"
import { useQuery } from "react-query"
import { useFilterContext } from "./useFilterContext"
import { url } from "@/utils/fetchUrl"

export interface Product {
  id: string,
  name: string,
  price_in_cents: number,
  image_url: string
  category: string
  description: string
  sales: string
  created_at: string
}

export interface ProductResponse {
  data: {
    allProducts: Product[]
  }
}

export const fetcher = (query: string): AxiosPromise<ProductResponse> => {
  return axios.post(url, { query })
}

export const useFetch = () => {
  const { type, category } = useFilterContext()

  const query = queriesAmount(type, category)

  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ['products', type, category],
    staleTime: 1000 * 60 * 1
  })

  return {
    products: data?.data.data.allProducts
  }
}