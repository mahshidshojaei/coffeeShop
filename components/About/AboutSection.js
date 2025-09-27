import React from 'react'
import AboutFeature from './AboutFeature'
import Image from "next/image";

export default function AboutSection() {
  return (
        <div className="container flex flex-col items-center">
        <div className="flex flex-col gap-2 items-center w-[450px] py-10 ">
          <span className="text-[28px] font-bold">درباره نکست کافه</span>
          <span className="text-[14px] text-center text-zinc-700">
            ما با بیش از ۱۰ سال تجربه در صنعت قهوه، بهترین دانه‌های قهوه را از
            سراسر جهان انتخاب می‌کنیم
          </span>
        </div>
        <div className="grid grid-cols-2 w-full h-[400px]">
          <div className="relative w-full h-full">
            <Image
              src="/images/7c.png"
              alt="coffee"
              fill
              className="object-cover rounded-[8px]"
            />
          </div>
          <div className="flex flex-col gap-5 justify-center px-6">
            <AboutFeature icon='fa-solid fa-coffee-beans' title='قهوه ارگانیک' dec='دانه‌های قهوه ما با دقت و مهارت برشته می‌شوند تا بهترین طعم را ارائه دهند' />
            <AboutFeature icon='fa-regular fa-cup-togo' title='برشته‌کاری تخصصی' dec='دانه‌های قهوه ما با دقت و مهارت برشته می‌شوند تا بهترین طعم را ارائه دهند' />
            <AboutFeature icon='fa-solid fa-heart' title='خدمات دلسوزانه' dec='ما همیشه در کنار شما هستیم تا بهترین تجربه قهوه را داشته باشید' />
          </div>
        </div>
      </div>
  )
}
