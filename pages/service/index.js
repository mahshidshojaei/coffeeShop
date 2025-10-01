import ServicesSection from '@/components/Service/ServicesSection'
import React from 'react'
import { useRouter } from 'next/router'

export default function Service() {
  const route=useRouter()
  return (
    <>
      <h1 className='text-end p-2'>Home{route.pathname}</h1>
      <ServicesSection/>
    </>
    
  )
}
