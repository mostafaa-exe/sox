"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="w-full flex flex-col md:flex-row min-h-[calc(100vh-70px)]">
      {/* Left Column (65%) */}
      <div className="relative w-full md:w-[65%] h-[60vh] md:h-auto overflow-hidden">
        <Image
          src="/hero2.png"
          alt="Fashion Model"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-10 left-6 md:left-12 text-white w-[80%]"
        >
          <p className="text-sm tracking-[0.2em] uppercase mb-2 opacity-90 font-medium">
            {t("subtitle")}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black uppercase max-w-lg leading-[1.1] tracking-wide break-words whitespace-normal">
            {t("title")}
          </h1>
        </motion.div>
      </div>

      {/* Right Column (35%) */}
      <div className="w-full md:w-[35%] h-[50vh] md:h-auto bg-white dark:bg-[#1a1a1a] flex flex-col border-t-2 md:border-t-0 md:border-s-2 border-primary relative">
        {/* Vertically Stacked Products (Auto Slider) */}
        <div className="flex-1 overflow-hidden relative">
          <div className="absolute top-0 left-0 right-0 w-full flex flex-col items-center gap-12 py-8 animate-marquee-vertical hover:[animation-play-state:paused]">
            {/* Original Items */}
            <div className="w-48 h-48 relative shrink-0">
              <Image src="/PRODUCT/1/photo_6015022353282174869_y.jpg" alt="Shirt 1" fill className="object-cover" />
            </div>
            <div className="w-48 h-48 relative shrink-0">
              <Image src="/PRODUCT/2/photo_6015022353282174864_y.jpg" alt="Shirt 2" fill className="object-cover" />
            </div>
            <div className="w-48 h-48 relative shrink-0">
              <Image src="/PRODUCT/3/photo_6015022353282174867_y.jpg" alt="Shirt 3" fill className="object-cover" />
            </div>
            
            {/* Duplicated Items for seamless loop */}
            <div className="w-48 h-48 relative shrink-0">
              <Image src="/PRODUCT/1/photo_6015022353282174869_y.jpg" alt="Shirt 1" fill className="object-cover" />
            </div>
            <div className="w-48 h-48 relative shrink-0">
              <Image src="/PRODUCT/2/photo_6015022353282174864_y.jpg" alt="Shirt 2" fill className="object-cover" />
            </div>
            <div className="w-48 h-48 relative shrink-0">
              <Image src="/PRODUCT/3/photo_6015022353282174867_y.jpg" alt="Shirt 3" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col border-t-2 md:border-t-0 border-primary bg-white dark:bg-[#1a1a1a]">
          <div className="w-full h-12 md:h-16 border-b-2 border-primary flex items-center justify-center bg-background">
            <div className="flex items-center justify-center">
              <span className="text-2xl md:text-3xl font-black tracking-[0.15em] uppercase text-foreground">
                SOX
              </span>
              <span className="text-primary text-2xl md:text-3xl font-black ml-1">.</span>
            </div>
          </div>
          <Link href="/shop" className="w-full">
            <button className="w-full bg-primary hover:bg-primary/90 text-white py-4 md:py-5 font-bold tracking-widest flex items-center justify-between px-6 transition-colors duration-300 uppercase">
              <span>{t("shop_now").replace(" ↗", "") || "SHOP NOW"}</span>
              <MoveUpRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
