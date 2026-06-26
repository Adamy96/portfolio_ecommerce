import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <button
        type="button"
        className={`${styles.navigationButton} ${styles.previousButton}`}
        aria-label="Banner anterior"
      >
        <FiArrowLeft />
      </button>

      <div className={styles.content}>
        <span className={styles.eyebrow}>Lançamento</span>

        <h1 className={styles.title}>Sinta cada detalhe.</h1>

        <p className={styles.description}>
          Tecnologia e design para transformar o seu jeito de ouvir.
        </p>

        <Link href="/products/headphones" className={styles.button}>
          Conheça agora
          <FiArrowRight />
        </Link>
      </div>

      <div className={styles.productVisual} aria-hidden="true">
        <div className={styles.headphone}>
          <div className={styles.headband} />
          <div className={styles.leftEar} />
          <div className={styles.rightEar} />
        </div>
      </div>

      <button
        type="button"
        className={`${styles.navigationButton} ${styles.nextButton}`}
        aria-label="Próximo banner"
      >
        <FiArrowRight />
      </button>

      <div className={styles.indicators}>
        <button type="button" className={styles.activeIndicator} />
        <button type="button" />
        <button type="button" />
      </div>
    </section>
  );
};
