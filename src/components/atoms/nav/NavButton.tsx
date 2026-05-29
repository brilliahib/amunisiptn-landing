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

interface NavButtonProps {
  links: NavLinkItem[];
  isScrolled?: boolean;
}

export default function NavButton({ links, isScrolled }: NavButtonProps) {
  return (
    <>
      {/* Desktop CTA */}
      <div className="hidden items-center gap-3 md:flex">
        <Button
          size="default"
          className={`rounded-full text-sm font-semibold transition-all duration-300 ${
            isScrolled
              ? "border-2 border-white bg-white text-primary hover:bg-[#3b82f6] hover:text-[#1E293B] hover:border-[#3b82f6]"
              : "border-2 border-primary bg-primary text-white hover:bg-primary/90"
          }`}
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
              className={`transition-colors duration-300 ${
                isScrolled
                  ? "text-white hover:bg-white/15 hover:text-white"
                  : "text-foreground hover:bg-foreground/10 hover:text-foreground"
              }`}
            >
              <Menu className="h-5 w-5" strokeWidth={2.5} />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="top"
            className="flex flex-col gap-6 rounded-[2rem] border-2 border-[#1E293B] bg-white px-6 pb-8 pt-6 shadow-[4px_4px_0px_0px_#1E293B] data-[side=top]:inset-x-3 data-[side=top]:top-4 data-[side=top]:w-auto sm:max-w-sm"
          >
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
