import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue, Inter, Lato, Montserrat, Oswald, Poppins, Roboto, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-bebas-neue",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["100","200","300","400","500","600","700","800","900"],
    variable: "--font-inter",
});

const lato = Lato({
    subsets: ["latin"],
    weight: ["100","300","400","700","900"],
    variable: "--font-lato",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["100","200","300","400","500","600","700","800","900"],
    variable: "--font-montserrat",
});

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["200","300","400","500","600","700"],
    variable: "--font-oswald",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100","200","300","400","500","600","700","800","900"],
    variable: "--font-poppins",
});

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100","300","400","500","700","900"],
    variable: "--font-roboto",
});

const robotoCondensed = Roboto_Condensed({
    subsets: ["latin"],
    weight: ["100","300","400","500","700","900"],
    variable: "--font-roboto-condensed",
});

export const metadata: Metadata = {
    title: "Kanasaki Technologies",
    description: "For the Kanasaki Next.js website, we use a variety of Google Fonts to enhance the visual appeal and readability of our content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${inter.variable} ${lato.variable} ${montserrat.variable} ${oswald.variable} ${poppins.variable} ${roboto.variable} ${robotoCondensed.variable} antialiased`}>
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
