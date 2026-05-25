import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingCTA() {
  return (
    <section className="relative overflow-hidden border-y-2 border-[#1E293B] bg-primary py-20 md:py-28">
      {/* ── Dot grid overlay ── */}
      <div
        className="bg-dot-grid absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1.5px, transparent 1.5px)",
        }}
        aria-hidden="true"
      />

      {/* ── Confetti shapes ── */}
      <div
        className="animate-float absolute -left-12 top-8 h-24 w-24 rounded-full border-2 border-white/30 opacity-30"
        style={{ backgroundColor: "#F472B6", animationDelay: "0s" }}
        aria-hidden="true"
      />
      <div
        className="animate-float absolute -right-8 bottom-12 h-20 w-20 rotate-45 border-2 border-white/30 opacity-30"
        style={{ backgroundColor: "#FBBF24", animationDelay: "1s" }}
        aria-hidden="true"
      />
      <div
        className="animate-float absolute right-1/4 top-6 h-10 w-10 rounded-full border-2 border-white/30 opacity-20"
        style={{ backgroundColor: "#34D399", animationDelay: "0.5s" }}
        aria-hidden="true"
      />
      <div
        className="animate-float absolute left-1/3 bottom-8 h-8 w-8 border-0 opacity-20"
        style={{
          backgroundColor: "#FBBF24",
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          animationDelay: "1.5s",
        }}
        aria-hidden="true"
      />

      <div className="pad-x relative z-10 text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
          <span className="text-sm font-bold text-white/90">
            🚀 Mulai Gratis, Tanpa Kartu Kredit
          </span>
        </div>

        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
          Siap Masuk PTN Impianmu?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80">
          Bergabunglah dengan 4900+ peserta yang sudah mempersiapkan UTBK-SNBT
          bersama Amunisi PTN. Try out mingguan pertamamu gratis!
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            size="xl"
            className="border-2 border-white bg-white text-primary hover:bg-[#FBBF24] hover:text-[#1E293B] hover:border-[#1E293B]"
            asChild
          >
            <Link
              href="https://app.amunisiptn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Mulai Try Out Sekarang
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                <ArrowRight
                  className="h-3.5 w-3.5 text-white"
                  strokeWidth={2.5}
                />
              </span>
            </Link>
          </Button>
          <Button
            size="xl"
            className="border-2 border-white bg-transparent text-white hover:bg-white/10"
            asChild
          >
            <a href="#harga">Lihat Paket Harga</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
