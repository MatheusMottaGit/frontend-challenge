'use client'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { useFilterContext } from '@/hooks/useFilterContext'
import { Categories } from '@/types/filter'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Check, ChevronDown } from 'lucide-react'

const ProdCategories = () => {

  const { setCategory, category } = useFilterContext()

  const selectOptions = [
    { id: 1, title: 'Novidades', category: Categories.NEWEST },
    { id: 2, title: 'Preço: Maior-menor', category: Categories.HIGHER },
    { id: 3, title: 'Preço: Menor-maior', category: Categories.LOWER },
    { id: 4, title: 'Mais vendidos', category: Categories.MOST },
  ]

  function changeCategory(category: Categories) {
    setCategory(category)
  }

  return (
    <div className='flex items-center gap-2'>
      <DropdownMenu>
        <DropdownMenuTrigger className='outline-none'>Organizar por</DropdownMenuTrigger>
        <DropdownMenuContent>
          {
            selectOptions.map(option => {

              const selectCheck = option.category === category
              const isSelected = !!selectCheck

              return (
                <DropdownMenuItem key={option.id} onClick={() => { changeCategory(option.category) }} className='text-gray-400 cursor-pointer flex items-center gap-1'>
                  {
                    isSelected && (
                      <Check size={15} />
                    )
                  }
                  {option.title}
                </DropdownMenuItem>
              )
            })
          }
        </DropdownMenuContent>
      </DropdownMenu>

      <ChevronDown size={15} className='mt-[3px]' />
    </div>
  )
}

export default ProdCategories