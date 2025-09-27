import React from 'react'
import TestimonialCard from './TestimonialCard'

export default function TestimonialsSection() {
  return (
        <div className="mt-10 bg-[#f7ead9] flex flex-col items-center p-10 gap-10">
        <div className="flex flex-col items-center gap-1">
          <div className="flex gap-4 items-center gap-2">
            <i class="fa-solid fa-mug-saucer text-[#d2691e] text-xl"></i>
            <span className="text-[#3e2723] text-[21px] font-semibold">
              نظرات مشتریان عزیز
            </span>
            <i class="fa-solid fa-mug-saucer text-[#d2691e] text-xl"></i>
          </div>
          <span className="text-[#3e2723] text-[15px]">
            صدای مشتریان دوست‌داشتنی ما که کافه را به گوشه‌ای گرم و صمیمی تبدیل
            کرده‌اند.
          </span>
        </div>
        <div className="container flex gap-8 overflow-x-auto scrollbar-hide">
          <TestimonialCard
            picSrc="./images/1u.png"
            name="مهسا شجاعی"
            dec="«این کافه دقیقاً همون جاییه که وقتی دنبال آرامش و انرژی مثبت
              می‌گردم، سراغش میام. عطر قهوه‌ی تازه‌دم، نور گرم و دلنشین و
              صندلی‌های راحت، فضایی ساخته که هم برای کار و مطالعه عالیه و هم
              برای گذروندن لحظات صمیمی با دوستان. شیرینی‌هاش هم واقعاً معرکه‌ست
              و هر بار تجربه‌ی جدیدی رو می‌سازه.»"
            fav='"بهترین انتخاب من همیشه وانیلا لاته و کروسان بوده"'
          />
          <TestimonialCard
            picSrc="./images/1u.png"
            name="سما روحی"
            dec="«این کافه دقیقاً همون جاییه که وقتی دنبال آرامش و انرژی مثبت
              می‌گردم، سراغش میام. عطر قهوه‌ی تازه‌دم، نور گرم و دلنشین و
              صندلی‌های راحت، فضایی ساخته که هم برای کار و مطالعه عالیه و هم
              برای گذروندن لحظات صمیمی با دوستان. شیرینی‌هاش هم واقعاً معرکه‌ست
              و هر بار تجربه‌ی جدیدی رو می‌سازه.»"
            fav='"بهترین انتخاب من همیشه وانیلا لاته و کروسان بوده"'
          />
          <TestimonialCard
            picSrc="./images/3u.png"
            name="کیمیا باصری"
            dec="«این کافه دقیقاً همون جاییه که وقتی دنبال آرامش و انرژی مثبت
              می‌گردم، سراغش میام. عطر قهوه‌ی تازه‌دم، نور گرم و دلنشین و
              صندلی‌های راحت، فضایی ساخته که هم برای کار و مطالعه عالیه و هم
              برای گذروندن لحظات صمیمی با دوستان. شیرینی‌هاش هم واقعاً معرکه‌ست
              و هر بار تجربه‌ی جدیدی رو می‌سازه.»"
            fav='"بهترین انتخاب من همیشه وانیلا لاته و کروسان بوده"'
          />
        </div>
      </div>
  )
}
