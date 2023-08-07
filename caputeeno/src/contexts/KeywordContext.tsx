import { ReactNode, createContext, useState } from "react";

export const KeywordContext = createContext({
  keyword: '',
  setKeyword: (keyword: string) => { }
})

export const KeywordProvider = ({ children }: { children: ReactNode }) => {

  const [keyword, setKeyword] = useState('')

  return (
    <KeywordContext.Provider value={{ keyword, setKeyword }}>
      {children}
    </KeywordContext.Provider>
  )
}