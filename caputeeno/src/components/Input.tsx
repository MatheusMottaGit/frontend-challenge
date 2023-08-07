'use client'
import axios from 'axios'
import { Search } from 'lucide-react'
import React, { FormEvent, useState } from 'react'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string

const Input = () => {

  const [searchInput, setSearchInput] = useState('')

  const handleSearch = async (keywords: string) => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/text-davinci-002/completions',
        {
          prompt: keywords,
          max_tokens: 100
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
          }
        }
      )

      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    handleSearch(searchInput.trim())
  }

  return (
    <form onSubmit={handleSubmit} className='p-2 flex items-center justify-between rounded-lg bg-gray-100 text-gray-400 text-xs'>
      <input
        type="text"
        className='bg-transparent outline-none w-64'
        placeholder='Procurando por algo específico?'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <button type="submit">
        <Search size={15} />
      </button>
    </form>
  )
}

export default Input