import { setRequestLocale } from "next-intl/server";
import ProductClient from "./ProductClient";

export function generateStaticParams() {
  return [
    { slug: 'demo' }
  ];
}

export default async function ProductPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProductClient />;
}
