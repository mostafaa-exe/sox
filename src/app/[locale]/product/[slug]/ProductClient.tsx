"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight, Heart, Minus, Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ProductClient() {
  const t = useTranslations("Product");
  const navT = useTranslations("Navigation");

  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("L");
  const [quantity, setQuantity] = useState(1);

  const images = [
    "/PRODUCT/1/photo_6015022353282174871_y.jpg",
    "/PRODUCT/1/photo_6015022353282174872_y.jpg",
    "/PRODUCT/1/photo_6015022353282174873_y.jpg",
  ];

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const nextImage = () => setActiveImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setActiveImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 py-8 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {/* Left Column: Images */}
        <div className="flex flex-col gap-4">
          {/* Main Image */}
          <div className="relative w-full h-[500px] md:h-[700px] bg-secondary group">
            <Image
              src={images[activeImage]}
              alt="Product Image"
              fill
              className="object-cover"
              priority
            />
            {/* Discount Badge */}
            <div className="absolute top-4 left-4 bg-primary text-white text-sm font-bold px-3 py-1 z-10">
              -15%
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`relative w-20 h-28 flex-shrink-0 transition-all ${
                  activeImage === i ? "border-2 border-foreground" : "opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={img} alt={`Thumbnail ${i}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="flex flex-col">
          {/* Breadcrumbs */}
          <nav className="text-xs text-muted-foreground mb-6 flex gap-2">
            <Link href="/" className="hover:text-foreground transition-colors">{t("home")}</Link>
            <span>/</span>
            <Link href="/men" className="hover:text-foreground transition-colors">{navT("men")}</Link>
            <span>/</span>
            <span className="text-foreground">VERTICAL SLAYER T-SHIRT</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold uppercase mb-4 text-foreground">
            VERTICAL SLAYER T-SHIRT
          </h1>

          {/* Price */}
          <div className="flex items-end gap-4 mb-2">
            <span className="text-2xl font-bold text-primary">1,400 EGP</span>
            <span className="text-lg text-muted-foreground line-through mb-0.5">1,600 EGP</span>
          </div>
          <p className="text-sm text-secondary-foreground mb-8">{t("shipping_calculated")}</p>

          {/* Size Selector */}
          <div className="mb-8">
            <div className="flex gap-3 mt-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 flex items-center justify-center border font-medium transition-colors duration-200 ${
                    selectedSize === size
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-transparent text-foreground hover:border-gray-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Stock */}
          <div className="mb-8 flex flex-col gap-4">
            <div className="flex items-center border border-border w-fit">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-12 h-12 flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-12 h-12 flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm font-bold text-primary">{t("only_one_left")}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 mb-10">
            <button className="w-full h-14 bg-foreground text-background font-bold tracking-widest uppercase hover:bg-black/80 dark:hover:bg-white/80 transition-colors">
              {t("add_to_cart")}
            </button>
            <div className="flex gap-3">
              <button className="flex-1 h-14 bg-transparent border border-foreground font-bold tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors">
                {t("buy_now")}
              </button>
              <button className="flex-1 h-14 bg-transparent border border-border font-bold tracking-widest uppercase hover:border-foreground flex items-center justify-center gap-2 transition-colors">
                <Heart className="w-5 h-5" />
                {t("save_wishlist")}
              </button>
            </div>
          </div>

          {/* Accordion */}
          <Accordion className="w-full">
            <AccordionItem value="description">
              <AccordionTrigger className="font-bold text-lg hover:no-underline">{t("product_desc")}</AccordionTrigger>
              <AccordionContent className="text-secondary-foreground leading-relaxed">
                Premium quality oversized t-shirt featuring our signature Vertical Slayer design. 
                Made from 100% heavyweight cotton for maximum comfort and durability. 
                Perfect for your everyday streetwear look.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="details">
              <AccordionTrigger className="font-bold text-lg hover:no-underline">{t("product_details")}</AccordionTrigger>
              <AccordionContent className="text-secondary-foreground leading-relaxed">
                <ul className="list-disc pl-5 space-y-1">
                  <li>100% Heavyweight Cotton (240 GSM)</li>
                  <li>Oversized fit</li>
                  <li>Dropped shoulders</li>
                  <li>Ribbed crewneck</li>
                  <li>Machine wash cold</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

        </div>
      </div>
    </div>
  );
}
