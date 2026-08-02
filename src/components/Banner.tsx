"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Banner() {
  const t = useTranslations("Collection");

  return (
    <section className="w-full h-[400px] relative overflow-hidden my-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/PRODUCT/5/photo_6015022353282174891_x.jpg"
          alt="Collection"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/collection">
            <button className="bg-transparent border border-white text-white py-4 px-8 font-bold tracking-widest flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-colors duration-300">
              {t("shop_collection").replace(" ↗", "")}
              <MoveUpRight className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
