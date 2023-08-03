import React from 'react'
import BackButton from '@/components/BackButton'
import axios from 'axios'
import { ProductResponse } from '@/hooks/useFetch'
import { url } from '@/utils/fetchUrl'
import Image from 'next/image'
import { ShoppingBag } from 'lucide-react'

interface Props {
  params: {
    id: string
  }
}

const Prod = async ({ params }: Props) => {

  const response = await axios.post(url, {
    query: `
      query {
        allProducts(filter: {ids: "${params.id}"}){
          id
          name
          price_in_cents
          image_url
          category
          description
        }
      }
    `
  })

  const prod: ProductResponse = response.data

  return (
    <div className='w-full flex flex-col gap-12'>
      <BackButton />

      <div className='w-full h-96 flex items-center justify-start gap-8'>
        <Image
          src={prod.data.allProducts[0].image_url}
          alt=''
          width={200}
          height={200}
          className='h-full w-96 rounded-sm'
        />

        <div className='flex flex-col gap-6 text-gray-400'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-gray-500 text-3xl'>{prod.data.allProducts[0].name}</h1>
            <span className='font-bold text-sm'>R$ {(prod.data.allProducts[0].price_in_cents / 100)}</span>
          </div>

          <div className='flex flex-col gap-2'>
            <h2 className='text-gray-500'>DESCRIÇÃO</h2>
            <span>{prod.data.allProducts[0].description}</span>
          </div>

          <button className='uppercase mt-32 p-2 text-gray-300 w-full bg-blue-base inline-flex items-center justify-center gap-2'>
            <ShoppingBag size={18} />

            adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  )
}

export default Prod