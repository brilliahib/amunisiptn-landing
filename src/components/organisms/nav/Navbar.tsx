"use client";

import NavButton from "@/components/atoms/nav/NavButton";
import NavL from "@/components/atoms/nav/NavL";
import NavLink from "@/components/atoms/nav/NavLink";

export interface NavLinkItem {
  href: string;
  label: string;
}

const links: NavLinkItem[] = [
  { href: "#beranda", label: "Beranda" },
  { href: "#fitur", label: "Fitur" },
  { href: "#harga", label: "Harga" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  return (
    <>
      <div className="sticky top-0 z-50 w-full border-b-2 border-[#003d8f] bg-[#004aab]/95 backdrop-blur-md">
        <div className="pad-x flex items-center justify-between py-3">
          <NavL />
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <NavLink key={link.label} href={link.href} label={link.label} />
            ))}
          </nav>
          <NavButton links={links} />
        </div>
      </div>
    </>
  );
}
