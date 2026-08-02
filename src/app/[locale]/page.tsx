import { Hero } from "@/components/Hero";
import { ProductCarousel } from "@/components/ProductCarousel";
import { Categories } from "@/components/Categories";
import { Banner } from "@/components/Banner";
import { Features } from "@/components/Features";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <ProductCarousel type="new" />
      <Categories />
      <ProductCarousel type="sale" />
      <Banner />
      <Features />
    </div>
  );
}
