"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function Features() {
  const t = useTranslations("Promise");

  const features = [
    {
      id: "01",
      title: t("fast_shipping_title"),
      desc: t("fast_shipping_desc"),
    },
    {
      id: "02",
      title: t("secure_payments_title"),
      desc: t("secure_payments_desc"),
    },
    {
      id: "03",
      title: t("customer_support_title"),
      desc: t("customer_support_desc"),
    },
  ];

  return (
    <section className="w-full max-w-[1280px] mx-auto px-6 md:px-12 py-16 mt-8">
      {/* Header */}
      <div className="flex flex-col items-start md:items-center text-left md:text-center mb-16 px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4">
            {t("subtitle")}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight">
            {t("title_why")} <br className="md:hidden" />
            <span className="font-bold text-primary">SOX MAN'S WEAR?</span>
          </h2>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {features.map((feature, i) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            className={`flex flex-col gap-4 p-8 ${
              i !== features.length - 1 ? "md:border-r md:border-border" : ""
            } ${i !== 0 ? "border-t border-border md:border-t-0" : ""}`}
          >
            <span className="text-[10px] font-bold text-primary">
              {feature.id}
            </span>
            <h3 className="text-base font-bold uppercase tracking-wide">{feature.title}</h3>
            <p className="text-[10px] text-muted-foreground leading-loose uppercase tracking-wide max-w-[250px]">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
