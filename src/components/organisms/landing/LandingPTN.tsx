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
    <section className="mt-16 flex flex-col gap-8">
      <div className="text-center">
        <h3 className="font-semibold text-xl">
          Siswa kami diterima di PTN top Indonesia
        </h3>
      </div>
      <div className="relative overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {ptn.map((item, i) => (
            <div
              key={i}
              className="mx-2 flex max-w-none cursor-default items-center gap-x-3 text-sm font-medium"
            >
              <Image
                src={item.logo || "/vercel.svg"}
                alt="logo"
                width={50}
                height={50}
                className="rounded"
              />
              {item.name}
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </section>
  );
}
