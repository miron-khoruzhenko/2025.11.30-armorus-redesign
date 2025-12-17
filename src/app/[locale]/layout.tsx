import type { Metadata } from "next";
import localFont from "next/font/local";
import "../../styles/globals.css";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const dinAlternate = localFont({
  src: [
    { path: '../../../public/fonts/DINAlternate-Bold.ttf', weight: '700' },
    // { path: '../../../public/fonts/DinAlternate-Medium.woff2', weight: '500' },
  ],
  variable: "--font-din",
});

const helvetica = localFont({
  src: [
    { path: '../../../public/fonts/HelveticaNeue.ttf', weight: '400' },
    { path: '../../../public/fonts/HelveticaNeueBold.ttf', weight: '700' },
  ],
  variable: "--font-helvetica",
});

const commuterssans = localFont({
  src: [
    { path: '../../../public/fonts/commuterssans/commuterssans-regular.otf', weight: '400' },
    { path: '../../../public/fonts/commuterssans/commuterssans-semibold.otf', weight: '500' },
    { path: '../../../public/fonts/commuterssans/commuterssans-bold.otf', weight: '700' },
  ],
  variable: "--font-commuterssans",
});

export const metadata: Metadata = {
  title: "ARMORUS",
  description: "Precision Built for the Brave",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const allMessages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${dinAlternate.variable} ${helvetica.variable} ${commuterssans.variable} font-sans antialiased text-brand-black`}>
        <NextIntlClientProvider messages={allMessages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}