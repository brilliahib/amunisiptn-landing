import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

export default function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        vertical ? "flex-col" : "flex-row",
        className,
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 justify-around [gap:var(--gap)]",
            vertical ? "flex-col" : "flex-row",

            // hover pause
            pauseOnHover && "group-hover:[animation-play-state:paused]",

            // direction
            {
              "animate-marquee": !vertical && !reverse,
              "animate-marquee-reverse": !vertical && reverse,
              "animate-marquee-vertical": vertical && !reverse,
              "animate-marquee-vertical-reverse": vertical && reverse,
            },
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
