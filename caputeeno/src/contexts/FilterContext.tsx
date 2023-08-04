'use client'
import { Categories, Types } from "@/types/filter";
import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
  type: Types.ALL,
  category: Categories.NEWEST,
  setType: (type: Types) => { },
  setCategory: (categorie: Categories) => { }
})

export const FilterProvider = ({ children }: { children: ReactNode }) => {

  const [type, setType] = useState(Types.ALL)
  const [category, setCategory] = useState(Categories.MOST)

  return (
    <FilterContext.Provider value={{ type, setType, category, setCategory }}>
      {children}
    </FilterContext.Provider>
  )
}