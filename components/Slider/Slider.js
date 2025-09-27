import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";

export default function Slider() {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      loop={true}
      className="mySwiper w-full h-[300px] md:h-[450px] lg:h-[650px] relative" // 👈 ارتفاع ریسپانسیو
    >
      <SwiperSlide className="relative w-full h-full">
        <Image
          src="/images/6c.png"
          alt="slide"
          fill
          className="object-cover"
          priority
        />
      </SwiperSlide>

      <SwiperSlide className="relative w-full h-full">
        <Image src="/images/6c.png" alt="slide" fill className="object-cover" />
      </SwiperSlide>

      <SwiperSlide className="relative w-full h-full">
        <Image src="/images/6c.png" alt="slide" fill className="object-cover" />
      </SwiperSlide>

      <SwiperSlide className="relative w-full h-full">
        <Image src="/images/6c.png" alt="slide" fill className="object-cover" />
      </SwiperSlide>

      <SwiperSlide className="relative w-full h-full">
        <Image src="/images/6c.png" alt="slide" fill className="object-cover" />
      </SwiperSlide>
      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none ">
        <div className="flex flex-col justify-center gap-2 container h-full">
        <span className="text-zinc-100 text-[35px]">بهترین قهوه شهر را تجربه کنید</span>
        <span className="text-zinc-50 text-[14px]">در نکست کافه، هر جرعه داستانی از عطر و طعم بی‌نظیر است</span>
        <div className="flex gap-2 mt-4">
          <Link href='/' className="text-zinc-50 pt-2  pb-3 px-6 bg-[#816c57] text-[13px] border border-[#816c57] rounded-[10px]">منوی ما</Link>
          <Link href='/' className="text-zinc-50 pt-2  pb-3 px-6  text-[13px] border border-zinc-50 rounded-[10px]">رزرو میز</Link>
          </div>
        </div>
      </div>
    </Swiper>
  );
}
