import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Állatfelügyelet & gondozás | Műtét utáni felügyelet • Egészségügyi gondozás • Állatszállítás • Napi felügyelet",
  description: "Szeretetteljes, megbízható állatfelügyelet és gondozás: műtét utáni felügyelet, egészségügyi gondozás, állatszállítás, napi felügyelet.",
  robots: "noindex, nofollow",
  alternates: {
    canonical: "https://leilapetcare.hu/",
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    url: "https://leilapetcare.hu/",
    title: "Leila Pet Care - Állatfelügyelet & gondozás",
    description: "Szeretetteljes, megbízható állatfelügyelet és gondozás: műtét utáni felügyelet, egészségügyi gondozás, állatszállítás, napi felügyelet.",
    images: ["https://leilapetcare.hu/images/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leila Pet Care - Állatfelügyelet & gondozás",
    description: "Szeretetteljes, megbízható állatfelügyelet és gondozás: műtét utáni felügyelet, egészségügyi gondozás, állatszállítás, napi felügyelet.",
    images: ["https://leilapetcare.hu/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body
        className={`${manrope.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
