'use client'
import React from 'react'
import BackButton from '@/components/BackButton'
import { ShoppingBag } from 'lucide-react'
import { useUniqueProd } from '@/hooks/useUniqueProd'

interface Props {
  params: {
    id: string
  }
}

const Prod = ({ params }: Props) => {

  const { prod } = useUniqueProd(params.id)

  return (
    <div className='w-full flex flex-col gap-12'>
      <BackButton />

      <div className='w-full h-96 flex items-center justify-start gap-8'>
        <img
          src={prod?.image_url}
          className='h-full w-96 rounded-sm'
        />

        <div className='flex flex-col gap-6 text-gray-400'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-gray-500 text-3xl'>{prod?.name}</h1>
            <span className='font-bold text-sm'>R$ {prod?.price_in_cents}</span>
          </div>

          <div className='flex flex-col gap-2'>
            <h2 className='text-gray-500'>DESCRIÇÃO</h2>
            <span>{prod?.description}</span>
          </div>

          <button className='uppercase mt-32 p-2 text-gray-300 w-full bg-blue-base hover:bg-cyan-800 transition-colors inline-flex items-center justify-center gap-2'>
            <ShoppingBag size={18} />

            adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  )
}

export default Prod