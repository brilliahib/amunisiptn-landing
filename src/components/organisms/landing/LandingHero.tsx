"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function LandingHero() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <div className="relative w-full max-w-4xl">
          <div className="absolute -left-24 top-40 hidden -translate-x-4 md:block">
            <Image
              src={"/icons/utbk.png"}
              alt="UTBK"
              width={472}
              height={246}
              className="max-w-[120px] w-full"
            />
          </div>

          <div className="absolute -right-36 top-16 hidden translate-x-6 md:block">
            <Image
              src={"/icons/mandiri.png"}
              alt="Ujian Mandiri"
              width={472}
              height={246}
              className="max-w-[180px] w-full"
            />
          </div>

          <div className="mx-auto inline-flex max-w-full flex-wrap justify-center">
            <h1 className="text-3xl font-black leading-tight tracking-tight text-blue-800 sm:text-5xl lg:text-7xl">
              <div className="rounded-2xl bg-slate-100/80 px-4 sm:px-5">
                <span>Cara Seru</span> <span className="font-medium">dan</span>{" "}
                <span>Efektif</span>
              </div>
              <span className="font-medium">Untuk </span>
              <span className="font-black">Belajar Apa Saja!</span>
            </h1>
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-base font-semibold leading-relaxed text-blue-800 sm:text-lg">
            Tingkatkan prestasi akademik hingga masuk PTN impian,{" "}
            <br className="md:block hidden" /> capai cita-cita apa pun dengan
            belajar di Amunisi.ptn
          </p>

          <div className="mt-10 flex items-center justify-center gap-2">
            <Button size={"lg"} className="md:px-12 md:py-6">
              <Link href="https://app.amunisiptn.com" className="font-semibold">
                Mulai Belajar
              </Link>
            </Button>
            <Button
              size="lg"
              className="md:p-6 md:flex hidden items-center justify-center"
            >
              <Link
                href="https://app.amunisiptn.com"
                className="font-semibold flex items-center justify-center"
              >
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
