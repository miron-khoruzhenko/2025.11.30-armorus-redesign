import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";

// Настройка локальных шрифтов
// Убедитесь, что файлы шрифтов находятся в папке src/fonts или public/fonts
const dinAlternate = localFont({
  src: [
    { path: '../../public/fonts/DINAlternate-Bold.ttf', weight: '700' }, // Пример пути
    // { path: '../../public/fonts/DinAlternate-Medium.woff2', weight: '500' },
  ],
  variable: "--font-din",
});

const helvetica = localFont({
  src: [
    { path: '../../public/fonts/HelveticaNeue.ttf', weight: '400' },
    { path: '../../public/fonts/HelveticaNeueBold.ttf', weight: '700' },
  ],
  variable: "--font-helvetica",
});

const commuterssans = localFont({
  src: [
    { path: '../../public/fonts/commuterssans/commuterssans-regular.otf', weight: '400' },
    { path: '../../public/fonts/commuterssans/commuterssans-semibold.otf', weight: '500' },
  { path: '../../public/fonts/commuterssans/commuterssans-bold.otf', weight: '700' },
  ],
  variable: "--font-commuterssans",
});

export const metadata: Metadata = {
  title: "ARMORUS",
  description: "Precision Built for the Brave",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dinAlternate.variable} ${helvetica.variable} ${commuterssans.variable} font-sans antialiased text-brand-black`}>
        {children}
      </body>
    </html>
  );
}