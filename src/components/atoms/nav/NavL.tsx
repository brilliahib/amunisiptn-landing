import Image from "next/image";
import Link from "next/link";

interface NavLProps {
  isScrolled?: boolean;
}

export default function NavL({ isScrolled }: NavLProps) {
  return (
    <div className="flex shrink-0 items-center">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/logo/logo.png"
          alt="Amunisi PTN"
          width={120}
          height={40}
          className={`transition-all duration-300 ${
            isScrolled ? "brightness-0 invert h-7 w-auto" : "h-8 w-auto md:h-9"
          }`}
        />
      </Link>
    </div>
  );
}
