import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#fitur", label: "Fitur" },
  { href: "#harga", label: "Harga" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#faq", label: "FAQ" },
];

const socialLinks = [
  {
    href: "https://instagram.com/amunisiptn",
    label: "Instagram Amunisi PTN",
    short: "IG",
  },
  {
    href: "https://tiktok.com/@amunisiptn",
    label: "TikTok Amunisi PTN",
    short: "TT",
  },
  {
    href: "https://youtube.com/@amunisiptn",
    label: "YouTube Amunisi PTN",
    short: "YT",
  },
];

export default function LandingFooter() {
  return (
    <footer className="border-t-4 border-[#1E293B] bg-[#EEF4FF] py-16">
      <div className="pad-x">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center gap-6 md:items-start">
            <Link
              href="/"
              aria-label="Amunisi PTN – halaman utama"
              className="inline-block rounded-xl border-4 border-[#1E293B] bg-white px-5 py-3 shadow-[6px_6px_0px_0px_#1E293B] transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#1E293B]"
            >
              <Image
                src="/images/logo/logo.png"
                alt="Amunisi PTN"
                width={140}
                height={140}
                className="h-auto w-auto"
              />
            </Link>
            <div className="flex w-full items-center gap-2">
              <p className="max-w-xs text-center font-bold text-[#1E293B] md:text-left">
                Platform try out UTBK-SNBT & UM PTN terlengkap di Indonesia.
              </p>
            </div>
          </div>

          {/* Nav links */}
          <div className="space-y-6">
            <nav aria-label="Footer navigation" className="mt-4 md:mt-0">
              <ul className="flex flex-wrap justify-center gap-x-8 gap-y-6 md:justify-end">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-extrabold uppercase tracking-widest text-[#1E293B] transition-all hover:text-primary hover:underline hover:decoration-4 hover:underline-offset-4"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-2 flex justify-center md:justify-end">
              <div className="inline-block -rotate-1 rounded-2xl border-4 border-[#1E293B] bg-white px-6 py-3 text-center shadow-[6px_6px_0px_0px_#1E293B] transition-transform hover:rotate-0 hover:shadow-[8px_8px_0px_0px_#1E293B]">
                <p className="font-rubik text-xl font-black uppercase tracking-tighter sm:text-2xl lg:text-3xl">
                  <span className="text-primary">Bersama Amunisi, </span>
                  <span className="text-[#1E293B]">Mimpi Kita Terealisasi</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-1 w-full bg-[#1E293B]" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <p className="font-bold text-[#1E293B]">
            &copy; {new Date().getFullYear()} Amunisi PTN. Hak Cipta Dilindungi.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, label, short }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#1E293B] bg-white font-black text-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:bg-[#3b82f6] hover:text-white hover:shadow-[6px_6px_0px_0px_#1E293B] active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                {short}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
