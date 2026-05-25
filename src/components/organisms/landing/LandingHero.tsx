"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Users, value: "4.900+", label: "Followers Aktif" },
  { icon: BookOpen, value: "1.000+", label: "Siswa Lolos PTN" },
  { icon: Trophy, value: "30+", label: "PTN Tersedia" },
];

export default function LandingHero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden pb-0 pt-16 md:pt-24"
      style={{ backgroundColor: "#004aab" }}
    >
      {/* ── White dot grid on blue background ── */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      {/* ── Decorative large circles (lighter blue) ── */}
      <div
        className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full opacity-20"
        style={{ backgroundColor: "#60a5fa" }}
        aria-hidden="true"
      />
      <div
        className="absolute -left-24 bottom-0 h-[300px] w-[300px] rounded-full opacity-10"
        style={{ backgroundColor: "#93c5fd" }}
        aria-hidden="true"
      />

      {/* ── Confetti shapes ── */}
      <div
        className="animate-float absolute left-[6%] top-12 h-5 w-5 rounded-full border-2 border-white/30"
        style={{ backgroundColor: "#F472B6", animationDelay: "0s" }}
        aria-hidden="true"
      />
      <div
        className="animate-float absolute right-[8%] top-16 h-8 w-8 rotate-12 border-2 border-white/30"
        style={{ backgroundColor: "#FBBF24", animationDelay: "0.8s" }}
        aria-hidden="true"
      />
      <div
        className="animate-float absolute left-[12%] bottom-16 h-4 w-4 border-0"
        style={{
          backgroundColor: "#34D399",
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          animationDelay: "1.2s",
        }}
        aria-hidden="true"
      />
      <div
        className="animate-float absolute right-[14%] bottom-20 h-6 w-6 rounded-full border-2 border-white/20"
        style={{ backgroundColor: "#FBBF24", animationDelay: "0.4s" }}
        aria-hidden="true"
      />

      {/* ── Main content ── */}
      <div className="pad-x relative z-10">
        {/* Badge pill */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/15 px-4 py-2 backdrop-blur-sm">
            <span className="text-base">🎯</span>
            <span className="text-sm font-semibold text-white">
              #1 Platform Try Out PTN di Indonesia
            </span>
          </div>
        </div>

        {/* ── Heading block ── */}
        <div className="relative mx-auto max-w-4xl text-center">
          {/* Floating pill — kiri (UTBK) */}
          <div
            className="animate-float absolute -left-6 top-6 hidden items-center gap-1.5 rounded-full border-2 border-white/40 px-3 py-1.5 text-xs font-bold text-[#1E293B] shadow-pop md:flex"
            style={{ backgroundColor: "#34D399", animationDelay: "0.3s" }}
            aria-hidden="true"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 8L8 2M8 2H3M8 2V7"
                stroke="#1E293B"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            UTBK
          </div>

          {/* Floating pill — kanan (Ujian Mandiri) */}
          <div
            className="animate-float absolute -right-6 top-6 hidden items-center gap-1.5 rounded-full border-2 border-white/40 px-3 py-1.5 text-xs font-bold text-[#1E293B] shadow-pop md:flex"
            style={{ backgroundColor: "#34D399", animationDelay: "1s" }}
            aria-hidden="true"
          >
            Ujian Mandiri
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 8L2 2M2 2H7M2 2V7"
                stroke="#1E293B"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h1 className="mx-auto max-w-4xl text-center text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            <span className="mb-3 inline-block">
              <span className="inline-block rounded-2xl bg-white px-3 py-1.5 text-foreground sm:px-5">
                Cara Seru <span className="font-medium">dan</span> Efektif
              </span>
            </span>

            <span className="mt-2 block font-medium text-white">
              Persiapkan <span className="text-[#FBBF24]">UTBK-UM!</span>
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-lg text-center text-base font-medium leading-relaxed text-white/80 sm:text-lg">
          Tingkatkan nilaimu hingga lolos PTN impian,
          <br className="hidden sm:block" />
          capai cita-cita dengan try out berkualitas di Amunisi PTN.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            size="lg"
            className="border-2 border-white bg-white text-primary hover:bg-[#FBBF24] hover:text-[#1E293B] hover:border-[#FBBF24] shadow-[4px_4px_0px_rgba(255,255,255,0.3)] hover:shadow-[6px_6px_0px_rgba(251,191,36,0.5)]"
            asChild
          >
            <Link
              href="https://app.amunisiptn.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mulai Belajar
            </Link>
          </Button>
          <Button
            size="icon"
            className="h-12 w-12 flex-shrink-0 rounded-full border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary shadow-[4px_4px_0px_rgba(255,255,255,0.3)]"
            asChild
          >
            <Link
              href="https://app.amunisiptn.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Buka aplikasi Amunisi PTN"
            >
              <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
            </Link>
          </Button>
        </div>

        {/* ── Stats Bar — white cards floating on blue ── */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-2xl border-2 border-white/20 bg-white/15 px-6 py-4 backdrop-blur-sm anim-bounce hover:-translate-y-1"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-white/40 bg-white/20">
                <Icon className="h-5 w-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-xl font-extrabold text-white">{value}</p>
                <p className="text-sm text-white/70">{label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Wave bottom transition to next section ── */}
        <div className="relative mt-12 h-14 overflow-hidden">
          <svg
            viewBox="0 0 1440 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 w-full"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 56L1440 56L1440 16C1200 52 240 52 0 16L0 56Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
