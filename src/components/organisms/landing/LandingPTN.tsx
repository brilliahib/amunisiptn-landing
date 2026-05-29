import Marquee from "@/components/ui/marquee";
import Image from "next/image";

export const ptn = [
  { name: "Universitas Indonesia", logo: "/images/ptn/ui.png" },
  { name: "Institut Teknologi Bandung", logo: "/images/ptn/itb.png" },
  { name: "Universitas Gadjah Mada", logo: "/images/ptn/ugm.png" },
  { name: "Institut Pertanian Bogor", logo: "/images/ptn/ipb.png" },
  { name: "Universitas Airlangga", logo: "/images/ptn/unair.png" },
  { name: "Universitas Diponegoro", logo: "/images/ptn/undip.png" },
  { name: "Institut Teknologi Sepuluh Nopember", logo: "/images/ptn/its.png" },
  { name: "Universitas Padjadjaran", logo: "/images/ptn/unpad.webp" },
  { name: "Universitas Brawijaya", logo: "/images/ptn/ub.png" },
  { name: "Universitas Hasanuddin", logo: "/images/ptn/unhas.png" },
  { name: "Universitas Sebelas Maret", logo: "/images/ptn/uns.png" },
  { name: "Universitas Negeri Yogyakarta", logo: "/images/ptn/uny.png" },
  { name: "Universitas Negeri Malang", logo: "/images/ptn/um.webp" },
  { name: "Universitas Negeri Jakarta", logo: "/images/ptn/unj.png" },
  { name: "Universitas Sumatera Utara", logo: "/images/ptn/unsu.png" },
];

export default function LandingPTN() {
  return (
    <section id="ptn" className="bg-transparent py-10 sm:bg-[#EEF4FF]">
      <div className="pad-x mb-12 text-center">
        <p className="font-bold uppercase tracking-widest">
          Siswa kami diterima di PTN top Indonesia
        </p>
      </div>
      <div className="relative overflow-hidden">
        <Marquee pauseOnHover className="[--duration:25s]">
          {ptn.map((item, i) => (
            <div
              key={i}
              className="mx-4 flex items-center gap-x-3 text-[14px] font-semibold text-foreground anim-bounce hover:-translate-y-0.5"
            >
              <Image
                src={item.logo || "/vercel.svg"}
                alt={item.name}
                width={42}
                height={42}
                className="rounded object-contain"
              />
              {item.name}
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-transparent sm:from-[#EEF4FF]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-transparent sm:from-[#EEF4FF]" />
      </div>
    </section>
  );
}
