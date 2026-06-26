import type { HomeData } from "@/types/home.types";

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
  bestSellers: [
    {
      id: "wireless-earbuds",
      slug: "wireless-earbuds-prosound",
      name: "Fone de Ouvido Bluetooth ProSound",
      description: "Som potente e cancelamento de ruído.",
      longDescription:
        "Fone de ouvido Bluetooth desenvolvido para oferecer áudio de alta qualidade, conforto durante longos períodos de uso e cancelamento ativo de ruído.",
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=85",
      images: [
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=85",
      ],
      price: 199.9,
      originalPrice: 249.9,
      discountPercentage: 20,
      rating: 4.8,
      reviewCount: 256,
      category: "electronics",
      categoryLabel: "Eletrônicos",
      stock: 24,
      isBestSeller: true,
      isFeatured: true,
      isNew: false,
      colors: [
        {
          name: "Preto",
          value: "#18181B",
        },
        {
          name: "Branco",
          value: "#F4F4F5",
        },
      ],
      specifications: [
        {
          label: "Conectividade",
          value: "Bluetooth 5.3",
        },
        {
          label: "Autonomia",
          value: "Até 30 horas",
        },
        {
          label: "Cancelamento de ruído",
          value: "Ativo",
        },
        {
          label: "Garantia",
          value: "1 ano",
        },
      ],
    },
    {
      id: "smartwatch",
      slug: "smartwatch-x1-pro",
      name: "Smartwatch X1 Pro GPS e Monitor Cardíaco",
      description: "Saúde, esporte e notificações no pulso.",
      longDescription:
        "Smartwatch com monitoramento de atividades físicas, frequência cardíaca, sono, GPS integrado e exibição de notificações.",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=85",
      images: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=85",
      ],
      price: 599.9,
      rating: 4.7,
      reviewCount: 182,
      category: "electronics",
      categoryLabel: "Eletrônicos",
      stock: 18,
      isBestSeller: true,
      isFeatured: true,
      isNew: true,
      colors: [
        {
          name: "Preto",
          value: "#111827",
        },
        {
          name: "Prata",
          value: "#A1A1AA",
        },
      ],
      specifications: [
        {
          label: "Tela",
          value: "AMOLED de 1,43 polegadas",
        },
        {
          label: "Autonomia",
          value: "Até 10 dias",
        },
        {
          label: "Proteção",
          value: "5 ATM",
        },
        {
          label: "Sensores",
          value: "Frequência cardíaca, SpO2 e GPS",
        },
      ],
    },
    {
      id: "coffee-maker",
      slug: "coffee-maker-programmable",
      name: "Cafeteira Elétrica Programável 30 Xícaras",
      description: "Café pronto na hora certa todos os dias.",
      longDescription:
        "Cafeteira elétrica programável com capacidade para até 30 xícaras, sistema corta-pingos e função para manter o café aquecido.",
      image:
        "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=85",
      images: [
        "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
      ],
      price: 239.9,
      originalPrice: 279.9,
      discountPercentage: 15,
      rating: 4.9,
      reviewCount: 312,
      category: "home",
      categoryLabel: "Casa",
      stock: 32,
      isBestSeller: true,
      isFeatured: true,
      isNew: false,
      colors: [
        {
          name: "Preto",
          value: "#27272A",
        },
      ],
      specifications: [
        {
          label: "Capacidade",
          value: "30 xícaras",
        },
        {
          label: "Potência",
          value: "900 W",
        },
        {
          label: "Programação",
          value: "Até 24 horas",
        },
        {
          label: "Voltagem",
          value: "127 V",
        },
      ],
    },
    {
      id: "running-shoes",
      slug: "running-comfort-plus",
      name: "Tênis Running Comfort Plus",
      description: "Conforto leve para corrida e caminhada.",
      longDescription:
        "Tênis esportivo com cabedal respirável, amortecimento leve e solado desenvolvido para corridas, caminhadas e atividades do dia a dia.",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=85",
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85",
      ],
      price: 279.9,
      rating: 4.6,
      reviewCount: 98,
      category: "sports",
      categoryLabel: "Esportes",
      stock: 15,
      isBestSeller: true,
      isFeatured: false,
      isNew: false,
      colors: [
        {
          name: "Vermelho",
          value: "#DC2626",
        },
        {
          name: "Preto",
          value: "#18181B",
        },
      ],
      specifications: [
        {
          label: "Material",
          value: "Tecido respirável",
        },
        {
          label: "Solado",
          value: "Borracha antiderrapante",
        },
        {
          label: "Indicação",
          value: "Corrida e caminhada",
        },
        {
          label: "Fechamento",
          value: "Cadarço",
        },
      ],
    },
    {
      id: "backpack",
      slug: "executive-waterproof-backpack",
      name: "Mochila Executiva Impermeável",
      description: "Organização e proteção para a rotina.",
      longDescription:
        "Mochila executiva impermeável com compartimento acolchoado para notebook, múltiplos bolsos e estrutura confortável para uso diário.",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=85",
      images: [
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=85",
      ],
      price: 169.9,
      originalPrice: 199.9,
      discountPercentage: 15,
      rating: 4.7,
      reviewCount: 76,
      category: "accessories",
      categoryLabel: "Acessórios",
      stock: 27,
      isBestSeller: true,
      isFeatured: false,
      isNew: false,
      colors: [
        {
          name: "Preto",
          value: "#18181B",
        },
        {
          name: "Cinza",
          value: "#52525B",
        },
      ],
      specifications: [
        {
          label: "Capacidade",
          value: "25 litros",
        },
        {
          label: "Notebook",
          value: "Até 15,6 polegadas",
        },
        {
          label: "Material",
          value: "Poliéster impermeável",
        },
        {
          label: "Compartimentos",
          value: "6",
        },
      ],
    },
  ],
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
      alt: "Headphones on a wooden table",
    },
    {
      id: "inspiration-backpack",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=85",
      alt: "Person carrying a black backpack",
    },
    {
      id: "inspiration-tech",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=85",
      alt: "Technology products on a table",
    },
    {
      id: "inspiration-fitness",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
      alt: "Fitness lifestyle",
    },
    {
      id: "inspiration-coffee",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85",
      alt: "Coffee maker and coffee cups",
    },
  ],
};
