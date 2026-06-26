import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import type { InspirationItem } from "@/types/home.types";
import styles from "./Inspiration.module.scss";

type InspirationProps = {
  items: InspirationItem[];
};

export const Inspiration = ({ items }: InspirationProps) => {
  return (
    <section className={styles.inspiration}>
      <div className={styles.header}>
        <div>
          <h2>Inspire-se</h2>
          <p>@novastore.oficial</p>
        </div>

        <Link href="https://instagram.com" target="_blank">
          Ver mais no Instagram
          <FiArrowRight />
        </Link>
      </div>

      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item.id} className={styles.item}>
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 70vw, 20vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
