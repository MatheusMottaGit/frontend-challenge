'use client'
import { useFilterContext } from '@/hooks/useFilterContext'
import { Types } from '@/types/filter'
import React from 'react'

const MenuTypes = () => {

  const { type, setType } = useFilterContext()

  const options = [
    { id: 1, type: Types.ALL, title: 'Todos os produtos' },
    { id: 2, type: Types.TSHIRTS, title: 'Camisetas' },
    { id: 3, type: Types.MUGS, title: 'Canecas' },
  ]

  function changeType(type: Types) {
    setType(type)
  }

  return (
    <>
      <ul className='flex items-center gap-4'>
        {
          options.map(option => {
            return (
              <li key={option.id} className={`${option.type === type ? 'border-b-4 border-b-orange-low text-black' : ''} uppercase cursor-pointer hover:text-black transition-colors p-1`} onClick={() => { changeType(option.type) }}>
                {option.title}
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default MenuTypes