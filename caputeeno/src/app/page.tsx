'use client'
import MenuTypes from "@/components/MenuTypes"
import ProdCategories from "@/components/ProdCategories"
import Products from "@/components/Products"

export default function Home() {
  return (
    <>
      <div className='w-full flex items-center justify-between text-gray-400 text-sm'>
        <MenuTypes />

        <ProdCategories />
      </div>

      <section className="w-full grid grid-cols-6 gap-4 place-items-center">
        <Products />
      </section>
    </>
  )
}
