import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const navLinks = [
    { name: "خانه", href: "/" },
    { name: "درباره", href: "/about" },
    { name: "خدمات", href: "/service" },
    { name: "منو", href: "/menu" },
    {
      name: "صفحات",
      href: "/",
      children: [
        { name: "رزرو", href: "/reserve" },
        { name: "نظرات", href: "/testimonials" },
      ],
    },
    { name: "تماس باما", href: "/contact" },
  ];

  return (
    <div className="bg-[#816c57]">
      <nav className="flex justify-between p-2 container items-center">
        <ul className="flex text-zinc-100 text-[14px]">
          {navLinks.map((item, index) => (
            <li key={index} className="relative group p-2">
              {item.children ? (
                <>
                  <button className="text-zinc-100">
                    {item.name}
                  </button>
                  <ul className="absolute left-[-50px] top-full hidden group-hover:block bg-[#faebd7] text-[#816c57] text-[15px] rounded shadow-lg min-w-[120px]">
                    {item.children.map((child, idx) => (
                      <li key={idx} className="p-2 hover:bg-[#6b5744] hover:text-[#faebd7] hover:rounded">
                        <Link href={child.href}>{child.name}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={item.href}
                  className={
                    router.pathname === item.href
                      ? "text-orange-300"
                      : "text-zinc-100"
                  }
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <a href="#" className="p-2">
          NEXT Coffee
        </a>
      </nav>
    </div>
  );
}
