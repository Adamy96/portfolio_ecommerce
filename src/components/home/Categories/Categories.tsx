import Link from "next/link";
import {
  FiHome,
  FiMonitor,
  FiShoppingBag,
  FiStar,
  FiTag,
  FiWatch,
} from "react-icons/fi";
import { GiLipstick, GiRunningShoe } from "react-icons/gi";
import type { Category, CategoryIcon } from "@/types/home.types";
import styles from "./Categories.module.scss";

type CategoriesProps = {
  categories: Category[];
};

const categoryIcons: Record<CategoryIcon, React.ReactNode> = {
  electronics: <FiMonitor />,
  home: <FiHome />,
  fashion: <FiShoppingBag />,
  beauty: <GiLipstick />,
  sports: <GiRunningShoe />,
  accessories: <FiWatch />,
  offers: <FiTag />,
  new: <FiStar />,
};

export const Categories = ({ categories }: CategoriesProps) => {
  return (
    <section className={styles.categories} aria-label="Categorias">
      <div className={styles.container}>
        {categories.map((category) => (
          <Link
            key={category.id}
            href={category.href}
            className={`${styles.item} ${
              category.highlighted ? styles.highlightedItem : ""
            }`}
          >
            <span className={styles.icon}>{categoryIcons[category.icon]}</span>

            <span>{category.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};
