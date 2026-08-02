"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

export function Categories() {
  const t = useTranslations("Categories");

  const categories = [
    { id: "caps", title: t("caps"), active: true, image: "/PRODUCT/1/photo_6015022353282174870_y.jpg" },
    { id: "glasses", title: t("glasses"), active: true, image: "/PRODUCT/2/photo_6015022353282174864_y.jpg" },
    { id: "accessories", title: t("accessories"), active: true, image: "/PRODUCT/3/photo_6015022353282174867_y.jpg" },
    { id: "tshirt", title: t("tshirt"), active: true, image: "/PRODUCT/4/photo_6015022353282174878_y.jpg" },
    { id: "shirt", title: t("shirt"), active: true, image: "/PRODUCT/5/photo_6015022353282174888_y.jpg" },
    { id: "jacket", title: t("jacket"), active: true, image: "/PRODUCT/6/photo_6015022353282174895_y.jpg" },
    { id: "pants", title: t("pants"), active: true, image: "/PRODUCT/7/photo_6015022353282174894_x.jpg" },
    { id: "tracksuits", title: t("tracksuits"), active: true, image: "/PRODUCT/8/photo_6015022353282174874_x.jpg" },
    { id: "suits", title: t("suits"), active: true, image: "/PRODUCT/9/photo_6015022353282174886_y.jpg" },
    { id: "pullover", title: t("pullover"), active: true, image: "/PRODUCT/1/photo_6015022353282174871_y.jpg" },
    { id: "sweatshirt", title: t("sweatshirt"), active: true, image: "/PRODUCT/2/photo_6015022353282174865_y.jpg" },
    { id: "shoes", title: t("shoes"), active: true, image: "/PRODUCT/3/photo_6015022353282174868_y.jpg" },
  ];

  return (
    <section className="w-full max-w-[1280px] mx-auto px-6 md:px-12 py-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-primary uppercase">{t("title")}</h2>
        <Link href="/categories" className="text-xs font-bold text-muted-foreground hover:text-foreground tracking-widest uppercase">
          {t("shop_all")} ↗
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative aspect-[3/4] overflow-hidden cursor-pointer bg-secondary"
          >
            {/* Image */}
            <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Overlays */}
            {!cat.active && (
              <div className="absolute inset-0 bg-black/60 z-10 flex flex-col items-center justify-center">
                <span className="text-4xl text-white font-serif italic">{cat.date}</span>
                <span className="text-white tracking-widest mt-2">{t("coming_soon")}</span>
              </div>
            )}

            {/* Title */}
            <div className={`absolute bottom-6 left-6 z-20 ${!cat.active ? 'opacity-100' : ''}`}>
              <h3 className={`text-2xl font-black uppercase ${cat.active ? 'text-white' : 'text-primary'}`}>
                {cat.title}
              </h3>
            </div>
            
            {/* Dark gradient for active cards to make text readable */}
            {cat.active && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
