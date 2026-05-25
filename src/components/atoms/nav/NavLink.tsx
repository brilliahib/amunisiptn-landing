import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
}

export default function NavLink({ href, label }: NavLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "relative font-medium text-white/75 transition-colors duration-200",
        "hover:text-white",
        "after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-white after:transition-all after:duration-300",
        "hover:after:w-full",
      )}
    >
      {label}
    </a>
  );
}
