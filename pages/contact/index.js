"use client";
import React from "react";
import dynamic from "next/dynamic";
import UserMessage from "@/components/UserMessage";
import { useRouter } from 'next/router'


const NeshanMap = dynamic(
  () => import("@neshan-maps-platform/react-openlayers").then((m) => m.default),
  { ssr: false }
);

export default function Contact() {
  const contactDetails = [
    { icon: "fa-solid fa-envelope", title: "ایمیل", dec: "info@example.com" },
    { icon: "fa-solid fa-phone", title: "شماره تماس", dec: "09365405000" },
    { icon: "fa-solid fa-location-dot", title: "آدرس", dec: "ویلاشهر" },
  ];
  const route=useRouter()
  return (
    <>
    <h1 className='text-end p-2'>Home{route.pathname}</h1>
    <div className="container p-4">
      <div className="flex flex-col items-center gap-1 text-center">
        <span className="text-xl font-semibold">تماس با ما</span>
        <span className="text-sm text-gray-600 leading-relaxed max-w-md">
          ما همیشه خوشحال می‌شویم که از شما بشنویم. برای هر سوال، پیشنهاد یا
          رزرو، با ما در تماس باشید.
        </span>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {contactDetails.map((item, index) => (
          <div
            key={index}
            className="relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px]"
          >
            <span className="border border-[#816c57] w-[40px] h-[40px] absolute top-[-4px] right-[-4px] -z-10 rounded-tr-[3px] bg-[#816c57]"></span>
            <div className="flex flex-col items-center justify-center gap-1 border border-[#816c57] w-full h-full relative bg-white rounded-tr-[3px]">
              <i className={`${item.icon} text-[18px] sm:text-[20px]`}></i>
              <span className="text-[15px] sm:text-[16px] mt-1">
                {item.title}
              </span>
              <span className="text-[13px] text-zinc-600 text-center">
                {item.dec}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-6 mt-8 items-center">
        <div className="w-full">
          <UserMessage/>
        </div>
        <div className="h-[300px] w-full overflow-hidden shadow">
          <NeshanMap
            mapKey="web.0538669294a34022a59e1dcac53d8b89"
            center={{ latitude: 35.7665394, longitude: 51.4749824 }}
            zoom={14}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </div>
    </div>
    </>
  );
}
