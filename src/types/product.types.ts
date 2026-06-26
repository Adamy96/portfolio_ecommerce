export type GetProductsParams = {
  search?: string;
  category?: ProductCategory;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  offers?: boolean;
  isNew?: boolean;
  sort?: ProductSort;
  page?: number;
  limit?: number;
};

export type GetProductsResponse = {
  products: Product[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type ProductCategory =
  | "electronics"
  | "home"
  | "fashion"
  | "beauty"
  | "sports"
  | "accessories";

export type ProductColor = {
  name: string;
  value: string;
};

export type ProductSort =
  | "featured"
  | "newest"
  | "rating"
  | "price-asc"
  | "price-desc";

export type ProductSpecification = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  images?: string[];
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  rating: number;
  reviewCount: number;
  category: ProductCategory;
  categoryLabel: string;
  stock: number;
  isBestSeller?: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  longDescription?: string;
  colors?: ProductColor[];
  specifications?: ProductSpecification[];
};
