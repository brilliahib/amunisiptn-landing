"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import type { NavLinkItem } from "@/components/organisms/nav/Navbar";

function MobileLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <SheetClose asChild>
      <a
        href={href}
        className="flex items-center gap-3 rounded-xl border-2 border-transparent px-4 py-3 font-medium text-foreground/70 transition-all duration-200 hover:border-primary/20 hover:bg-primary/5 hover:text-primary"
      >
        {children}
      </a>
    </SheetClose>
  );
}

export default function NavButton({ links }: { links: NavLinkItem[] }) {
  return (
    <>
      {/* Desktop CTA */}
      <div className="hidden items-center gap-3 md:flex">
        <Button
          size="lg"
          className="border-2 border-white bg-white text-primary hover:bg-[#FBBF24] hover:text-[#1E293B] hover:border-[#FBBF24]"
          asChild
        >
          <Link
            href="https://app.amunisiptn.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mulai Try Out
          </Link>
        </Button>
      </div>

      {/* Mobile Hamburger */}
      <div className="flex items-center gap-2 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/15 hover:text-white"
            >
              <Menu className="h-5 w-5" strokeWidth={2.5} />
            </Button>
          </SheetTrigger>

          <SheetContent className="flex flex-col gap-6">
            <SheetHeader>
              <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
              <SheetClose asChild>
                <a href="#beranda" className="flex items-center justify-center">
                  <Image
                    src="/images/logo/logo.png"
                    alt="Amunisi PTN"
                    width={120}
                    height={120}
                    className="max-w-[120px]"
                  />
                </a>
              </SheetClose>
            </SheetHeader>

            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <MobileLink key={link.label} href={link.href}>
                  {link.label}
                </MobileLink>
              ))}
            </nav>

            <SheetFooter className="mt-auto">
              <Button size="lg" className="w-full" asChild>
                <Link
                  href="https://app.amunisiptn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mulai Try Out Sekarang
                </Link>
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
