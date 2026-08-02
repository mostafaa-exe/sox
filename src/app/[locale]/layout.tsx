import type { Metadata } from "next";
import { Montserrat, Cairo } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import TopProgressBar from "@/components/TopProgressBar";
import "../globals.css"; // Go one level up to find globals.css
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "SOX MEN'S WEAR",
  description: "Your ultimate destination for fashion.",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  // Determine direction based on locale
  const dir = locale === "ar" ? "rtl" : "ltr";

  // Use Cairo for Arabic and Montserrat for English
  const fontClass = locale === "ar" ? cairo.variable : montserrat.variable;

  return (
    <html lang={locale} dir={dir} className={`${fontClass} ${montserrat.variable} ${cairo.variable} h-full antialiased suppressHydrationWarning`}>
      <body className={`min-h-full flex flex-col font-sans transition-colors duration-300`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TopProgressBar />
            <Header />
            <main className="flex-1 w-full pt-[70px]">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
