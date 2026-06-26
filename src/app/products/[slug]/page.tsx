import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCart } from "@/components/product/AddToCart/AddToCart";
import { ProductGallery } from "@/components/product/ProductGallery/ProductGallery";
import { ProductGrid } from "@/components/product/ProductGrid/ProductGrid";
import {
  getAllProductSlugs,
  getProductBySlug,
  getRelatedProducts,
} from "@/services/product/product.service";
import { formatCurrency } from "@/utils/formatCurrency";
import styles from "./page.module.scss";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const generateStaticParams = async () => {
  const slugs = await getAllProductSlugs();

  return slugs.map((slug) => ({ slug }));
};

export const generateMetadata = async ({
  params,
}: ProductPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produto não encontrado",
    };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.images?.[0] ?? product.image],
    },
  };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  const relatedProducts = await getRelatedProducts(
    product.id,
    product.category,
    4,
  );

  const hasDiscount =
    product.originalPrice !== undefined &&
    product.originalPrice > product.price;

  const productImages =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/products">Produtos</Link>
          <span>/</span>
          <span aria-current="page">{product.name}</span>
        </nav>

        <section className={styles.product}>
          <ProductGallery images={productImages} productName={product.name} />

          <div className={styles.details}>
            <span className={styles.category}>{product.categoryLabel}</span>
            <h1>{product.name}</h1>
            <p className={styles.shortDescription}>{product.description}</p>

            <div className={styles.rating}>
              <span aria-hidden="true">★</span>
              <strong>{product.rating.toFixed(1)}</strong>
              <span>{product.reviewCount} avaliações</span>
            </div>

            <div className={styles.priceBlock}>
              {hasDiscount && (
                <span className={styles.originalPrice}>
                  {formatCurrency(product.originalPrice!)}
                </span>
              )}
              <strong>{formatCurrency(product.price)}</strong>
              <span>
                em até 10x de {formatCurrency(product.price / 10)} sem juros
              </span>
            </div>

            <p
              className={
                (product.stock ?? 0) > 0 ? styles.inStock : styles.outOfStock
              }
            >
              {(product.stock ?? 0) > 0
                ? `${product.stock} unidades disponíveis`
                : "Produto temporariamente indisponível"}
            </p>

            <AddToCart product={product} />

            <ul className={styles.benefits}>
              <li>Frete grátis para compras acima de R$ 299</li>
              <li>Troca gratuita em até 30 dias</li>
              <li>Pagamento seguro e dados protegidos</li>
            </ul>
          </div>
        </section>

        <section className={styles.information}>
          <div>
            <span className={styles.sectionEyebrow}>Sobre o produto</span>
            <h2>Design pensado para acompanhar sua rotina</h2>
            <p>{product.longDescription ?? product.description}</p>
          </div>

          {product.specifications && product.specifications.length > 0 && (
            <div className={styles.specifications}>
              <h2>Especificações</h2>

              <dl>
                {product.specifications.map((specification) => (
                  <div key={specification.label}>
                    <dt>{specification.label}</dt>
                    <dd>{specification.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </section>

        {relatedProducts.length > 0 && (
          <section className={styles.related}>
            <div className={styles.relatedHeading}>
              <div>
                <span className={styles.sectionEyebrow}>
                  Você também pode gostar
                </span>
                <h2>Produtos relacionados</h2>
              </div>

              <Link href={`/products?category=${product.category}`}>
                Ver todos
              </Link>
            </div>

            <ProductGrid products={relatedProducts} />
          </section>
        )}
      </div>
    </main>
  );
}
