import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import type { Product } from "@/types/product.types";
import { ProductCard } from "@/components/product/ProductCard/ProductCard";
import styles from "./ProductsSection.module.scss";

type ProductsSectionProps = {
  products: Product[];
};

export const ProductsSection = ({ products }: ProductsSectionProps) => {
  return (
    <section className={styles.products}>
      <div className={styles.header}>
        <h2>Mais vendidos</h2>

        <Link href="/products?sort=best-sellers">
          Ver todos
          <FiArrowRight />
        </Link>
      </div>

      <div className={styles.list}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            showBestSellerBadge={false}
          />
        ))}
      </div>
    </section>
  );
};
