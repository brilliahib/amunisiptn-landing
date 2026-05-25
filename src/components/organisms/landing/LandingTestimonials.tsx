import { Star } from "lucide-react";
import Marquee from "@/components/ui/marquee";

interface Testimonial {
  name: string;
  role: string;
  ptn: string;
  quote: string;
  rating: number;
  accentColor: string;
}

const topTestimonials: Testimonial[] = [
  {
    name: "Rizki Ramadhan",
    role: "Siswa SMA",
    ptn: "Diterima di UI — Teknik Informatika",
    quote:
      "Melalui try out di Amunisi PTN, saya dapat mengenali kelemahan saya dengan lebih jelas. Nilai saya meningkat 80 poin dari try out pertama hingga UTBK sesungguhnya. Alhamdulillah, saya diterima di UI.",
    rating: 5,
    accentColor: "#004aab",
  },
  {
    name: "Salsabila Putri",
    role: "Siswa SMA",
    ptn: "Diterima di UGM — Kedokteran",
    quote:
      "Pembahasan videonya sangat lengkap dan mudah dipahami. Try out mingguan gratis juga sangat membantu saya berlatih secara rutin. Saya sangat merekomendasikan platform ini.",
    rating: 5,
    accentColor: "#F472B6",
  },
  {
    name: "Farhan Maulana",
    role: "Siswa SMA",
    ptn: "Diterima di ITB — Teknik Sipil",
    quote:
      "Fitur prediksi nilai membuat saya lebih tenang dalam menghadapi UTBK. Peringkat nasional juga menjadi motivasi untuk terus meningkatkan kemampuan. Dalam dua bulan, skor saya meningkat signifikan.",
    rating: 5,
    accentColor: "#FBBF24",
  },
  {
    name: "Dian Kusuma",
    role: "Siswa SMA",
    ptn: "Diterima di UNAIR — Farmasi",
    quote:
      "Platform ini merupakan yang paling lengkap yang pernah saya gunakan. Soal-soalnya sangat relevan dengan UTBK, dan analisis performanya sangat detail. Sangat layak untuk dicoba.",
    rating: 5,
    accentColor: "#34D399",
  },
  {
    name: "Nabila Azzahra",
    role: "Siswa SMA",
    ptn: "Diterima di UNS — Psikologi",
    quote:
      "Saya merasa lebih terarah dalam belajar karena materi disusun dengan sangat rapi. Setiap latihan membuat saya semakin percaya diri menghadapi ujian.",
    rating: 5,
    accentColor: "#8B5CF6",
  },
  {
    name: "Muhammad Fikri",
    role: "Siswa SMA",
    ptn: "Diterima di UNDIP — Hukum",
    quote:
      "Bank soalnya sangat membantu untuk memahami pola soal UTBK. Latihan yang konsisten membuat saya lebih siap dan lebih disiplin dalam belajar.",
    rating: 5,
    accentColor: "#06B6D4",
  },
  {
    name: "Ayu Lestari",
    role: "Siswa SMA",
    ptn: "Diterima di IPB — Agribisnis",
    quote:
      "Saya sangat terbantu dengan pembahasan yang jelas dan mudah dipahami. Fitur evaluasinya juga membantu saya mengetahui materi mana yang perlu diperbaiki.",
    rating: 5,
    accentColor: "#EF4444",
  },
  {
    name: "Bagas Pratama",
    role: "Siswa SMA",
    ptn: "Diterima di UB — Ilmu Komunikasi",
    quote:
      "Amunisi PTN memberi saya gambaran yang lebih nyata tentang kemampuan saya. Dari sini, saya bisa menyusun strategi belajar yang lebih efektif.",
    rating: 5,
    accentColor: "#F97316",
  },
  {
    name: "Sarah Putri",
    role: "Siswa SMA",
    ptn: "Diterima di UNY — Pendidikan Matematika",
    quote:
      "Saya menyukai tampilan platform yang rapi dan mudah digunakan. Proses belajar menjadi lebih nyaman, dan hasil latihan saya meningkat dari waktu ke waktu.",
    rating: 5,
    accentColor: "#10B981",
  },
  {
    name: "Hafiz Nurrahman",
    role: "Siswa SMA",
    ptn: "Diterima di UNSOED — Akuntansi",
    quote:
      "Try out yang disediakan sangat membantu saya mengukur kesiapan diri. Saya jadi lebih fokus pada bagian yang masih lemah dan hasilnya sangat terasa.",
    rating: 5,
    accentColor: "#3B82F6",
  },
];

