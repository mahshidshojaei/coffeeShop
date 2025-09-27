import React from 'react'

export default function AboutFeature({icon,title,dec}) {
  return (
        <div className="flex gap-4 items-center ">
        <i class={`${icon} text-[21px] text-[#442115]`}></i>
        <div className="flex flex-col gap-2">
          <span className="font-bold">{title}</span>
          <span className="text-[14px] text-zinc-700">
                {dec}
          </span>
        </div>
      </div>
  )
}
