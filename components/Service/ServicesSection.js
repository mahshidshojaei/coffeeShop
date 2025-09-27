import React from 'react'
import ServiceItem from './ServiceItem'

export default function ServicesSection() {
  return (
        <div className="bg-[#816c57] p-4 mt-10 flex flex-col gap-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[#20120a] text-[25px]">خدمات ما</span>
          <span className="text-[#3e291f] text-[13px]">
            از قهوه‌های تخصصی تا تجربه‌های بی‌نظیر
          </span>
        </div>
        <div className="container grid grid-cols-3 gap-10">
          <ServiceItem
            title="قهوه های تخصصی"
            dec="انواع قهوه های تخصصی از سراسر جهان با طعم های منحصر به فرد"
            icon="fa-light fa-mug"
          />
          <ServiceItem
            title="شیرینی و کیک"
            dec="شیرینی‌ها و کیک‌های تازه و خوشمزه مناسب همراهی با قهوه"
            icon="fa-light fa-cake-candles"
          />
          <ServiceItem
            title="مکان مناسب دورهمی"
            dec="فضای دنج و آرام برای ملاقات دوستان و همکاران"
            icon="fa-light fa-users"
          />
        </div>
      </div>
  )
}
