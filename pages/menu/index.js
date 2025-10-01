import MenuSection from "@/components/Menu/MenuSection";
import React from "react";
import { useRouter } from "next/router";

export default function Menu() {
  const route = useRouter();
  return (
    <div className="">
      <h1 className='text-end p-2'>Home{route.pathname}</h1>
      <MenuSection />
    </div>
  );
}
