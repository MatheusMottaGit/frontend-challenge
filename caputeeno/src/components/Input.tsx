import { Search } from 'lucide-react'
import React from 'react'

const Input = () => {
  return (
    <div className='p-2 flex items-center justify-between rounded-lg bg-gray-100 text-gray-400 text-xs'>
      <input
        type="text"
        className='bg-transparent outline-none w-64'
        placeholder='Procurando por algo específico?'
      />

      <Search size={15} />
    </div>
  )
}

export default Input