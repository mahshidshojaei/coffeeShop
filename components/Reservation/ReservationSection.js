import React from 'react'
import ReservationForm from './ReservationForm'

export default function ReservationSection() {
  return (
        <div className="bg-[#816c57] flex flex-col items-center p-10 gap-10">
        <div className="flex flex-col items-center">
          <h1 className="text-[25px] font-semibold">رزور آنلاین میز</h1>
          <span className="text-[#faebd7] text-[12px]">
            میز خود را از قبل رزرو کنید
          </span>
        </div>
        <ReservationForm/>
      </div>
  )
}
