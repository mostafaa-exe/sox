import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'About' });

  return (
    <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 py-16 min-h-[70vh]">
      <h1 className="text-4xl md:text-5xl font-bold uppercase mb-12 text-primary">
        {t("title")}
      </h1>
      
      <div className="flex flex-col gap-6 text-secondary-foreground text-lg leading-relaxed max-w-4xl">
        <p>{t("p1")}</p>
        <p>{t("p2")}</p>
        <p>{t("p3")}</p>
        
        <h2 className="text-2xl font-bold text-foreground mt-8">{t("vision_title")}</h2>
        <p>{t("vision_desc")}</p>
        
        <h2 className="text-2xl font-bold text-foreground mt-8">{t("mission_title")}</h2>
        <p>{t("mission_desc")}</p>
      </div>
    </div>
  );
}
