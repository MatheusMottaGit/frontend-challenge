'use client'
import { useFetch } from '@/hooks/useFetch'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Products = () => {

  const { products } = useFetch()

  return (
    <>
      {
        products?.map((prod) => {

          const priceInBRL = (prod.price_in_cents / 100)

          return (
            <Link key={prod.id} href={`/${prod.id}`} className='flex flex-col rounded-t-lg h-64 text-gray-400 text-sm hover:opacity-90 transition-all cursor-pointer min-[1629px]:w-full min-[1629px]:h-full'>
              <Image
                src={prod.image_url}
                alt=''
                width={200}
                height={200}
                className='rounded-t-lg h-full w-full'
              />

              <div className='bg-white p-2 flex flex-col gap-1 max-[1317px]:w-full max-[1317px]:text-xs'>
                {prod.name}

                <span className='bg-gray-200 w-full p-[0.3px]'></span>

                <span className='text-black font-bold'>
                  R$ {priceInBRL}
                </span>
              </div>
            </Link>
          )
        })
      }
    </>
  )
}

export default Products