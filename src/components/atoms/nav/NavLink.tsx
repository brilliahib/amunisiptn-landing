import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
  isScrolled?: boolean;
}

export default function NavLink({ href, label, isScrolled }: NavLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "relative text-sm font-medium transition-colors duration-200",
        isScrolled
          ? "text-white/75 hover:text-white"
          : "text-foreground/60 hover:text-foreground",
        "after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:transition-all after:duration-300",
        isScrolled
          ? "hover:after:w-full after:bg-white"
          : "hover:after:w-full after:bg-primary",
      )}
    >
      {label}
    </a>
  );
}
