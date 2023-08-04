'use client'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { useFilterContext } from '@/hooks/useFilterContext'
import { Categories } from '@/types/filter'
import React from 'react'

const ProdCategories = () => {

  const { setCategory } = useFilterContext()

  const selectOptions = [
    { id: 1, title: 'Novidades', value: 'Novidades', category: Categories.NEWEST },
    { id: 2, title: 'Preço: Maior-menor', value: 'Preço: Maior-menor', category: Categories.HIGHER },
    { id: 3, title: 'Preço: Menor-maior', value: 'Preço: Menor-maior', category: Categories.LOWER },
    { id: 4, title: 'Mais vendidos', value: 'Mais vendidos', category: Categories.MOST },
  ]

  function changeCategory(category: Categories) {
    setCategory(category)
  }

  return (
    <Select>
      <SelectTrigger className="outline-none w-44 border-none">
        <SelectValue placeholder='Organizar por' />
      </SelectTrigger>

      <SelectContent className="text-gray-400">
        {
          selectOptions.map(select => {
            return (
              <SelectItem key={select.id} value={select.value} onClick={() => { changeCategory(select.category) }}>
                {select.title}
              </SelectItem>
            )
          })
        }
      </SelectContent>
    </Select>
  )
}

export default ProdCategories