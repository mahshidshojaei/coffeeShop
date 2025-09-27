export default function Card({ image, title, desc, price }) {
  return (
    <div className="bg-[#fdfbf7] rounded-2xl shadow-sm hover:shadow-md border border-[#f1e8df] p-5 flex flex-col w-full max-w-[260px] transition">
      <div className="overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-36 object-cover hover:scale-105 transition duration-500"
        />
      </div>

      <h3 className="mt-3 text-lg font-semibold text-[#5c4033]">{title}</h3>
      <p className="text-sm text-[#7d8f69] mt-1">{desc}</p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-[#b08968] text-base font-medium">
          {price} تومان
        </span>
        <button className="px-4 py-1.5 bg-[#b08968] text-white text-sm rounded-full hover:bg-[#5c4033] transition">
          سفارش
        </button>
      </div>
    </div>
  );
}
