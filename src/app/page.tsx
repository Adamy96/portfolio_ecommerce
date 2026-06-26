import {
  Hero,
  Categories,
  Benefits,
  ProductsSection,
  Inspiration,
} from "@/components/home";
import { PromoGrid } from "@/components/product";
import { getHomeData } from "@/services/home/home.service";

export default async function Home() {
  const { categories, benefits, bestSellers, promos, inspirationItems } =
    await getHomeData();

  return (
    <main>
      <Hero />
      <Categories categories={categories} />
      <Benefits benefits={benefits} />
      <ProductsSection products={bestSellers} />
      <PromoGrid promos={promos} />
      <Inspiration items={inspirationItems} />
    </main>
  );
}
