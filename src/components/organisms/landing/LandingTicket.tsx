"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface TicketPackage {
  id: number;
  title: string;
  price: string;
  originalPrice: string;
  discount: string;
}

const ticketPackages: TicketPackage[] = [
  {
    id: 1,
    title: "1 Tiket Try Out Premium",
    price: "Rp20.000",
    originalPrice: "Rp25.000",
    discount: "Diskon 20%",
  },
  {
    id: 2,
    title: "3 Tiket Try Out Premium",
    price: "Rp59.000",
    originalPrice: "Rp75.000",
    discount: "Diskon 21%",
  },
  {
    id: 3,
    title: "5 Tiket Try Out Premium",
    price: "Rp98.000",
    originalPrice: "Rp125.000",
    discount: "Diskon 22%",
  },
  {
    id: 4,
    title: "10 Tiket Try Out Premium",
    price: "Rp170.000",
    originalPrice: "Rp250.000",
    discount: "Diskon 32%",
  },
  {
    id: 5,
    title: "20 Tiket Try Out Premium",
    price: "Rp340.000",
    originalPrice: "Rp500.000",
    discount: "Diskon 32%",
  },
];

export default function LandingTicket() {
  const topRow = ticketPackages.slice(0, 3);
  const bottomRow = ticketPackages.slice(3, 5);

  return (
    <section>
      <div className="pad-x">
        <div className="flex justify-center mb-10">
          <div className="bg-[#e8f0fe] rounded-2xl px-10 py-3">
            <h1 className="text-[1.65rem] font-extrabold text-[#1a3faa] tracking-tight">
              Harga Ticket Try Out
            </h1>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {topRow.map((pkg) => (
            <TicketCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {bottomRow.map((pkg) => (
            <TicketCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TicketCard({ pkg }: { pkg: TicketPackage }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.08)] bg-white border">
      <div className="bg-primary px-5 py-4 min-h-[150px] flex items-center justify-center">
        <p className="text-white font-bold text-[0.92rem] leading-snug">
          {pkg.title}
        </p>
      </div>

      <div className="px-5 py-4 flex flex-col gap-6">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-4">
            <p className="text-[#1a3faa] font-extrabold text-[1.25rem] leading-none">
              {pkg.price}
            </p>
            <p className="text-gray-400 line-through text-xs mt-1">
              {pkg.originalPrice}
            </p>
          </div>
          <span className="text-[0.7rem] font-semibold text-[#1a56db] bg-[#e8f0fe] rounded px-2 py-1 whitespace-nowrap mt-0.5">
            {pkg.discount}
          </span>
        </div>

        <Button>
          <Link href="https://app.amunisiptn.com" className="font-semibold">
            Beli Sekarang
          </Link>
        </Button>
      </div>
    </div>
  );
}
