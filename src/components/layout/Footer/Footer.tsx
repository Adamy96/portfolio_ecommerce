import Link from "next/link";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            NOVA<span>.</span>
          </Link>

          <p>
            Produtos para deixar sua rotina mais simples, conectada e
            inspiradora.
          </p>
        </div>

        <div className={styles.column}>
          <h2>Institucional</h2>
          <Link href="/about">Sobre nós</Link>
          <Link href="/contact">Contato</Link>
          <Link href="/privacy">Privacidade</Link>
        </div>

        <div className={styles.column}>
          <h2>Atendimento</h2>
          <Link href="/help">Central de ajuda</Link>
          <Link href="/orders">Acompanhar pedido</Link>
          <Link href="/returns">Trocas e devoluções</Link>
        </div>

        <div className={styles.social}>
          <h2>Siga a Nova</h2>

          <div>
            <Link href="https://instagram.com" aria-label="Instagram">
              <FiInstagram />
            </Link>

            <Link href="https://facebook.com" aria-label="Facebook">
              <FiFacebook />
            </Link>

            <Link href="https://twitter.com" aria-label="Twitter">
              <FiTwitter />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        © {new Date().getFullYear()} Nova Store. Todos os direitos reservados.
      </div>
    </footer>
  );
};
