"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FiHeart,
  FiMenu,
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiX,
} from "react-icons/fi";
import { useAppSelector } from "@/store/hooks";
import styles from "./Header.module.scss";

const navigationItems = [
  { label: "Novidades", href: "/products?new=true" },
  { label: "Mais vendidos", href: "/products?sort=best-sellers" },
  { label: "Ofertas", href: "/products?offers=true" },
  { label: "Eletrônicos", href: "/products?category=electronics" },
  { label: "Casa", href: "/products?category=home" },
  { label: "Moda", href: "/products?category=fashion" },
  { label: "Beleza", href: "/products?category=beauty" },
  { label: "Esportes", href: "/products?category=sports" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartQuantity = useAppSelector((state) =>
    state.cart.items.reduce(
      (total, currentItem) => total + currentItem.quantity,
      0,
    ),
  );

  const favoritesQuantity = useAppSelector(
    (state) => state.favorites.productIds.length,
  );

  return (
    <>
      <div className={styles.announcement}>
        Frete grátis em pedidos acima de R$ 299
      </div>

      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.mainRow}>
            <button
              type="button"
              className={styles.menuButton}
              onClick={() => setIsMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <FiMenu />
            </button>

            <Link href="/" className={styles.logo}>
              NOVA<span>.</span>
            </Link>

            <form className={styles.search}>
              <input
                type="search"
                placeholder="Buscar produtos, categorias ou marcas..."
                aria-label="Buscar produtos"
              />
              <button type="submit" aria-label="Buscar">
                <FiSearch />
              </button>
            </form>

            <div className={styles.actions}>
              <Link href="/account" className={styles.accountLink}>
                <FiUser />
                <span>
                  <strong>Entrar</strong>
                  <small>ou cadastre-se</small>
                </span>
              </Link>

              <Link href="/favorites" className={styles.iconLink}>
                <FiHeart />
                <span>Favoritos</span>

                {favoritesQuantity > 0 && (
                  <strong className={styles.counter}>
                    {favoritesQuantity}
                  </strong>
                )}
              </Link>

              <Link href="/cart" className={styles.iconLink}>
                <FiShoppingBag />
                <span>Carrinho</span>

                {cartQuantity > 0 && (
                  <strong className={styles.counter}>{cartQuantity}</strong>
                )}
              </Link>
            </div>
          </div>

          <nav className={styles.navigation} aria-label="Navegação principal">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <div
        className={`${styles.mobileOverlay} ${
          isMenuOpen ? styles.mobileOverlayOpen : ""
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        className={`${styles.mobileMenu} ${
          isMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <div className={styles.mobileMenuHeader}>
          <strong>Menu</strong>

          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Fechar menu"
          >
            <FiX />
          </button>
        </div>

        <nav>
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};
