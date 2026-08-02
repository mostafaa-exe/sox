"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

interface ProductCarouselProps {
  type: "new" | "sale";
}

export function ProductCarousel({ type }: ProductCarouselProps) {
  const t = useTranslations(type === "new" ? "NewArrivals" : "Sale");
  const navT = useTranslations("Navigation");
  const [activeTab, setActiveTab] = useState<"MEN" | "WOMEN">("MEN");

  // Real products
  const products = [
    { id: 1, name: "Premium Shirt", price: 1500, oldPrice: 1800, discount: "-16%", image: "/PRODUCT/4/photo_6015022353282174878_y.jpg" },
    { id: 2, name: "Casual Wear", price: 1200, oldPrice: 1500, discount: "-20%", image: "/PRODUCT/5/photo_6015022353282174888_y.jpg" },
    { id: 3, name: "Summer Collection", price: 1800, oldPrice: 2000, discount: "-10%", image: "/PRODUCT/6/photo_6015022353282174895_y.jpg" },
    { id: 4, name: "Classic Polo", price: 900, oldPrice: 1200, discount: "-25%", image: "/PRODUCT/7/photo_6015022353282174894_x.jpg" }
  ];

  return (
    <section className="w-full max-w-[1280px] mx-auto px-6 md:px-12 py-16 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-6">
          {type === "new" ? (
            <h2 className="text-3xl flex gap-2">
              <span className="italic font-normal">{t("new")}</span>
              <span className="font-bold text-primary">{t("arrivals")}</span>
            </h2>
          ) : (
            <h2 className="text-3xl font-bold text-primary uppercase">{t("title")}</h2>
          )}
          
          <div className="hidden md:flex gap-2">
            <button 
              onClick={() => setActiveTab("MEN")}
              className={`px-6 py-1.5 text-sm font-bold border transition-colors ${
                activeTab === "MEN" 
                  ? "bg-primary text-white border-primary" 
                  : "bg-background text-foreground border-border hover:border-gray-400"
              }`}
            >
              {navT("men")}
            </button>
            <button 
              onClick={() => setActiveTab("WOMEN")}
              className={`px-6 py-1.5 text-sm font-bold border transition-colors ${
                activeTab === "WOMEN" 
                  ? "bg-primary text-white border-primary" 
                  : "bg-background text-foreground border-border hover:border-gray-400"
              }`}
            >
              {navT("women")}
            </button>
          </div>
        </div>

        {type === "new" && (
          <Link href="/new-arrivals" className="text-xs font-bold text-muted-foreground hover:text-foreground tracking-widest">
            {t("view_all")}
          </Link>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, i) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative bg-[#f4f4f4] dark:bg-[#1a1a1a] h-80 w-full overflow-hidden flex flex-col justify-between p-4">
              {/* Badges */}
              <div className="flex justify-between items-start z-10">
                <button className="w-8 h-8 rounded-full bg-[#2d2d2d] text-white flex items-center justify-center hover:scale-110 transition-transform">
                  <ShoppingCart className="w-4 h-4" />
                </button>
                <span className="bg-primary text-white text-xs font-bold px-2 py-1">
                  {product.discount}
                </span>
              </div>
              
              {/* Image */}
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                />
              </div>

              {/* Dots */}
              <div className="flex justify-center absolute bottom-4 left-0 right-0 z-10">
                <div className="flex items-center gap-1.5 bg-black/10 dark:bg-white/10 rounded-full px-2.5 py-1.5">
                  <div className="w-4 h-1.5 rounded-full bg-primary" />
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                </div>
              </div>

              {/* Add to Cart Overlay Button */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <button className="w-full bg-primary text-white font-bold py-3 text-sm uppercase tracking-widest hover:bg-black dark:hover:bg-white dark:hover:text-black transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  {type === "new" ? t("add_to_cart") : "ADD TO CART"}
                </button>
              </div>
            </div>

            {/* Info */}
            <div className="mt-4 flex flex-col gap-1">
              <h3 className="text-sm font-medium uppercase text-foreground">{product.name}</h3>
              <div className="flex gap-2 items-center">
                <span className="text-primary font-bold">{product.price} EGP</span>
                <span className="text-muted-foreground line-through text-xs">{product.oldPrice} EGP</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
