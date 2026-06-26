import type { Metadata } from "next";
import { Pagination } from "@/components/product/Pagination/Pagination";
import { ProductFilters } from "@/components/product/ProductFilters/ProductFilters";
import { ProductGrid } from "@/components/product/ProductGrid/ProductGrid";
import { ProductSort } from "@/components/product/ProductSort/ProductSort";
import { getProducts } from "@/services/product/product.service";
import type {
  ProductCategory,
  ProductSort as ProductSortValue,
} from "@/types/product.types";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Produtos",
  description: "Explore produtos selecionados para tecnologia e lifestyle.",
};

type ProductsPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

const getStringParam = (
  value: string | string[] | undefined,
): string | undefined => (Array.isArray(value) ? value[0] : value);

const getNumberParam = (
  value: string | string[] | undefined,
): number | undefined => {
  const parsedValue = Number(getStringParam(value));

  return Number.isFinite(parsedValue) ? parsedValue : undefined;
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const params = await searchParams;
  const offers = getStringParam(params.offers) === "true";
  const isNew = getStringParam(params.new) === "true";
  const search = getStringParam(params.search);
  const category = getStringParam(params.category) as
    | ProductCategory
    | undefined;
  const minPrice = getNumberParam(params.minPrice);
  const maxPrice = getNumberParam(params.maxPrice);
  const inStock = getStringParam(params.inStock) === "true";
  const sort =
    (getStringParam(params.sort) as ProductSortValue | undefined) ?? "featured";
  const page = getNumberParam(params.page) ?? 1;

  const result = await getProducts({
    search,
    category,
    minPrice,
    maxPrice,
    inStock,
    offers,
    isNew,
    sort,
    page,
    limit: 12,
  });

  const paginationSearchParams = {
    search,
    category,
    minPrice: minPrice?.toString(),
    maxPrice: maxPrice?.toString(),
    inStock: inStock ? "true" : undefined,
    offers: offers ? "true" : undefined,
    new: isNew ? "true" : undefined,
    sort,
  };

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Coleção completa</span>
          <h1>Produtos para uma rotina mais simples e inspiradora</h1>
          <p>
            Descubra tecnologia funcional, design cuidadoso e produtos
            escolhidos para acompanhar seu dia.
          </p>
        </div>
      </section>

      <section className={styles.catalog}>
        <div className={styles.container}>
          <div className={styles.layout}>
            <ProductFilters
              values={{
                search,
                category,
                minPrice,
                maxPrice,
                inStock,
                offers,
                isNew,
                sort,
              }}
            />

            <div className={styles.results}>
              <div className={styles.toolbar}>
                <p>
                  <strong>{result.total}</strong>{" "}
                  {result.total === 1
                    ? "produto encontrado"
                    : "produtos encontrados"}
                </p>

                <ProductSort value={sort} />
              </div>

              {result.products.length > 0 ? (
                <>
                  <ProductGrid products={result.products} />
                  <Pagination
                    page={result.page}
                    totalPages={result.totalPages}
                    searchParams={paginationSearchParams}
                  />
                </>
              ) : (
                <div className={styles.emptyState}>
                  <span aria-hidden="true">⌕</span>
                  <h2>Nenhum produto encontrado</h2>
                  <p>Tente remover alguns filtros ou buscar por outro termo.</p>
                  <a href="/products">Limpar todos os filtros</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
