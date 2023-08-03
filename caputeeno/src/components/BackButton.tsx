import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const BackButton = () => {
  return (
    <Link href='/' className='w-full flex items-center justify-start gap-2 text-gray-500 hover:opacity-50 transition-colors'>
      <ArrowLeft size={15} />

      Voltar
    </Link>
  )
}

export default BackButton