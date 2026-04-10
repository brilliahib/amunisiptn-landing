"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

import NavButton from "@/components/atoms/nav/NavButton";
import NavL from "@/components/atoms/nav/NavL";
import NavLink from "@/components/atoms/nav/NavLink";
import Link from "next/link";

export interface Link {
  href: string;
  label: string;
  active?: boolean;
}

export default function Navbar() {
  const pathname = usePathname();

  const links = useMemo(
    () => [
      {
        href: "/",
        label: "Beranda",
        active: pathname.startsWith("/"),
      },
      {
        href: "/products",
        label: "Produk",
        active: pathname.startsWith("/products"),
      },
      {
        href: "/bussiness",
        label: "Bisnis",
        active: pathname.startsWith("/bussiness"),
      },
      {
        href: "/packages",
        label: "Paket Belajar",
        active: pathname.startsWith("/packages"),
      },
      {
        href: "/testimonials",
        label: "Testimoni",
        active: pathname.startsWith("/testimonials"),
      },
      {
        href: "/blog",
        label: "Blog",
        active: pathname.startsWith("/blog"),
      },
    ],
    [pathname],
  );

  return (
    <>
      <div className="sticky top-0 z-50 mb-0 w-full bg-background">
        <div className="pad-x-xl flex justify-between gap-8 bg-background py-3 md:gap-12">
          <NavL />
          <nav className="pad-x hidden items-center space-x-8 py-3 font-semibold md:flex">
            {links.map((link) => (
              <NavLink key={link.label} {...link} />
            ))}
          </nav>
          <NavButton />
        </div>
      </div>
    </>
  );
}
