import ReservationSection from '@/components/Reservation/ReservationSection'
import React from 'react'
import { useRouter } from 'next/router'

export default function index() {
  const route=useRouter()
  return (
    <>
    <h1 className='text-end p-2'>Home{route.pathname}</h1>
    <ReservationSection/>
    </>
  )
}
