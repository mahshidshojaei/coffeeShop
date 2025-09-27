import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const navLinks = [
    { name: "خانه", href: "/" },
    { name: "درباره", href: "/about" },
    { name: "خدمات", href: "/service" },
    { name: "منو", href: "/menu" },
    { name: "صفحات", href: "#" },
    { name: "تماس باما", href: "/contact" },
  ];
  return (
    <div className="bg-[#816c57]">
      <nav className="flex justify-between p-2 container items-center">
        <ul className="flex text-zinc-100 text-[14px]">
          {navLinks.map(item=>(
            <li className="p-2">
            <Link href={item.href}
            className={router.pathname===item.href ? 'text-orange-300' : 'text-zinc-100'}
            >{item.name}</Link>
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
