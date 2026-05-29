"use client";

import { useEffect, useState, useCallback } from "react";
import NavButton from "@/components/atoms/nav/NavButton";
import NavL from "@/components/atoms/nav/NavL";
import NavLink from "@/components/atoms/nav/NavLink";
import { cn } from "@/lib/utils";

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const scrollThreshold = 50;

    // Determine if we're past the top area
    setIsScrolled(currentScrollY > scrollThreshold);

    if (currentScrollY <= scrollThreshold) {
      // At the very top — always show transparent navbar
      setIsVisible(true);
    } else if (
      currentScrollY > lastScrollY &&
      currentScrollY > scrollThreshold
    ) {
      // Scrolling DOWN → show navbar
      setIsVisible(true);
    } else if (currentScrollY < lastScrollY) {
      // Scrolling UP → hide navbar
      setIsVisible(false);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 top-0 z-50 flex justify-center px-3 transition-all duration-500 ease-in-out",
        isScrolled ? "py-3" : "py-4 md:py-6",
      )}
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(-120%)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div
        className={cn(
          "flex w-full items-center justify-between px-4 transition-all duration-500 ease-in-out md:px-6",
          isScrolled
            ? "max-w-3xl rounded-full border-2 border-[#1E293B] bg-[#004aab] py-2 shadow-[2px_2px_0px_0px_#1E293B]"
            : "max-w-6xl bg-transparent py-1",
        )}
      >
        <NavL isScrolled={isScrolled} />
        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {links.map((link) => (
            <NavLink
              key={link.label}
              href={link.href}
              label={link.label}
              isScrolled={isScrolled}
            />
          ))}
        </nav>
        <NavButton links={links} isScrolled={isScrolled} />
      </div>
    </nav>
  );
}
