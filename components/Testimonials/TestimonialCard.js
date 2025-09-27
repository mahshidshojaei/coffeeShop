import React from 'react'

export default function TestimonialCard({name, picSrc , dec, fav}) {
  return (
        <div className="min-w-[400px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] bg-[#ffffff] border border-[#f5deb3] flex flex-col p-4 rounded-xl gap-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src={picSrc}
                  alt=""
                  className="w-20 h-20 rounded-full object-cover border-4 border-[#f5deb3]"
                />
                <div className="flex flex-col gap-1">
                <span>{name}</span>
                <div className="flex">
              <i class="fa-solid fa-star text-[#facc15]"></i>
              <i class="fa-solid fa-star text-[#facc15]"></i>
              <i class="fa-solid fa-star text-[#facc15]"></i>
              <i class="fa-solid fa-star text-[#facc15]"></i>
              <i class="fa-solid fa-star text-[#facc15]"></i>
            </div>
                </div>
              </div>
              <i class="fa-regular fa-heart text-[#f5deb3] text-2xl"></i>
            </div>
            <p className="text-[14px] text-zinc-800">
              {dec}
            </p>
            <div className="flex items-center gap-1 text-[14px]">
            <i class="fa-solid fa-cookie-bite text-[#d2691e]"></i>
            :
            <span className="text-zinc-700 text-[13px]">{fav}</span>
            </div>
          </div>
  )
}
