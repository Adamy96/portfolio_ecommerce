import { productsMock } from "@/mocks/products.mock";
import type { HomeData } from "@/types/home.types";

const bestSellers = productsMock
  .filter((product) => product.isBestSeller)
  .slice(0, 5);

export const homeMock: HomeData = {
  categories: [
    {
      id: "electronics",
      name: "Eletrônicos",
      href: "/products?category=electronics",
      icon: "electronics",
    },
    {
      id: "home",
      name: "Casa",
      href: "/products?category=home",
      icon: "home",
    },
    {
      id: "fashion",
      name: "Moda",
      href: "/products?category=fashion",
      icon: "fashion",
    },
    {
      id: "beauty",
      name: "Beleza",
      href: "/products?category=beauty",
      icon: "beauty",
    },
    {
      id: "sports",
      name: "Esportes",
      href: "/products?category=sports",
      icon: "sports",
    },
    {
      id: "accessories",
      name: "Acessórios",
      href: "/products?category=accessories",
      icon: "accessories",
    },
    {
      id: "offers",
      name: "Ofertas",
      href: "/products?offers=true",
      icon: "offers",
      highlighted: true,
    },
    {
      id: "new",
      name: "Novidades",
      href: "/products?new=true",
      icon: "new",
    },
  ],
  benefits: [
    {
      id: "shipping",
      title: "Frete grátis",
      description: "Acima de R$ 299 para todo o Brasil",
      icon: "shipping",
    },
    {
      id: "security",
      title: "Compra segura",
      description: "Seus dados protegidos sempre",
      icon: "security",
    },
    {
      id: "payment",
      title: "Parcele em até 12x",
      description: "No cartão de crédito com juros",
      icon: "payment",
    },
    {
      id: "support",
      title: "Atendimento",
      description: "Suporte humano e rápido",
      icon: "support",
    },
  ],
  bestSellers,
  promos: [
    {
      id: "offers",
      eyebrow: "Até 30% OFF",
      title: "Ofertas imperdíveis",
      description: "Aproveite enquanto durar.",
      actionLabel: "Ver ofertas",
      href: "/products?offers=true",
      image:
        "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=85",
      variant: "purple",
    },
    {
      id: "new-products",
      eyebrow: "Novidades",
      title: "Produtos que acabaram de chegar",
      description: "Descubra os últimos lançamentos.",
      actionLabel: "Ver novidades",
      href: "/products?new=true",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=85",
      variant: "beige",
    },
    {
      id: "sports",
      eyebrow: "Esporte",
      title: "Esporte é seu estilo?",
      description: "Equipamentos com até 25% OFF.",
      actionLabel: "Ver agora",
      href: "/products?category=sports",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=85",
      variant: "green",
    },
  ],
  inspirationItems: [
    {
      id: "inspiration-headphones",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=85",
      alt: "Fone de ouvido sobre uma mesa de madeira",
    },
    {
      id: "inspiration-backpack",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=85",
      alt: "Pessoa utilizando uma mochila preta",
    },
    {
      id: "inspiration-tech",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=85",
      alt: "Produtos tecnológicos sobre uma mesa",
    },
    {
      id: "inspiration-fitness",
      image:
        "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=800&q=85",
      alt: "Pessoa praticando atividade física",
    },
    {
      id: "inspiration-coffee",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85",
      alt: "Cafeteira e xícaras de café",
    },
  ],
};
