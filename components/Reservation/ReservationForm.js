import React from 'react'
import { useState } from 'react';

export default function ReservationForm() {
        const [people, setPeople] = useState("");
        const options = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
        <div className="w-[500px] bg-[#f1e8df] p-8 rounded-md">
        <form className="flex flex-col gap-4">
          <div className="flex justify-between gap-2">
            <div className="flex flex-col w-full gap-[2px]">
              <label
                htmlFor="name"
                className="text-[14px] font-medium text-gray-700"
              >
                نام و نام خانوادگی
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="border rounded-lg p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-brown-400"
              />
            </div>
            <div className="flex flex-col w-full gap-[2px]">
              <label
                htmlFor="phone"
                className="text-[14px] font-medium text-gray-700"
              >
                شماره تماس
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="09365405000"
                required
                className="border rounded-lg p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-brown-400"
              />
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <div className="flex flex-col w-full gap-[2px]">
              <label
                htmlFor="date"
                className="text-[14px] font-medium text-gray-700"
              >
                تاریخ
              </label>
              <input
                type="text"
                placeholder="1404/07/01"
                className="border rounded-lg px-2 py-[9px] mt-1 focus:outline-none focus:ring-1 focus:ring-brown-400 text-end"
              />
            </div>
            <div className="flex flex-col w-full gap-[2px]">
              <label
                htmlFor="time"
                className="text-[14px] font-medium text-gray-700"
              >
                ساعت
              </label>
              <input
                type="time"
                className="border rounded-lg p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-brown-400"
              />
            </div>
            <div className="flex flex-col w-full gap-[2px]">
              <label
                htmlFor="date"
                className="text-[14px] font-medium text-gray-700"
              >
                تعداد نفرات
              </label>
              <select
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                className="border rounded-lg  mt-1 focus:outline-none focus:ring-1 focus:ring-brown-400 text-[13px] py-[11px] w-[100px]"
              >
                <option value="">تعداد نفرات</option>
                {options.map((num) => (
                  <option key={num} value={num}>
                    {num} نفر
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button className="w-full bg-[#a97f5b] p-3 text-[#fffff9] rounded-lg">
            رزرو میز
          </button>
        </form>
      </div>
  )
}
