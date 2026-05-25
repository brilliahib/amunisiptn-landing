"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Apa itu Amunisi PTN?",
    answer:
      "Amunisi PTN adalah platform try out online yang dirancang khusus untuk membantu siswa mempersiapkan UTBK-SNBT dan UM PTN. Tersedia ribuan soal latihan, simulasi try out real-time, pembahasan analitik, dan analitik performa yang membantu kamu belajar lebih efisien.",
  },
  {
    question: "Apakah ada try out gratis?",
    answer:
      "Ya! Amunisi PTN menyediakan try out gratis yang bisa kamu ikuti kapan saja tanpa perlu membeli tiket. Untuk akses try out premium dengan fitur lengkap seperti soal terbaru dan pembahasan analitik mendalam, kamu bisa membeli tiket sesuai kebutuhanmu.",
  },
  {
    question: "Bagaimana cara memulai try out?",
    answer:
      "Cukup daftar akun di app.amunisiptn.com, lalu kamu bisa langsung mengikuti try out gratis kapan saja. Untuk try out premium, beli tiket terlebih dahulu melalui menu pembelian di aplikasi. Proses pembayaran mudah dan cepat.",
  },
  {
    question: "Soal try out apakah sesuai dengan UTBK dan UM asli?",
    answer:
      "Soal kami disusun oleh tim tutor berpengalaman dan mengikuti kisi-kisi resmi UTBK-UM terbaru. Mencakup semua subtes: Tes Potensi Skolastik (TPS), Literasi Bahasa Indonesia, Literasi Bahasa Inggris, dan Penalaran Matematika.",
  },
  {
    question: "Apakah tiket bisa digunakan kapan saja?",
    answer:
      "Ya, tiket try out tidak memiliki batas waktu kedaluwarsa. Kamu bisa menggunakan tiket kapan saja sesuai jadwal belajarmu. Satu tiket digunakan untuk satu sesi try out premium.",
  },
  {
    question: "Bisakah saya melihat pembahasan soal setelah try out?",
    answer:
      "Tentu! Setelah menyelesaikan try out premium, kamu mendapatkan akses penuh ke pembahasan lengkap per soal. Pembahasan tersedia selamanya sehingga kamu bisa review kapanpun dibutuhkan.",
  },
];

function FAQAccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border-2 border-[#1E293B] bg-white anim-bounce",
        isOpen ? "shadow-pop" : "shadow-pop-card hover:shadow-pop",
      )}
    >
      <button
        id={`faq-btn-${index}`}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${index}`}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 rounded-2xl px-6 py-4 text-left"
      >
        <span className="text-base font-bold text-foreground">
          {item.question}
        </span>
        <span
          className={cn(
            "flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#1E293B] transition-transform duration-300",
            isOpen
              ? "rotate-180 bg-primary text-white"
              : "bg-white text-foreground",
          )}
        >
          <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
        </span>
      </button>

      <div
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-btn-${index}`}
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function LandingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="border-t-2 border-[#1E293B] bg-[#EEF4FF] py-20 md:py-28"
    >
      <div className="pad-x">
        <div className="mx-auto max-w-3xl">
          {/* Section header */}
          <div className="mb-14 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-[#1E293B] bg-white px-4 py-1.5 shadow-pop">
              <span className="text-sm font-bold uppercase tracking-widest text-primary">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
              Pertanyaan yang Sering{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Ditanyakan</span>
                <span
                  className="absolute bottom-1 left-0 -z-0 h-3.5 w-full rounded-sm opacity-50"
                  style={{ backgroundColor: "#34D399" }}
                  aria-hidden="true"
                />
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
              Masih ada pertanyaan? Hubungi kami melalui media sosial atau email
              di info@amunisiptn.com
            </p>
          </div>

          {/* Accordion items */}
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <FAQAccordionItem
                key={index}
                item={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => toggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
