import { FilterContext } from "@/contexts/FilterContext"
import { useContext } from "react"

export const useFilterContext = () => {
  const context = useContext(FilterContext)
  return context
}