const bottomTestimonials: Testimonial[] = [
  {
    name: "Putri Khairunnisa",
    role: "Siswa SMA",
    ptn: "Diterima di UNAIR — Kedokteran Gigi",
    quote:
      "Saya merasa lebih siap menghadapi UTBK setelah rutin berlatih di platform ini. Penjelasan materinya sangat runtut dan mudah dipahami.",
    rating: 5,
    accentColor: "#EC4899",
  },
  {
    name: "Ardiansyah Putra",
    role: "Siswa SMA",
    ptn: "Diterima di ITS — Teknik Informatika",
    quote:
      "Fitur latihan dan pembahasan membantu saya memahami konsep dengan lebih baik. Hasil belajar saya menjadi jauh lebih terukur.",
    rating: 5,
    accentColor: "#14B8A6",
  },
  {
    name: "Miftahul Jannah",
    role: "Siswa SMA",
    ptn: "Diterima di UI — Manajemen",
    quote:
      "Saya senang karena tersedia banyak latihan yang relevan dengan kebutuhan UTBK. Hal ini membuat saya lebih percaya diri menjelang ujian.",
    rating: 5,
    accentColor: "#6366F1",
  },
  {
    name: "Rangga Saputra",
    role: "Siswa SMA",
    ptn: "Diterima di UGM — Ilmu Ekonomi",
    quote:
      "Platform ini sangat membantu saya mengatur prioritas belajar. Saya dapat melihat perkembangan nilai saya dengan lebih jelas dari waktu ke waktu.",
    rating: 5,
    accentColor: "#22C55E",
  },
  {
    name: "Siti Aisyah",
    role: "Siswa SMA",
    ptn: "Diterima di ITB — Arsitektur",
    quote:
      "Tampilan yang sederhana namun informatif membuat saya nyaman belajar. Setiap sesi latihan memberi manfaat yang nyata bagi persiapan saya.",
    rating: 5,
    accentColor: "#A855F7",
  },
  {
    name: "Naufal Hakim",
    role: "Siswa SMA",
    ptn: "Diterima di UNDIP — Teknik Mesin",
    quote:
      "Saya jadi lebih disiplin dalam belajar karena ada gambaran perkembangan yang jelas. Ini sangat membantu saya menjaga konsistensi.",
    rating: 5,
    accentColor: "#F59E0B",
  },
  {
    name: "Cahaya Permata",
    role: "Siswa SMA",
    ptn: "Diterima di IPB — Teknik Pangan",
    quote:
      "Materi yang tersedia sangat membantu saya memahami banyak topik penting. Saya merasa lebih siap menghadapi soal-soal yang menantang.",
    rating: 5,
    accentColor: "#0EA5E9",
  },
  {
    name: "Reza Aditya",
    role: "Siswa SMA",
    ptn: "Diterima di UB — Psikologi",
    quote:
      "Saya bisa belajar dengan lebih terarah karena setiap hasil latihan memiliki evaluasi yang jelas. Hal tersebut sangat membantu proses persiapan saya.",
    rating: 5,
    accentColor: "#F43F5E",
  },
  {
    name: "Intan Maharani",
    role: "Siswa SMA",
    ptn: "Diterima di UNPAD — Keperawatan",
    quote:
      "Pembahasannya sangat jelas dan tidak berbelit-belit. Saya jadi lebih mudah memahami setiap materi yang sebelumnya terasa sulit.",
    rating: 5,
    accentColor: "#84CC16",
  },
  {
    name: "Daffa Alfarizi",
    role: "Siswa SMA",
    ptn: "Diterima di UNS — Ilmu Hukum",
    quote:
      "Try out dan pembahasan yang tersedia sangat membantu saya mengenali pola soal. Hal ini membuat saya lebih siap saat menghadapi ujian sebenarnya.",
    rating: 5,
    accentColor: "#2563EB",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-current"
          style={{ color: "#FBBF24" }}
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="flex w-[250px] flex-col rounded-2xl border-2 border-[#1E293B] bg-white p-4 shadow-pop-card anim-bounce hover:-rotate-1 hover:scale-[1.02] hover:shadow-pop sm:w-[320px] sm:p-5 md:w-[340px]">
      <div
        className="mb-3 text-2xl font-black leading-none sm:text-3xl"
        style={{ color: t.accentColor }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <StarRating count={t.rating} />

      <p className="mt-3 flex-1 text-xs leading-relaxed text-foreground sm:text-sm">
        {t.quote}
      </p>

      <div className="mt-4 border-t-2 border-[#E2E8F0] pt-3 sm:mt-5 sm:pt-4">
        <div className="flex items-center gap-3">
          <div
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#1E293B] text-xs font-extrabold text-white sm:h-9 sm:w-9 sm:text-sm"
            style={{ backgroundColor: t.accentColor }}
          >
            {t.name[0]}
          </div>
          <div>
            <p className="text-xs font-bold text-foreground sm:text-sm">
              {t.name}
            </p>
            <p className="text-[10px] text-muted-foreground sm:text-xs">
              {t.role}
            </p>
          </div>
        </div>

        <div
          className="mt-3 rounded-lg border-2 border-[#1E293B] px-2.5 py-1 text-[10px] font-bold text-white sm:px-3 sm:py-1.5 sm:text-xs"
          style={{ backgroundColor: t.accentColor }}
        >
          🎓 {t.ptn}
        </div>
      </div>
    </div>
  );
}

function TestimonialsRow({
  items,
  reverse = false,
}: {
  items: Testimonial[];
  reverse?: boolean;
}) {
  return (
    <div className="relative overflow-hidden">
      <Marquee pauseOnHover reverse={reverse} className="[--duration:30s]">
        <div className="flex gap-6 pr-6">
          {items.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white" />
    </div>
  );
}

export default function LandingTestimonials() {
  return (
    <section id="testimoni" className="bg-white py-20 md:py-28">
      <div>
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-[#1E293B] bg-[#EEF4FF] px-4 py-1.5 shadow-pop">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Testimoni
            </span>
          </div>
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
            Mereka Sudah Lolos,{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Giliranmu!</span>
              <span
                className="absolute bottom-1 left-0 -z-0 h-3.5 w-full rounded-sm opacity-50"
                style={{ backgroundColor: "#F472B6" }}
                aria-hidden="true"
              />
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Ribuan peserta telah membuktikan efektivitas Amunisi PTN. Mari
            bergabung dan raih PTN impian Anda.
          </p>
        </div>

        <div className="space-y-6">
          <TestimonialsRow items={topTestimonials} reverse />
          <TestimonialsRow items={bottomTestimonials} />
        </div>
      </div>
    </section>
  );
}
