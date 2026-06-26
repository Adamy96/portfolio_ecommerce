"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { ChangeEvent } from "react";
import type { ProductSort as ProductSortValue } from "@/types/product.types";
import styles from "./ProductSort.module.scss";

type ProductSortProps = {
  value: ProductSortValue;
};

export const ProductSort = ({ value }: ProductSortProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("sort", event.target.value);
    params.delete("page");

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <label className={styles.wrapper}>
      <span>Ordenar por</span>
      <select value={value} onChange={handleChange}>
        <option value="featured">Destaques</option>
        <option value="newest">Novidades</option>
        <option value="rating">Melhor avaliação</option>
        <option value="price-asc">Menor preço</option>
        <option value="price-desc">Maior preço</option>
      </select>
    </label>
  );
};
