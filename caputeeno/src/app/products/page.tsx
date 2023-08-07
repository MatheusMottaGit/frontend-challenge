'use client'
import { useKeywords } from '@/hooks/useKeywords'
import React from 'react'

const Filtered = () => {

  const { filtered } = useKeywords()

  return (
    <div>
      {
        filtered?.map(prod => (
          <p>{prod.name}</p>
        ))
      }
    </div>
  )
}

export default Filtered