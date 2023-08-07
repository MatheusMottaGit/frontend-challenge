'use client'
import { KeywordContext } from '@/contexts/KeywordContext'
import axios from 'axios'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useContext, useState } from 'react'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string

const Input = () => {

  // const { push } = useRouter()

  // const { setKeyword, keyword } = useContext(KeywordContext)

  // const [searchInput, setSearchInput] = useState('')

  // const handleTranslate = async (typedKeyword: string) => {
  //   try {
  //     const response = await axios.post(
  //       'https://api.openai.com/v1/engines/text-davinci-002/completions',
  //       {
  //         prompt: typedKeyword,
  //         max_tokens: 100
  //       },
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Authorization': `Bearer ${API_KEY}`
  //         }
  //       }
  //     )
  //     setKeyword(response.data.choices[0].text)

  //     push('/products')

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()
  //   handleTranslate(searchInput)
  // }

  return (
    <form className='p-2 flex items-center justify-between rounded-lg bg-gray-100 text-gray-400 text-xs'>
      <input
        type="text"
        className='bg-transparent outline-none w-64'
        placeholder='Procurando por algo específico?'
      // value={searchInput}
      // onChange={(e) => setSearchInput(e.target.value)}
      />

      <button type="submit">
        <Search size={15} />
      </button>
    </form>
  )
}

export default Input