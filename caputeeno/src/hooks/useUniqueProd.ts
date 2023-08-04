import axios, { AxiosPromise } from "axios"
import { url } from "@/utils/fetchUrl"
import { useQuery } from "react-query"
import { Product } from "./useFetch"

interface UniqueProdResponse {
  data: {
    allProducts: [
      prod: Product
    ]
  }
}

const fecther = (prod_id: string): AxiosPromise<UniqueProdResponse> => {
  return axios.post(url, {
    query: `
      query {
        allProducts(filter: {ids: "${prod_id}"}){
          id
          name
          price_in_cents
          image_url
          category
          description
        }
      }
    `
  })
}

export const useUniqueProd = (id: string) => {
  const { data } = useQuery({
    queryFn: () => fecther(id),
    queryKey: ['prod', id]
  })

  return {
    prod: data?.data.data.allProducts[0]
  }
}