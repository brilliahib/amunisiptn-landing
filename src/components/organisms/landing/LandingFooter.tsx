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
    <footer className="border-t-2 border-[#1E293B] bg-[#1E293B] py-12">
      <div className="pad-x">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <Link href="/" aria-label="Amunisi PTN – halaman utama">
              <Image
                src="/images/logo/logo.png"
                alt="Amunisi PTN"
                width={130}
                height={130}
                className="brightness-0 invert"
              />
            </Link>
            <p className="max-w-xs text-center text-sm text-white/60 md:text-left">
              Platform try out UTBK-SNBT &amp; UM PTN terlengkap di Indonesia.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
              {footerLinks.map((link) => (
                <li
                  key={link.label}
                  className="text-sm font-medium text-white/60 transition-colors hover:text-white"
                >
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Amunisi PTN. Hak Cipta Dilindungi.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-2">
            {socialLinks.map(({ href, label, short }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-xs font-bold text-white/60 transition-all duration-200 hover:border-white/60 hover:text-white"
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
