"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ── Floating notification cards (kreate-style) ── */
const notifications = [
  { name: "Aisyah", action: "lolos", campus: "UI Depok", emoji: "🎓" },
  { name: "Raka", action: "lolos", campus: "ITB Bandung", emoji: "🏆" },
  { name: "Dinda", action: "lolos", campus: "UGM Yogyakarta", emoji: "✨" },
  { name: "Farhan", action: "lolos", campus: "Unpad Bandung", emoji: "🔥" },
  { name: "Nabila", action: "lolos", campus: "Unair Surabaya", emoji: "🎯" },
];

/* ── Star SVG decoration (similar to kreate's star) ── */
function StarDecoration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="60"
      height="68"
      viewBox="0 0 60 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 0L37.5 22.5L60 30L37.5 37.5L30 60L22.5 37.5L0 30L22.5 22.5L30 0Z"
        fill="#3b82f6"
      />
      <path
        d="M45 8L48 18L58 21L48 24L45 34L42 24L32 21L42 18L45 8Z"
        fill="#004aab"
        opacity="0.8"
      />
    </svg>
  );
}

/* ── Floating notification card component ── */
function NotificationCard({
  name,
  campus,
  emoji,
  style,
  className,
}: {
  name: string;
  campus: string;
  emoji: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <div
      className={`w-fit rounded-xl bg-white p-2.5 sm:p-3 shadow-2xl ${className ?? ""}`}
      style={style}
    >
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-primary/10 sm:h-12 sm:w-12 lg:h-14 lg:w-14">
          <Image
            src="/images/logo/logo.png"
            alt="Amunisi PTN"
            width={40}
            height={40}
            className="h-7 w-7 object-contain sm:h-8 sm:w-8"
          />
        </div>
        <div className="flex items-center gap-1">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-xs font-bold text-foreground sm:text-sm lg:text-base">
                {name}
              </span>
              <span className="text-xs font-normal text-muted-foreground sm:text-sm">
                lolos
              </span>
              <span className="text-xs font-bold text-primary sm:text-sm lg:text-base">
                {campus}
              </span>
            </div>
          </div>
          <span className="ml-1 text-base">{emoji}</span>
        </div>
      </div>
    </div>
  );
}

