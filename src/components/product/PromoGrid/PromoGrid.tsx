import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import type { Promo } from "@/types/home.types";
import styles from "./PromoGrid.module.scss";

type PromoGridProps = {
  promos: Promo[];
};

export const PromoGrid = ({ promos }: PromoGridProps) => {
  return (
    <section className={styles.promos}>
      {promos.map((promo) => (
        <article
          key={promo.id}
          className={`${styles.card} ${styles[promo.variant]}`}
        >
          <div className={styles.content}>
            <span>{promo.eyebrow}</span>
            <h2>{promo.title}</h2>
            <p>{promo.description}</p>

            <Link href={promo.href}>
              {promo.actionLabel}
              <FiArrowRight />
            </Link>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src={promo.image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className={styles.image}
            />
          </div>
        </article>
      ))}
    </section>
  );
};
