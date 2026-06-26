"use client";

import Image from "next/image";
import Link from "next/link";
import { FiHeart, FiShoppingCart, FiStar } from "react-icons/fi";
import { addProduct } from "@/store/slices/cartSlice";
import { toggleFavorite } from "@/store/slices/favoritesSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import type { Product } from "@/types/product.types";
import styles from "./ProductCard.module.scss";

type ProductCardProps = {
  product: Product;
  showBestSellerBadge?: boolean;
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

export const ProductCard = ({
  product,
  showBestSellerBadge = true,
}: ProductCardProps) => {
  const dispatch = useAppDispatch();

  const isFavorite = useAppSelector((state) =>
    state.favorites.productIds.includes(product.id),
  );

  const productImage = product.images?.[0] ?? product.image;
  const isOutOfStock = product.stock <= 0;

  const hasDiscount =
    product.originalPrice !== undefined &&
    product.originalPrice > product.price;

  const discountPercentage =
    product.discountPercentage ??
    (hasDiscount
      ? Math.round(
          ((product.originalPrice! - product.price) / product.originalPrice!) *
            100,
        )
      : undefined);

  const handleAddToCart = () => {
    if (isOutOfStock) return;

    dispatch(addProduct(product.id));
  };

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <div className={styles.badges}>
          {discountPercentage !== undefined && discountPercentage > 0 && (
            <span className={`${styles.badge} ${styles.discountBadge}`}>
              {discountPercentage}% OFF
            </span>
          )}

          {product.isNew && (
            <span className={`${styles.badge} ${styles.newBadge}`}>
              Novidade
            </span>
          )}

          {product.isBestSeller && showBestSellerBadge && (
            <span className={`${styles.badge} ${styles.bestSellerBadge}`}>
              Mais vendido
            </span>
          )}
        </div>

        <button
          type="button"
          className={`${styles.favoriteButton} ${
            isFavorite ? styles.favoriteButtonActive : ""
          }`}
          onClick={() => dispatch(toggleFavorite(product.id))}
          aria-label={
            isFavorite
              ? `Remover ${product.name} dos favoritos`
              : `Adicionar ${product.name} aos favoritos`
          }
        >
          <FiHeart aria-hidden="true" />
        </button>

        <Link
          href={`/products/${product.slug}`}
          className={styles.imageLink}
          aria-label={`Ver detalhes de ${product.name}`}
        >
          <Image
            src={productImage}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 280px"
            className={styles.image}
          />
        </Link>

        {isOutOfStock && (
          <span className={styles.outOfStock}>Produto esgotado</span>
        )}
      </div>

      <div className={styles.content}>
        {product.categoryLabel && (
          <span className={styles.category}>{product.categoryLabel}</span>
        )}

        <Link href={`/products/${product.slug}`} className={styles.nameLink}>
          <h3 className={styles.name}>{product.name}</h3>
        </Link>

        <p className={styles.description}>{product.description}</p>

        <div
          className={styles.rating}
          aria-label={`${product.rating} de 5 estrelas, com ${product.reviewCount} avaliações`}
        >
          <FiStar aria-hidden="true" />
          <strong>{product.rating.toFixed(1)}</strong>
          <span>({product.reviewCount})</span>
        </div>

        <div className={styles.footer}>
          <div className={styles.prices}>
            {hasDiscount && (
              <span className={styles.originalPrice}>
                {formatCurrency(product.originalPrice ?? 0)}
              </span>
            )}

            <strong>{formatCurrency(product.price)}</strong>

            <span className={styles.installments}>
              ou 10x de {formatCurrency(product.price / 10)}
            </span>
          </div>

          <button
            type="button"
            className={styles.cartButton}
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            aria-label={
              isOutOfStock
                ? `${product.name} está esgotado`
                : `Adicionar ${product.name} ao carrinho`
            }
          >
            <FiShoppingCart aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
};
