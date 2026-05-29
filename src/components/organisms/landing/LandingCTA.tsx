import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingCTA() {
  return (
    <section className="relative overflow-hidden border-y-4 border-[#1E293B] bg-primary py-20 md:py-32">
      {/* ── Dot grid overlay ── */}
      <div
        className="bg-dot-grid absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 2px, transparent 2px)",
        }}
        aria-hidden="true"
      />

      {/* ── Neobrutalist Floating Shapes ── */}
      <div
        className="animate-float absolute -left-12 top-10 h-32 w-32 rounded-full border-4 border-[#1E293B] bg-[#3b82f6] shadow-[8px_8px_0px_0px_#1E293B]"
        style={{ animationDelay: "0s" }}
        aria-hidden="true"
      />
      <div
        className="animate-float absolute -right-10 bottom-16 h-28 w-28 rotate-12 border-4 border-[#1E293B] bg-white shadow-[8px_8px_0px_0px_#1E293B]"
        style={{ animationDelay: "1s" }}
        aria-hidden="true"
      />
      <div
        className="animate-float absolute right-1/4 top-12 h-16 w-16 rounded-none border-4 border-[#1E293B] bg-[#60a5fa] shadow-[6px_6px_0px_0px_#1E293B]"
        style={{
          animationDelay: "0.5s",
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        }}
        aria-hidden="true"
      />

      <div className="pad-x relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex -rotate-2 items-center gap-2 rounded-full border-2 border-[#1E293B] bg-[#3b82f6] px-5 py-2 shadow-[4px_4px_0px_0px_#1E293B]">
          <Sparkles className="h-4 w-4 text-white" />
          <span className="text-sm font-extrabold uppercase tracking-widest text-white">
            Mulai Gratis, Tanpa Kartu Kredit
          </span>
        </div>

        <h2
          className="font-rubik mx-auto max-w-4xl text-4xl font-black uppercase leading-none tracking-tighter text-white sm:text-6xl lg:text-7xl"
          style={{ textShadow: "5px 5px 0px #1E293B" }}
        >
          SIAP MASUK PTN IMPIANMU?
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-lg font-bold text-white/90 sm:text-xl">
          Bergabunglah dengan 4900+ peserta yang sudah mempersiapkan UTBK-SNBT
          bersama Amunisi PTN.
        </p>

        <div className="mt-12 flex w-full flex-col items-center justify-center gap-5 sm:w-auto sm:flex-row">
          <Button
            size="xl"
            className="w-full border-2 border-[#1E293B] bg-white text-primary shadow-[6px_6px_0px_0px_#1E293B] hover:-translate-x-1 hover:-translate-y-1 hover:bg-white hover:shadow-[8px_8px_0px_0px_#1E293B] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0px_0px_#1E293B] sm:w-auto"
            asChild
          >
            <Link
              href="https://app.amunisiptn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-extrabold uppercase"
            >
              Mulai Try Out Sekarang
              <ArrowRight className="h-5 w-5" strokeWidth={3} />
            </Link>
          </Button>
          <Button
            size="xl"
            className="w-full border-2 border-[#1E293B] bg-[#3b82f6] text-white shadow-[6px_6px_0px_0px_#1E293B] hover:-translate-x-1 hover:-translate-y-1 hover:bg-[#60a5fa] hover:shadow-[8px_8px_0px_0px_#1E293B] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0px_0px_#1E293B] sm:w-auto"
            asChild
          >
            <a href="#harga" className="font-extrabold uppercase">
              Lihat Paket Harga
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
