"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Menu, Moon, Sun, Search, Heart, ShoppingBag } from "lucide-react";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useParams } from "next/navigation";

export function Header() {
  const t = useTranslations("Navigation");
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const nextLocale = currentLocale === "ar" ? "en" : "ar";
    router.replace(pathname, { locale: nextLocale });
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[80px] transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto h-full px-6 md:px-12 flex items-center justify-between">
        {/* Left: Mobile Menu */}
        <div className="flex-1 flex items-center justify-start">
          <Sheet>
            <SheetTrigger className="p-2 -ml-2 flex items-center justify-center cursor-pointer" aria-label="Menu">
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            </SheetTrigger>
            <SheetContent side={currentLocale === "ar" ? "right" : "left"}>
              <div className="flex flex-col gap-6 mt-12">
                <Link href="/men" className="text-xl font-bold">{t("men")}</Link>
                <Link href="/women" className="text-xl font-bold">{t("women")}</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Center: Logo */}
        <div className="flex-1 flex items-center justify-center">
          <Link href="/" className="flex items-center justify-center">
            <div className="flex items-center justify-center">
              <span className="text-3xl md:text-4xl font-black tracking-[0.15em] uppercase text-foreground">
                SOX
              </span>
              <span className="text-primary text-3xl md:text-4xl font-black ml-1">.</span>
            </div>
          </Link>
        </div>

        {/* Right: Actions */}
        <div className="flex-1 flex items-center justify-end gap-3 md:gap-5">
          <button onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === "dark" ? (
              <Sun className="w-6 h-6" strokeWidth={1.5} />
            ) : (
              <Moon className="w-6 h-6" strokeWidth={1.5} />
            )}
          </button>

          <button
            onClick={toggleLanguage}
            className="border border-gray-300 rounded-full px-3 py-1 text-xs font-medium"
          >
            {currentLocale === "ar" ? "English" : "العربية"}
          </button>

          <button aria-label="Search" className="hidden md:block">
            <Search className="w-6 h-6" strokeWidth={1.5} />
          </button>

          <button className="relative" aria-label="Wishlist">
            <Heart className="w-6 h-6" strokeWidth={1.5} />
            <span className="absolute -top-1 -right-2 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>

          <button className="relative" aria-label="Cart">
            <ShoppingBag className="w-6 h-6" strokeWidth={1.5} />
            <span className="absolute -top-1 -right-2 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>

          <button className="hidden md:block border border-gray-300 rounded-full px-6 py-1.5 text-sm font-medium hover:bg-foreground hover:text-background transition-colors duration-200">
            {t("login")}
          </button>
        </div>
      </div>
    </header>
  );
}
