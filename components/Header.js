import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const navLinks = [
    { name: "خانه", href: "/" },
    { name: "درباره", href: "/about" },
    { name: "خدمات", href: "/service" },
    { name: "منو", href: "/menu" },
    { name: "تماس باما", href: "/contact" },
  ];
  return (
    <div className="bg-[#816c57]">
      <nav className="flex justify-between p-2 container items-center">
        <ul className="flex text-zinc-100 text-[14px]">
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
