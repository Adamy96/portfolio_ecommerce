import { productsMock } from "@/mocks/products.mock";
import type {
  GetProductsParams,
  GetProductsResponse,
  Product,
  ProductCategory,
} from "@/types/product.types";

const MOCK_DELAY = 250;

const wait = async (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

export const getProducts = async (
  params: GetProductsParams = {},
): Promise<GetProductsResponse> => {
  await wait(MOCK_DELAY);

  const {
    search = "",
    category,
    minPrice,
    maxPrice,
    inStock,
    offers,
    isNew,
    sort = "featured",
    page = 1,
    limit = 6,
  } = params;

  const normalizedSearch = search.trim().toLocaleLowerCase("pt-BR");

  let filteredProducts = productsMock.filter((product: Product) => {
    const matchesSearch =
      !normalizedSearch ||
      product.name.toLocaleLowerCase("pt-BR").includes(normalizedSearch) ||
      product.description.toLocaleLowerCase("pt-BR").includes(normalizedSearch);

    const matchesCategory = !category || product.category === category;
    const matchesMinPrice = minPrice === undefined || product.price >= minPrice;
    const matchesMaxPrice = maxPrice === undefined || product.price <= maxPrice;
    const matchesStock = !inStock || (product.stock ?? 0) > 0;
    const matchesOffer =
      !offers ||
      (product.originalPrice !== undefined &&
        product.originalPrice > product.price);
    const matchesNew = !isNew || product.isNew === true;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesMinPrice &&
      matchesMaxPrice &&
      matchesStock &&
      matchesOffer &&
      matchesNew
    );
  });

  filteredProducts = [...filteredProducts].sort((first, second) => {
    if (sort === "price-asc") return first.price - second.price;
    if (sort === "price-desc") return second.price - first.price;
    if (sort === "rating") return second.rating - first.rating;
    if (sort === "newest") return Number(second.isNew) - Number(first.isNew);

    return Number(second.isFeatured) - Number(first.isFeatured);
  });

  const safePage = Math.max(page, 1);
  const safeLimit = Math.max(limit, 1);
  const total = filteredProducts.length;
  const totalPages = Math.max(Math.ceil(total / safeLimit), 1);
  const start = (safePage - 1) * safeLimit;

  return {
    products: filteredProducts.slice(start, start + safeLimit),
    total,
    page: Math.min(safePage, totalPages),
    limit: safeLimit,
    totalPages,
  };
};

export const getProductBySlug = async (
  slug: string,
): Promise<Product | null> => {
  await wait(MOCK_DELAY);

  return productsMock.find((product: Product) => product.slug === slug) ?? null;
};

export const getRelatedProducts = async (
  productId: string,
  category: ProductCategory,
  limit = 4,
): Promise<Product[]> => {
  await wait(MOCK_DELAY);

  return productsMock
    .filter(
      (product: Product) =>
        product.id !== productId && product.category === category,
    )
    .slice(0, limit);
};

export const getAllProductSlugs = async (): Promise<string[]> => {
  await wait(20);

  return productsMock.map((product: Product) => product.slug);
};
