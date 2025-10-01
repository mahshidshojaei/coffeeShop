import React from "react";

export default function UserMessage() {
  return (
    <form className="flex flex-col gap-2">
      <div className="flex flex-col w-full">
        <label
          htmlFor="name"
          className="text-sm font-medium text-zinc-600 mb-1"
        >
          نام و نام خانوادگی
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="border  p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#816c57]"
        />
      </div>

      <div className="flex flex-col w-full">
        <label
          htmlFor="email"
          className="text-sm font-medium text-zinc-600 mb-1"
        >
          ایمیل
        </label>
        <input
          type="email"
          id="email"
          name="email"
          dir="ltr"
          required
          className="border  p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#816c57]"
        />
      </div>

      <div className="flex flex-col w-full">
        <label
          htmlFor="subject"
          className="text-sm font-medium text-zinc-600 mb-1"
        >
          موضوع
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="border  p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#816c57]"
        />
      </div>

      <div className="flex flex-col w-full">
        <label
          htmlFor="message"
          className="text-sm font-medium text-zinc-600 mb-1"
        >
          پیام
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="border  p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#816c57] resize-none"
          placeholder="متن پیام خود را بنویسید..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-[#a1967c] text-white font-medium py-2 hover:bg-[#a9826c] transition-colors"
      >
        ارسال پیام
      </button>
    </form>
  );
}
