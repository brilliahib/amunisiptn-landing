import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/organisms/nav/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Amunisi PTN - Tryout & Bimbel SNBP, UTBK (SNBT) & UM PTN",
  description:
    "Amunisi PTN adalah platform tryout dan bimbingan intensif untuk persiapan SNBP, UTBK (SNBT), dan UM PTN. Dapatkan simulasi ujian real-time, pembahasan lengkap, kelas intensif, dan analitik progress untuk strategi masuk PTN terbaikmu.",
  keywords: [
    "tryout utbk",
    "bimbel snbp",
    "bimbel utbk online",
    "latihan soal utbk",
    "simulasi utbk snbt",
    "prediksi passing grade",
    "tips lolos snbp",
    "persiapan um ptn",
    "materi utbk dan pembahasan",
    "bank soal utbk",
    "Amunisi PTN",
    "platform tryout indonesia",
    "persiapan utbk",
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
    title: "Amunisi PTN - Tryout & Bimbel SNBP, UTBK (SNBT) & UM PTN",
    description:
      "Gabung Amunisi PTN untuk tryout UTBK: simulasi ujian real-time, pembahasan lengkap, kelas intensif, dan analitik progress. Siapkan strategi masuk PTN terbaikmu.",
    url: "https://www.amunisiptn.com",
    siteName: "Amunisi PTN",
    images: [
      {
        url: "https://www.amunisiptn.com/images/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Amunisi PTN - Tryout & Bimbel SNBP, UTBK, UM PTN",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amunisi PTN - Tryout & Bimbel SNBP, UTBK (SNBT) & UM PTN",
    description:
      "Simulasi UTBK, pembahasan lengkap, dan paket bimbel intensif - semua ada di Amunisi PTN.",
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
    <html lang="en" className={cn("h-full", "antialiased", poppins.variable)}>
      <Navbar />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
