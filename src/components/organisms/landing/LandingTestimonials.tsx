import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  ptn: string;
  quote: string;
  rating: number;
  accentColor: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rizki Ramadhan",
    role: "Siswa SMA",
    ptn: "Diterima di UI — Teknik Informatika",
    quote:
      "Berkat try out di Amunisi PTN, aku bisa tau kelemahan aku di bagian mana. Naik 80 poin dari try out pertama sampai UTBK beneran. Alhamdulillah lolos UI!",
    rating: 5,
    accentColor: "#004aab",
  },
  {
    name: "Salsabila Putri",
    role: "Siswa SMA",
    ptn: "Diterima di UGM — Kedokteran",
    quote:
      "Pembahasan videonya super lengkap dan mudah dipahami. Try out mingguan gratis juga membantu banget buat rutin latihan. Recommended banget!",
    rating: 5,
    accentColor: "#F472B6",
  },
  {
    name: "Farhan Maulana",
    role: "Siswa SMA",
    ptn: "Diterima di ITB — Teknik Sipil",
    quote:
      "Fitur prediksi nilainya bikin lebih tenang ngadepin UTBK. Ranking nasional juga jadi motivasi buat terus improve. Skor aku naik signifikan dalam 2 bulan.",
    rating: 5,
    accentColor: "#FBBF24",
  },
  {
    name: "Dian Kusuma",
    role: "Siswa SMA",
    ptn: "Diterima di UNAIR — Farmasi",
    quote:
      "Platform paling lengkap yang pernah aku coba. Soalnya sesuai banget sama UTBK asli dan analitik performa-nya detail banget. Worth it!",
    rating: 5,
    accentColor: "#34D399",
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

export default function LandingTestimonials() {
  return (
    <section id="testimoni" className="bg-white py-20 md:py-28">
      <div className="pad-x">
        {/* Section header */}
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
            Ribuan peserta sudah membuktikan efektivitas Amunisi PTN. Yuk
            bergabung dan raih PTN impianmu!
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border-2 border-[#1E293B] bg-white p-5 shadow-pop-card anim-bounce hover:-rotate-1 hover:scale-[1.02] hover:shadow-pop"
            >
              {/* Quote mark */}
              <div
                className="mb-3 text-3xl font-black leading-none"
                style={{ color: t.accentColor }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              <StarRating count={t.rating} />

              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground">
                {t.quote}
              </p>

              {/* Footer */}
              <div className="mt-5 border-t-2 border-[#E2E8F0] pt-4">
                <div className="flex items-center gap-3">
                  {/* Avatar circle with initial */}
                  <div
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#1E293B] text-sm font-extrabold text-white"
                    style={{ backgroundColor: t.accentColor }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                <div
                  className="mt-3 rounded-lg border-2 border-[#1E293B] px-3 py-1.5 text-xs font-bold text-white"
                  style={{ backgroundColor: t.accentColor }}
                >
                  🎓 {t.ptn}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
