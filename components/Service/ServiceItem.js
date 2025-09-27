import React from 'react'

export default function ServiceItem({title,dec,icon}) {
  return (
        <div className="relative bg-gradient-to-b from-[#F5E0C3] to-[#FFF8F0] rounded-md shadow-lg p-6 flex flex-col items-center">
        <div className="absolute w-20 h-20 rounded-full overflow-hidden shadow-md right-0 top-[-35px] flex justify-center items-center pt-6">
        <i className={`${icon} text-[20px]`}></i>
        </div>
        <h2 className="text-[17px] font-bold text-[#5D4037]">
           {title}
        </h2>
        <p className="text-sm text-[#7B5E57] mt-2 leading-relaxed">
                {dec}
        </p>
      </div>
  )
}
