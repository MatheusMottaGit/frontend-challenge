import axios, { AxiosPromise } from "axios"
import { ProductResponse } from "./useFetch"
import { url } from "@/utils/fetchUrl"
import { useQuery } from "react-query"
import { useContext } from "react"
import { KeywordContext } from "@/contexts/KeywordContext"

const fetcher = (keyword: string): AxiosPromise<ProductResponse> => {
  return axios.post(url, {
    query: `
      query{
        allProducts(filter: {category: "${keyword}"}){
          id
          name
          price_in_cents
          image_url
        }
      }
    `
  })
}

export const useKeywords = () => {

  const { keyword } = useContext(KeywordContext)

  const { data } = useQuery({
    queryFn: () => fetcher(keyword),
    queryKey: ['filtered', keyword]
  })

  return {
    filtered: data?.data.data.allProducts
  }
}