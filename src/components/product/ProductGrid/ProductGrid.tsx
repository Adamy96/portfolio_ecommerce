import type { Product } from "@/types/product.types";
import { ProductCard } from "../ProductCard/ProductCard";
import styles from "./ProductGrid.module.scss";

type ProductGridProps = {
  products: Product[];
};

export const ProductGrid = ({ products }: ProductGridProps) => (
  <div className={styles.grid}>
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);
