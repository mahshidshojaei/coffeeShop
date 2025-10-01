import AboutSection from '@/components/About/AboutSection'
import React from 'react'
import { useRouter } from 'next/router'

export default function About() {
  const route=useRouter()
  return (
    <>
      <h1 className='text-end p-2'>Home{route.pathname}</h1>
      <AboutSection/>
    </>
  )
}
