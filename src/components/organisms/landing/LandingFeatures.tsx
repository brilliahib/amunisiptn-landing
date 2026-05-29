import { BarChart2, BookOpenCheck, Globe } from "lucide-react";

const features = [
  {
    icon: BookOpenCheck,
    title: "Soal UTBK & UM Terbaru",
    description:
      "Bank soal ter-update mengikuti kisi-kisi resmi UTBK-SNBT, disusun oleh tim tutor berpengalaman.",
    accent: "#004aab",
  },
  {
    icon: BarChart2,
    title: "Analitik Performa",
    description:
      "Pantau perkembangan nilaimu secara langsung. Identifikasi kelemahan dan fokus belajar lebih efisien.",
    accent: "#004aab",
  },
  {
    icon: Globe,
    title: "Ranking Nasional",
    description:
      "Bandingkan skormu dengan peserta dari seluruh Indonesia dan ukur kesiapan masuk PTN impianmu.",
    accent: "#3b82f6",
  },
];

export default function LandingFeatures() {
  return (
    <section id="fitur" className="bg-white py-20 md:py-28">
      <div className="pad-x">
        {/* Section header */}
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-[#1E293B] bg-[#EEF4FF] px-4 py-1.5 shadow-[2px_2px_0px_0px_#1E293B]">
            <span className="text-sm font-extrabold uppercase tracking-widest text-[#004aab]">
              Fitur Unggulan
            </span>
          </div>
          <h2
            className="font-rubik text-4xl font-extrabold uppercase tracking-tighter text-[#1E293B] sm:text-5xl lg:text-6xl"
            style={{ textShadow: "2px 2px 0px #93c5fd" }}
          >
            Semua yang Kamu Butuhkan Ada di Sini
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Platform try out PTN paling lengkap — dari latihan soal harian
            hingga analitik performa yang membantu strategimu.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative rounded-2xl border-2 border-[#1E293B] bg-white p-6 shadow-pop-card anim-bounce hover:-rotate-1 hover:scale-[1.02] hover:shadow-pop"
              >
                {/* Icon circle — half-out at top */}
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#1E293B] group-hover:animate-wiggle"
                  style={{ backgroundColor: feature.accent }}
                >
                  <Icon className="h-6 w-6 text-white" strokeWidth={2.5} />
                </div>

                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