export default function LandingHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Stagger animation on mount
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="beranda"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-clip"
      style={{ backgroundColor: "#eef4ff" }}
    >
      {/* ── Decorative shape: Top-left blob ── */}
      <div
        className="absolute left-0 top-[-60px] z-10 hidden md:block"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "scale(1)" : "scale(0)",
          transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s",
        }}
      >
        <svg
          width="380"
          height="280"
          viewBox="0 0 380 280"
          fill="none"
          className="h-auto w-[240px] drop-shadow-[0px_8px_0px_rgba(0,74,171,0.3)] md:w-[300px] lg:w-[380px]"
        >
          <path
            d="M0 40C0 17.9 17.9 0 40 0H280C340 0 380 60 360 120L320 240C310 268 284 280 256 280H40C17.9 280 0 262 0 240V40Z"
            fill="#004aab"
            opacity="0.12"
          />
          <rect
            x="40"
            y="60"
            width="180"
            height="28"
            rx="14"
            fill="#004aab"
            opacity="0.2"
          />
          <rect
            x="40"
            y="100"
            width="140"
            height="28"
            rx="14"
            fill="#004aab"
            opacity="0.15"
          />
          <rect
            x="40"
            y="140"
            width="220"
            height="28"
            rx="14"
            fill="#004aab"
            opacity="0.1"
          />
          <circle cx="300" cy="80" r="30" fill="#3b82f6" opacity="0.3" />
          <circle cx="280" cy="200" r="20" fill="#60a5fa" opacity="0.25" />
        </svg>
      </div>

      {/* ── Decorative shape: Top-right blob ── */}
      <div
        className="absolute right-[-20px] top-[-30px] z-10 hidden md:block"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "scale(1)" : "scale(0)",
          transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s",
        }}
      >
        <svg
          width="420"
          height="300"
          viewBox="0 0 420 300"
          fill="none"
          className="h-auto w-[280px] drop-shadow-[0px_8px_0px_rgba(244,114,182,0.4)] md:w-[340px] lg:w-[420px]"
        >
          <path
            d="M420 60C420 26.9 393 0 360 0H100C40 0 0 60 20 120L80 260C90 285 114 300 140 300H380C404 300 420 282 420 260V60Z"
            fill="#004aab"
            opacity="0.12"
          />
          <rect
            x="180"
            y="70"
            width="160"
            height="24"
            rx="12"
            fill="#004aab"
            opacity="0.2"
          />
          <rect
            x="200"
            y="110"
            width="140"
            height="24"
            rx="12"
            fill="#004aab"
            opacity="0.15"
          />
          <circle cx="120" cy="100" r="35" fill="#004aab" opacity="0.15" />
          <path
            d="M100 220L130 190L160 210L190 180"
            stroke="#60a5fa"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* ── Decorative shape: Bottom-right blob ── */}
      <div
        className="absolute bottom-[-10px] right-[-80px] z-10 hidden md:block"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "scale(1)" : "scale(0)",
          transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s",
        }}
      >
        <svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
          className="h-auto w-[250px] drop-shadow-[0px_8px_0px_rgba(30,41,59,0.15)] md:w-[320px] lg:w-[400px]"
        >
          <circle cx="200" cy="200" r="180" fill="#004aab" opacity="0.07" />
          <circle cx="200" cy="200" r="130" fill="#004aab" opacity="0.05" />
          <circle cx="200" cy="200" r="80" fill="#004aab" opacity="0.04" />
          <path
            d="M140 160L180 120L220 150L260 100"
            stroke="#3b82f6"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.35"
          />
          <circle cx="140" cy="160" r="6" fill="#3b82f6" opacity="0.5" />
          <circle cx="180" cy="120" r="6" fill="#3b82f6" opacity="0.5" />
          <circle cx="220" cy="150" r="6" fill="#3b82f6" opacity="0.5" />
          <circle cx="260" cy="100" r="6" fill="#3b82f6" opacity="0.5" />
        </svg>
      </div>

      {/* ── Decorative shape: Bottom-left (mascot area) ── */}
      <div
        className="absolute bottom-[20px] left-0 z-10 hidden md:block"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "scale(1)" : "scale(0)",
          transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s",
        }}
      >
        <svg
          width="320"
          height="320"
          viewBox="0 0 320 320"
          fill="none"
          className="h-auto w-[200px] md:w-[260px] lg:w-[320px]"
        >
          <rect
            x="20"
            y="120"
            width="200"
            height="180"
            rx="24"
            fill="#60a5fa"
            opacity="0.12"
          />
          <rect
            x="40"
            y="160"
            width="120"
            height="16"
            rx="8"
            fill="#60a5fa"
            opacity="0.2"
          />
          <rect
            x="40"
            y="190"
            width="80"
            height="16"
            rx="8"
            fill="#60a5fa"
            opacity="0.15"
          />
          <rect
            x="40"
            y="220"
            width="150"
            height="16"
            rx="8"
            fill="#60a5fa"
            opacity="0.12"
          />
          <circle cx="240" cy="80" r="50" fill="#3b82f6" opacity="0.1" />
        </svg>
      </div>

      {/* ── Mobile decorative shapes ── */}
      <div
        className="absolute right-[-10px] top-[-20px] z-10 md:hidden"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "scale(1)" : "scale(0)",
          transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s",
        }}
      >
        <svg width="180" height="120" viewBox="0 0 180 120" fill="none">
          <path
            d="M180 20C180 9 171 0 160 0H60C30 0 5 30 15 58L40 110C45 120 55 125 66 125H165C176 125 185 116 185 105V20Z"
            fill="#004aab"
            opacity="0.1"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-0 left-0 z-10 md:hidden"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "scale(1)" : "scale(0)",
          transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s",
        }}
      >
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
          <circle cx="50" cy="100" r="80" fill="#004aab" opacity="0.06" />
          <circle cx="50" cy="100" r="50" fill="#004aab" opacity="0.04" />
        </svg>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-20 flex h-fit w-full flex-col items-center px-4">
        {/* Badge — tilted like kreate's "BETA LAUNCH" */}
        <div
          className="relative z-50 mb-6 sm:mb-8"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "scale(1)" : "scale(0)",
            transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s",
          }}
        >
          <div className="inline-flex items-center rounded-full border-2 border-[#1E293B] bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#004aab] shadow-[2px_2px_0px_0px_#1E293B] md:px-5 md:py-2 md:text-sm">
            🎯 #1 PLATFORM TRY OUT PTN
          </div>
        </div>

        {/* ── Heading block — massive uppercase like kreate ── */}
        <div
          className="relative z-40 mb-6 text-center sm:mb-8 md:mb-10"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "scale(1)" : "scale(0)",
            transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s",
          }}
        >
          {/* Line 1: "SIAP LOLOS" in primary color */}
          <h1 className="mb-1 flex flex-col items-center justify-center gap-0 sm:mb-2 sm:flex-row sm:gap-5 md:gap-7">
            <span
              className="font-rubik text-5xl font-extrabold leading-none tracking-tighter text-primary sm:text-7xl md:text-8xl xl:text-9xl"
              style={{ textShadow: "4px 4px 0px #1E293B" }}
            >
              SIAP
            </span>
            <span
              className="font-rubik text-5xl font-extrabold leading-none tracking-tighter text-primary sm:text-7xl md:text-8xl xl:text-9xl"
              style={{ textShadow: "4px 4px 0px #1E293B" }}
            >
              LOLOS
            </span>
          </h1>

          {/* Line 2: "PTN IMPIAN" in dark + star decoration */}
          <div
            className="flex items-center justify-center gap-2 md:gap-3"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "scale(1)" : "scale(0)",
              transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s",
            }}
          >
            <span
              className="font-rubik text-5xl font-extrabold leading-none tracking-tighter text-foreground sm:text-7xl md:text-8xl xl:text-9xl"
              style={{ textShadow: "2px 2px 0px #93c5fd" }}
              aria-label="PTN Impian"
            >
              PTN
            </span>
            <span
              className="font-rubik text-5xl font-extrabold leading-none tracking-tighter text-foreground sm:text-7xl md:text-8xl xl:text-9xl"
              style={{ textShadow: "2px 2px 0px #93c5fd" }}
            >
              IMPIAN!
            </span>
            <StarDecoration className="h-10 w-9 animate-float sm:h-14 sm:w-12 md:h-[100px] md:w-[88px]" />
          </div>

          {/* ── Floating notification card (kreate-style, left side) ── */}
          <div
            className="absolute left-[-140px] top-[-40px] z-50 hidden -rotate-12 lg:block"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted
                ? "scale(1) rotate(-12deg)"
                : "scale(0) rotate(-12deg)",
              transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.7s",
            }}
          >
            <NotificationCard
              name={notifications[0].name}
              campus={notifications[0].campus}
              emoji={notifications[0].emoji}
            />
          </div>

          {/* ── Floating notification card (right side) ── */}
          <div
            className="absolute right-[-220px] bottom-[-80px] z-50 hidden rotate-6 lg:block xl:right-[-200px]"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted
                ? "scale(1) rotate(6deg)"
                : "scale(0) rotate(6deg)",
              transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.9s",
            }}
          >
            <NotificationCard
              name={notifications[1].name}
              campus={notifications[1].campus}
              emoji={notifications[1].emoji}
            />
          </div>
        </div>

        {/* Subtitle */}
        <p
          className="mx-auto mb-8 max-w-md text-center text-base text-muted-foreground sm:mb-10 sm:max-w-lg sm:text-lg md:mb-12 md:text-xl"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.5s ease-out 0.6s",
          }}
        >
          Persiapkan UTBK & Ujian Mandiri kamu
          <br className="hidden sm:block" />
          bersama ribuan siswa yang sudah lolos PTN.
        </p>

        {/* CTA Button — single large button like kreate */}
        <div
          className="mb-10 flex w-full max-w-sm flex-col items-center gap-3 px-4 sm:mb-16 sm:w-auto sm:flex-row sm:px-0"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "scale(1)" : "scale(0)",
            transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.7s",
          }}
        >
          <Button
            size="lg"
            className="w-full border-2 border-[#1E293B] bg-primary text-white shadow-pop transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[6px_6px_0px_0px_#1E293B] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_#1E293B] sm:h-14 sm:w-auto sm:px-10 sm:text-lg"
            asChild
          >
            <Link
              href="https://app.amunisiptn.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mulai Belajar Sekarang
              <ArrowRight className="ml-1 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
      {/* ── Stats counters at the very bottom ── */}
      <div
        className="absolute bottom-8 z-20 hidden w-full max-w-3xl items-center justify-center gap-10 md:flex lg:gap-20"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.5s ease-out 0.9s",
        }}
      >
        {[
          { value: "4.900+", label: "Followers Aktif" },
          { value: "1.000+", label: "Siswa Lolos PTN" },
          { value: "30+", label: "PTN Tersedia" },
        ].map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <span className="font-rubik text-4xl font-black tracking-tight text-primary lg:text-5xl">
              {value}
            </span>
            <span className="text-base font-semibold text-muted-foreground">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
