import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { ChevronDown } from 'lucide-react'
import React from 'react'

const ProdCategories = () => {

  const selectOptions = [
    { title: 'Novidades', value: 'Novidades', id: 1 },
    { title: 'Preço: Maior-menor', value: 'Preço: Maior-menor', id: 2 },
    { title: 'Preço: Menor-maior', value: 'Preço: Menor-maior', id: 3 },
    { title: 'Mais vendidos', value: 'Mais vendidos', id: 4 },
  ]

  return (
    <Select>
      <SelectTrigger className="outline-none w-44 border-none">
        <SelectValue placeholder='Organizar por' />
      </SelectTrigger>

      <SelectContent className="text-gray-400">
        {
          selectOptions.map(select => {
            return (
              <SelectItem key={select.id} value={select.value}>
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