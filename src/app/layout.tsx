import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/organisms/nav/Navbar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Amunisi PTN — Platform Try Out UTBK SNBT & UM PTN Terbaik",
  description:
    "Persiapkan UTBK-SNBT dan UM PTN kamu bersama Amunisi PTN. Ribuan soal latihan, simulasi try out real-time, pembahasan video lengkap, dan analitik performa untuk strategi lolos PTN impianmu.",
  keywords: [
    "tryout utbk",
    "tryout snbt",
    "latihan soal utbk",
    "simulasi utbk snbt",
    "prediksi nilai utbk",
    "tryout um ptn",
    "bimbel ptn online",
    "bank soal utbk",
    "persiapan masuk ptn",
    "Amunisi PTN",
    "platform tryout indonesia",
    "tryout gratis utbk",
  ],
  authors: [{ name: "Amunisi PTN", url: "https://www.amunisiptn.com" }],
  applicationName: "Amunisi PTN",
  metadataBase: new URL("https://www.amunisiptn.com"),
  alternates: {
    canonical: "https://www.amunisiptn.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Amunisi PTN — Platform Try Out UTBK SNBT & UM PTN Terbaik",
    description:
      "Ribuan soal latihan, simulasi try out real-time, dan analitik performa. Siapkan strategi masuk PTN impianmu bersama Amunisi PTN.",
    url: "https://www.amunisiptn.com",
    siteName: "Amunisi PTN",
    images: [
      {
        url: "https://www.amunisiptn.com/images/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Amunisi PTN — Platform Try Out UTBK SNBT & UM PTN",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amunisi PTN — Platform Try Out UTBK SNBT & UM PTN Terbaik",
    description:
      "Simulasi try out UTBK, pembahasan lengkap, dan analitik performa — semua ada di Amunisi PTN.",
    creator: "@AmunisiPTN",
    images: ["https://www.amunisiptn.com/images/logo/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={cn(
        "h-full antialiased",
        outfit.variable,
        plusJakartaSans.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
