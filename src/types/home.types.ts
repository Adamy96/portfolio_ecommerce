import type { Product } from "./product.types";

export type CategoryIcon =
  | "electronics"
  | "home"
  | "fashion"
  | "beauty"
  | "sports"
  | "accessories"
  | "offers"
  | "new";

export type Category = {
  id: string;
  name: string;
  href: string;
  icon: CategoryIcon;
  highlighted?: boolean;
};

export type BenefitIcon = "shipping" | "security" | "payment" | "support";

export type Benefit = {
  id: string;
  title: string;
  description: string;
  icon: BenefitIcon;
};

export type Promo = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  actionLabel: string;
  href: string;
  image: string;
  variant: "purple" | "beige" | "green";
};

export type InspirationItem = {
  id: string;
  image: string;
  alt: string;
};

export type HomeData = {
  categories: Category[];
  benefits: Benefit[];
  bestSellers: Product[];
  promos: Promo[];
  inspirationItems: InspirationItem[];
};
