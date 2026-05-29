import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        /* ── Playful: Candy Button (primary CTA) ── */
        default:
          "bg-primary text-white border-2 border-[#1E293B] rounded-full shadow-pop anim-bounce hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#1E293B] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_#1E293B]",
        /* ── Playful: Outline / Secondary ── */
        outline:
          "bg-transparent text-foreground border-2 border-[#1E293B] rounded-full anim-bounce hover:bg-[#3b82f6] active:scale-95",
        /* ── Ghost ── */
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-lg",
        /* ── Destructive ── */
        destructive:
          "bg-destructive text-white border-2 border-[#1E293B] rounded-full shadow-pop anim-bounce hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#1E293B]",
        /* ── Link ── */
        link: "text-primary underline-offset-4 hover:underline",
        /* ── Secondary (shadcn internal) ── */
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
