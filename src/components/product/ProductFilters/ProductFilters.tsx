import Link from "next/link";
import type { ProductCategory, ProductSort } from "@/types/product.types";
import styles from "./ProductFilters.module.scss";

type ProductFiltersProps = {
  values: {
    search?: string;
    category?: ProductCategory;
    minPrice?: number;
    maxPrice?: number;
    inStock?: boolean;
    offers?: boolean;
    isNew?: boolean;
    sort?: ProductSort;
  };
};

export const ProductFilters = ({ values }: ProductFiltersProps) => (
  <aside className={styles.wrapper} aria-label="Filtros de produtos">
    <div className={styles.heading}>
      <h2>Filtros</h2>

      <Link href="/products" className={styles.clearButton}>
        Limpar
      </Link>
    </div>

    <form action="/products" method="get" className={styles.form}>
      <input type="hidden" name="sort" value={values.sort ?? "featured"} />

      <label className={styles.field}>
        <span>Buscar</span>

        <input
          type="search"
          name="search"
          defaultValue={values.search}
          placeholder="Nome do produto"
        />
      </label>

      <label className={styles.field}>
        <span>Categoria</span>

        <select name="category" defaultValue={values.category ?? ""}>
          <option value="">Todas</option>
          <option value="electronics">Eletrônicos</option>
          <option value="home">Casa</option>
          <option value="fashion">Moda</option>
          <option value="beauty">Beleza</option>
          <option value="sports">Esportes</option>
          <option value="accessories">Acessórios</option>
        </select>
      </label>

      <fieldset className={styles.fieldset}>
        <legend>Faixa de preço</legend>

        <div className={styles.priceFields}>
          <label>
            <span>Mínimo</span>

            <input
              type="number"
              name="minPrice"
              defaultValue={values.minPrice}
              min="0"
              step="10"
              placeholder="R$ 0"
            />
          </label>

          <label>
            <span>Máximo</span>

            <input
              type="number"
              name="maxPrice"
              defaultValue={values.maxPrice}
              min="0"
              step="10"
              placeholder="R$ 2.000"
            />
          </label>
        </div>
      </fieldset>

      <div className={styles.checkboxGroup}>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            name="inStock"
            value="true"
            defaultChecked={values.inStock}
          />

          <span>Somente produtos em estoque</span>
        </label>

        <label className={styles.checkbox}>
          <input
            type="checkbox"
            name="offers"
            value="true"
            defaultChecked={values.offers}
          />

          <span>Somente ofertas</span>
        </label>

        <label className={styles.checkbox}>
          <input
            type="checkbox"
            name="new"
            value="true"
            defaultChecked={values.isNew}
          />

          <span>Somente novidades</span>
        </label>
      </div>

      <button type="submit" className={styles.submitButton}>
        Aplicar filtros
      </button>
    </form>
  </aside>
);
