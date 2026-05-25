"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TicketPackage {
  id: number;
  title: string;
  price: string;
  originalPrice: string;
  discount: string;
  perks: string;
  featured?: boolean;
  image: string;
}

const ticketPackages: TicketPackage[] = [
  {
    id: 1,
    title: "Paket Tryout Starter",
    price: "Rp59.000",
    originalPrice: "Rp75.000",
    discount: "Hemat 21%",
    image: "/images/ticket/starter.png",
    perks:
      "Dapatkan 3 tiket Try Out Premium untuk mencoba kualitas soal, mengukur skor awal, dan mengenali kelemahan sebelum mulai latihan lebih serius. Cocok untuk kamu yang baru ingin mulai persiapan UTBK/UM.",
  },
  {
    id: 2,
    title: "Paket Tryout Ambis",
    price: "Rp115.000",
    originalPrice: "Rp150.000",
    featured: true,
    discount: "Hemat 23%",
    image: "/images/ticket/ambis.png",
    perks:
      "Dapatkan 6 tiket Try Out Premium dengan harga lebih hemat, mencakup semua materi UTBK-SNBT dan simulasi UM-PTN. Ideal untuk latihan rutin dan persiapan intensif menuju UTBK/UM.",
  },
  {
    id: 3,
    title: "Paket Tryout Booster",
    price: "Rp219.000",
    originalPrice: "Rp300.000",
    discount: "Hemat 27%",
    image: "/images/ticket/booster.png",
    perks:
      "Dapatkan 12 tiket Try Out Premium dengan harga hemat untuk latihan intensif mencakup semua materi UTBK-SNBT dan simulasi UM-PTN. Ideal untuk persiapan serius menuju UTBK/UM.",
  },
  {
    id: 4,
    title: "Paket Tryout Ultimate",
    price: "Rp349.000",
    originalPrice: "Rp500.000",
    discount: "Hemat 30%",
    image: "/images/ticket/ultimate.png",
    perks:
      "Dapatkan akses eksklusif ke 20 tiket Try Out Premium, mencakup seluruh materi UTBK-SNBT dan simulasi UM-PTN. Dilengkapi fitur prediksi nilai dan analitik progres mendalam untuk persiapan UTBK/UM yang maksimal.",
  },
];

export default function LandingTicket() {
  return (
    <section id="harga" className="bg-[#EEF4FF] py-20 md:py-28">
      <div className="pad-x">
        {/* Section header */}
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-[#1E293B] bg-white px-4 py-1.5 shadow-pop">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Harga Tiket
            </span>
          </div>
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
            Pilih Paket{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Terbaik Untukmu</span>
              <span
                className="absolute bottom-1 left-0 -z-0 h-3.5 w-full rounded-sm opacity-50"
                style={{ backgroundColor: "#FBBF24" }}
                aria-hidden="true"
              />
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
            Beli tiket try out dan mulai persiapan UTBK-SNBT &amp; UM PTN
            sekarang. Semakin banyak, semakin hemat!
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ticketPackages.map((pkg) => (
            <TicketCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TicketCard({ pkg }: { pkg: TicketPackage }) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border-2 border-[#1E293B] bg-white anim-bounce ${
        pkg.featured
          ? "shadow-pop-featured hover:-rotate-1 hover:scale-[1.02]"
          : "shadow-pop-card hover:-rotate-1 hover:scale-[1.02]"
      }`}
    >
      {/* Featured star badge */}
      {pkg.featured && (
        <div
          className="absolute -right-4 -top-5 z-10 rotate-12 rounded-xl border-2 border-[#1E293B] px-3 py-1.5 text-xs font-extrabold text-[#1E293B] shadow-pop"
          style={{ backgroundColor: "#FBBF24" }}
          aria-label="Paket paling populer"
        >
          ⭐ TERPOPULER
        </div>
      )}

      {/* Package image — full width, rounded top */}
      <div className="overflow-hidden rounded-t-[14px]">
        <img
          src={pkg.image}
          alt={`Ilustrasi ${pkg.title}`}
          className="h-40 w-full object-cover"
        />
      </div>

      {/* Card header */}
      <div
        className="px-6 py-4"
        style={{ backgroundColor: pkg.featured ? "#004aab" : "#F1F5F9" }}
      >
        <p
          className={`text-base font-extrabold ${pkg.featured ? "text-white" : "text-foreground"}`}
        >
          {pkg.title}
        </p>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col gap-5 px-6 py-5">
        {/* Price */}
        <div className="flex items-end gap-3">
          <p
            className="text-2xl font-extrabold leading-none"
            style={{ color: "#004aab" }}
          >
            {pkg.price}
          </p>
          <p className="mb-0.5 text-xs text-muted-foreground line-through">
            {pkg.originalPrice}
          </p>
          <span
            className="ml-auto rounded border-2 border-[#004aab] px-2 py-0.5 text-[0.65rem] font-bold text-primary"
            style={{ backgroundColor: "#EFF6FF" }}
          >
            {pkg.discount}
          </span>
        </div>

        {/* Perks list */}
        <p className="text-sm text-muted-foreground">{pkg.perks}</p>

        {/* CTA */}
        <div className="mt-auto pt-2">
          <Button className="w-full" size="lg" asChild>
            <Link
              href="https://app.amunisiptn.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Beli Sekarang
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
