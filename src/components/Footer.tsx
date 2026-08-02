import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="w-full bg-background border-t border-border mt-20">
      {/* Newsletter Section */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-8 border-b border-border">
        <div className="max-w-md">
          <h2 className="text-3xl font-serif italic mb-2">{t("newsletter_title")}</h2>
          <p className="text-secondary-foreground">{t("newsletter_desc")}</p>
        </div>
        <div className="flex w-full md:w-auto max-w-md flex-1 items-end gap-4">
          <div className="flex-1 border-b border-border pb-2">
            <input
              type="email"
              placeholder={t("email_placeholder")}
              className="w-full bg-transparent outline-none placeholder:text-muted-foreground uppercase text-sm tracking-widest"
            />
          </div>
          <button className="bg-primary text-primary-foreground px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-300">
            {t("subscribe")}
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1: Logo & Social */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-start mb-2">
            <span className="text-4xl font-black tracking-[0.15em] uppercase text-foreground">
              SOX
            </span>
            <span className="text-primary text-4xl font-black ml-1">.</span>
          </div>
          <p className="text-xl font-bold uppercase w-2/3 leading-tight">{t("what_looking_for")}</p>
          <div className="flex gap-4 mt-auto">
            <Link href="https://www.instagram.com/soxmenswear?igsh=cWZldHAyY24xZ2h5" target="_blank" aria-label="Instagram">
              <svg className="w-5 h-5 text-secondary-foreground hover:text-foreground transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </Link>
            <Link href="https://www.facebook.com/share/1DGXWscxp1/?mibextid=wwXIfr" target="_blank" aria-label="Facebook">
              <svg className="w-5 h-5 text-secondary-foreground hover:text-foreground transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Column 2: Shop */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-sm tracking-widest uppercase">{t("shop")}</h3>
          <Link href="/products" className="text-sm text-secondary-foreground hover:text-foreground transition-colors">{t("all_products")}</Link>
          <Link href="/men" className="text-sm text-secondary-foreground hover:text-foreground transition-colors">{t("men")}</Link>
          <Link href="/women" className="text-sm text-secondary-foreground hover:text-foreground transition-colors">{t("women")}</Link>
          <Link href="/new-arrivals" className="text-sm text-secondary-foreground hover:text-foreground transition-colors">NEW ARRIVALS</Link>
          <Link href="/offers" className="text-sm text-secondary-foreground hover:text-foreground transition-colors">{t("offers")}</Link>
        </div>

        {/* Column 3: Info */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-sm tracking-widest uppercase">{t("info")}</h3>
          <Link href="/about" className="text-sm text-secondary-foreground hover:text-foreground transition-colors">{t("about_us")}</Link>
          <Link href="/orders" className="text-sm text-secondary-foreground hover:text-foreground transition-colors">{t("my_orders")}</Link>
          <Link href="/wishlist" className="text-sm text-secondary-foreground hover:text-foreground transition-colors">{t("wish_list")}</Link>
          <Link href="/privacy" className="text-sm text-secondary-foreground hover:text-foreground transition-colors">{t("privacy_policy")}</Link>
          <Link href="/terms" className="text-sm text-secondary-foreground hover:text-foreground transition-colors">{t("terms_conditions")}</Link>
        </div>

        {/* Column 4: Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-sm tracking-widest uppercase">{t("contact")}</h3>
          <a href="mailto:HELP@SOX.COM" className="text-sm text-secondary-foreground hover:text-foreground transition-colors underline underline-offset-4">HELP@SOX.COM</a>
          <p className="text-sm text-secondary-foreground leading-relaxed mt-2">{t("address_1")}</p>
          <p className="text-sm text-secondary-foreground leading-relaxed">{t("address_2")}</p>
          <a href={`tel:${t("phone")}`} className="text-sm font-bold mt-2">{t("phone")}</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground border-t border-border">
        <p>{t("copyright")}</p>
        <p className="mt-4 md:mt-0 tracking-widest uppercase">{t("privacy_terms")}</p>
      </div>
    </footer>
  );
}
