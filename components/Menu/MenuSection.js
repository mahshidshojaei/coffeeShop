import React from 'react'
import Card from './Card'


export default function MenuSection() {
  return (
        <div className="container my-10 flex flex-col items-center gap-10">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-[#20120a] font-semibold text-xl">
            منو و قیمت‌ها
          </h1>
          <hr className="w-[120px] h-[2px] bg-[#fec372]" />
          <span className="text-[14px]">
            انتخاب‌های متنوع با قیمت‌های مناسب
          </span>
        </div>
        <div className="w-full flex flex-wrap gap-4">
          <Card
            image="./images/1p.png"
            title="اسپرسو"
            desc="قهوه خالص و پرطعم"
            price="۵۰۰۰۰"
          />
          <Card
            image="./images/2p.png"
            title="اسپرسو"
            desc="قهوه خالص و پرطعم"
            price="۵۰۰۰۰"
          />
          <Card
            image="./images/3p.png"
            title="اسپرسو"
            desc="قهوه خالص و پرطعم"
            price="۵۰۰۰۰"
          />
          <Card
            image="./images/4p.png"
            title="اسپرسو"
            desc="قهوه خالص و پرطعم"
            price="۵۰۰۰۰"
          />
          <Card
            image="./images/4p.png"
            title="اسپرسو"
            desc="قهوه خالص و پرطعم"
            price="۵۰۰۰۰"
          />
          <Card
            image="./images/4p.png"
            title="اسپرسو"
            desc="قهوه خالص و پرطعم"
            price="۵۰۰۰۰"
          />
        </div>
      </div>
  )
}
